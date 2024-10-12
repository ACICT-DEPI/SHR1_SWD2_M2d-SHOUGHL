const joi = require('joi')
const Message = require('../models/Message')
const Chat = require('../models/Chat')

const sendMessage = async (req, res) => {

    const senderId = req.user._id
    const recieverId = req.params.id

    let chat = Chat.findOne({
        $all: {senderId, recieverId}
    })
    if(!chat){
        chat = Chat.create({
            participints: {senderId, recieverId}
        })
    }
    
}