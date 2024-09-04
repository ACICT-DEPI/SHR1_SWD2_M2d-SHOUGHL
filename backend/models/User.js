const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: String,
        userEmail: String,
        userPassword: String,
        isProvider: Boolean,
        serviceTitle: String,
        serviceDetails: String,
        servicePrice: Number
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)
module.exports = User 