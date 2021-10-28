(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var Customer2Middleware = require('./customer2.module')().Customer2Middleware;

    router.post('/',
        Customer2Middleware.addCustomer,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        Customer2Middleware.getCustomers,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:customerId',
        Customer2Middleware.getCustomerById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:customerId',
        Customer2Middleware.modifyCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/:customerId',
        Customer2Middleware.removeCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();