const express = require('express')
const Router = express.Router()
const {
    deleteUser,
    updateUser,
    createUser,
    loginUser,
    getUsers,
    getUser,
    uploadImage,
    upload,
    getProviders,
    logOutUser,
} = require('../controlers/userControler.js')
// const protectRoute = require('../Utiles/protectRoute.js')


Router.post('/register', createUser)

Router.post('/login', loginUser)

Router.get('/logout', logOutUser)

// Router.post('/image', setUserImage)

Router.get('/', getUsers)

Router.get('/providers', getProviders)

Router.route('/:userId').get(getUser)
                        .put(updateUser)
                        .delete(deleteUser)

Router.post('/users/:userId/uploadimage', upload, uploadImage);
Router.put('/users/:userId/uploadimage', upload,uploadImage);

module.exports = Router