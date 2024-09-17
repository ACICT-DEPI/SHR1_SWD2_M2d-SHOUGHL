const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema(
    {
        username: String,
        userEmail: {
            type: String,
            valid: validator.isEmail('foo@bar.com')
        },
        userPassword: String,
        userImage: String,
        userCountry: String,
        userPhoneNumber: String,
        token: String
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)
module.exports = User 