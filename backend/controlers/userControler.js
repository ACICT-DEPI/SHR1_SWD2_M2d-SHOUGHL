const Joi = require('joi')
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()


function validateUserPost(obj){
    const schema = Joi.object({
        username: Joi.string().trim().min(3).max(15).required(),
        userEmail: Joi.string().trim().min(20).max(25).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        userPassword: Joi.string().trim().min(8).max(15).required(),
        image: Joi.string().trim()
    })
    return schema.validate(obj)
}
function validateUserPut(obj){
    const schema = Joi.object({
        username: Joi.string().trim().min(3).max(15),
        userEmail: Joi.string().trim().min(20).max(25),
        userPassword: Joi.string().trim().min(8).max(15),
        image: Joi.string().trim()
    })
    return schema.validate(obj)
}

const getUser = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({status: 'success', data: users})
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
}

const getUsers = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if(!user){
            return res.status(404).json({status: 'failed', message: 'User not found'})
        }
        res.status(200).json({status: 'success', data: user})
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
}

const loginUser = async (req, res) => {
    const loggingInUser = await User.findOne({userEmail: req.body.userEmail})
    if(!loggingInUser){
        return res.status(500).json({data: 'This Email is not registered!', success: false})
    }
    bcrypt.compare( req.body.userPassword, loggingInUser.userPassword, (err, result) => {
        if(err){
            return res.status(400).json({data: 'Password is not correct!', success: false})
        }
    })
    const genToken = jwt.sign({ id: req.body._id, email: req.body.userEmail }, process.env.SECRET_KEY)
    loggingInUser.token = genToken
    return res.status(200).json({data: 'Logged in Successfully', success: true, body: loggingInUser})
} 

const createUser = async (req, res) => {
    try {
        const { error } = validateUserPost(req.body)
        if( error ){
            return res.json({data: error.details[0].message, success: false })
        }

        const isAlreadyUser = await User.findOne({userEmail: req.body.userEmail})
        if(isAlreadyUser){
            return res.status(500).json({data: 'This email already excist', success: false})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.userPassword, salt)

        const genToken = jwt.sign({ id: req.body._id, email: req.body.userEmail }, process.env.SECRET_KEY)

        const newUser = new User({ ...req.body, token: genToken, userPassword: hashedPassword})
        await newUser.save()

        return res.status(201).json({data: 'User Added Successfully', success: true, body: newUser})
        
    } catch (error) {
        res.json({data: error.message, success: false})
    }
}

const updateUser = async (req, res) => {
    try {
        if(!User.findById(req.params.userId)){
            return res.status(404).json({success: false, data: 'User not found'})
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
        return res.status(200).json({data: user, success: true})
    } catch (error) {
        res.json({status: 'failed', data: error.message})
    }
}

const deleteUser = async (req, res) => {
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
}

module.exports = {
    deleteUser,
    updateUser,
    createUser,
    loginUser,
    getUsers,
    getUser
}