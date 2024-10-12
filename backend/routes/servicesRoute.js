const express = require('express');
const Router = express.Router();

const { 
    createService,
    getServices,
    getServiceById,
    editService,
    deleteService,
    buyService}

= require('../controlers/servicesControler.js');
const protectRoute = require('../Utiles/protectRoute.js');


Router.route('/').get(getServices)


Router.route('/:userId').get(getServiceById)
                        .put(editService)
                        .delete(deleteService)
                        .post(createService)

                        
Router.get('/:serviceId/:userId', buyService) 

module.exports = Router;
