const mongoose = require('mongoose')
const validator = require('validator')

const providerSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        user: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        }],
        services: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Servise'
        },
    },
    {
        timestamps: true
    }
)

const Provider = mongoose.model('Provider', providerSchema)
module.exports = Provider 