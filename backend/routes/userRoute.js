const express = require('express')
const Router = express.Router()
const {
    deleteUser,
    updateUser,
    createUser,
    loginUser,
    getUsers,
    getUser
} = require('../controlers/userControler.js')


Router.post('/register', createUser)

Router.post('/login', loginUser)

Router.get('/', getUsers)

Router.route('/:userId').get(getUser)
                        .put(updateUser)
                        .delete(deleteUser)


module.exports = Router