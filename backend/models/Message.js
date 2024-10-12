const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
        reciever: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
            },
        content: String
    },
    {
        timestamps: true
    }
)

const Message = mongoose.model('Message', messageSchema)
module.exports = Message 