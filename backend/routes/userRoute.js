const Joi = require('joi')
const User = require('../models/User.js')
const express = require('express')
const Router = express.Router()
const bcrypt = require('bcryptjs')


function validateUserPost(obj){
    const schema = Joi.object({
        username: Joi.string().trim().min(3).max(15).required(),
        userEmail: Joi.string().trim().min(20).max(25).required(),
        userPassword: Joi.string().trim().min(8).max(15).required(),
        isProvider: Joi.boolean(),
        serviceTitle: Joi.string().trim().min(10).max(20),
        serviceDetails: Joi.string().trim().min(20).max(50),
        servicePrice: Joi.number()
    })
    return schema.validate(obj)
}
function validateUserPut(obj){
    const schema = Joi.object({
        username: Joi.string().trim().min(3).max(15),
        userEmail: Joi.string().trim().min(20).max(25),
        userPassword: Joi.string().trim().min(8).max(15),
        isProvider: Joi.boolean(),
        serviceTitle: Joi.string().trim().min(10).max(20),
        serviceDetails: Joi.string().trim().min(20).max(50),
        servicePrice: Joi.number()
    })
    return schema.validate(obj)
}

// add user

Router.post('/register', async (req, res) => {
    try {
        const { error } = validateUserPost(req.body)
        if( error ){
            return res.json({message: error.details[0].message })
        }
        const newUser = await new User(req.body)
        await newUser.save()
        res.status(201).json({status: 'success', data: newUser})
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
})


// get all users
Router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({status: 'success', data: users})
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
})


// get single user
Router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(!user){
            return res.status(404).json({status: 'failed', message: 'User not found'})
        }
        res.status(200).json({status: 'success', data: user})
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
})


// update user
Router.put('/:userId', async (req, res) => {
    try {
        if(!User.findById(req.params.userId)){
            return res.status(404).json({status: 'failed', message: 'User not found'})
        }
        const { error } = validateUserPut(req.body)
        if( error ){
            return res.json({message: error.details[0].message })
        }
        const user = await User.findByIdAndUpdate(req.params.userId, {
            $set:{
                ...req.body
            }
        }, { new: true })
        return res.status(200).json(user)
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
})


// delete user
Router.delete('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if(!user){
            return res.status(404).json({status: 'failed', message: 'User not found'})
        }
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json({status: 'success', data: 'user was deleted'})
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
})

module.exports = Router