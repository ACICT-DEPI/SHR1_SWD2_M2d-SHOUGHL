const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema(
    {
        username: String,
        userEmail: String,
        // userEmail: {
        //     type: String,
        //     valid: validator.isEmail
        // },
        userPassword: String,
        isProvider: Boolean,
        serviceTitle: String,
        serviceDetails: String,
        servicePrice: Number,
        token: String
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)
module.exports = User 