const mongoose = require('mongoose')
const { castObject } = require('./Provider')
const Provider = require('./Provider')

const servicesSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        provider: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Provider'
        }],
        serviceTitle: String,
        serviceDetails: String,
        servicePrice: Number,
        serviceCategory: String
    },
    {
        timestamps: true
    }
)

const Servise = mongoose.model('Servise', servicesSchema)
module.exports = Servise 