const Joi = require('joi')
const Servise = require('../models/Service')

const validateAddService = (obj) => {
    const schema = Joi.object({
        serviceTitle: Joi.string().trim().max(20).min(5).required(),
        serviceDetails: Joi.string().trim().max(50).min(15).required(),
        serviceCategory: Joi.string().trim().max(20).min(5).required(),
        servicePrice: Joi.number().required()
    })
    return schema.validate(obj)
}

const validateEditService = (obj) => {
    const schema = Joi.object({
        serviceTitle: Joi.string().trim().max(20).min(5),
        serviceDetails: Joi.string().trim().max(50).min(15),
        serviceCategory: Joi.string().trim().max(20).min(5),
        servicePrice: Joi.number()
    })
    return schema.validate(obj)
}

//  Add service

const createService = async (req, res) => {
    try {
        const { error } = validateAddService(req.body)
        if( error ){
            return res.status(400).json({data: error.details[0].message, success: false })
        }
        const newservice = new Servise(req.body)
        await newservice.save()
        res.status(201).json({data: newservice, success: true})
    } catch (error) {
        return res.status(400).res({data: error, success: false })
    }
}

//  update service

const editService = async (req, res) => {
    try{
        if(!Servise.findById(req.params.serviceId)){
            return res.status(404).json({success: false, data: 'Service not found'})
        }
        const { error } = validateEditService(req.body)
        if(error){
            return res.status(400).json({data: error.details[0].message, success: false })
        }
        const service = await Servise.findByIdAndUpdate(req.params.serviceId, {
            $set:{
                ...req.body
            }
        }, { new: true })
        return res.status(200).json({data: service, success: true})
    } catch (error) {
        return res.status(400).res({data: error, success: false })
    }
}