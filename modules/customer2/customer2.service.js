(function () {
    'use strict';

    module.exports = {
        createCustomer: createCustomer,
        fetchCustomers: fetchCustomers,
        fetchCustomerById: fetchCustomerById,
        updateCustomer: updateCustomer,
        deleteCustomer: deleteCustomer
    };

    var Customer2Model = require('./customer2.module')().Customer2Model;

    function createCustomer(customer) {
        return Customer2Model.create(customer);
    }

    function fetchCustomers() {
        return Customer2Model.find({})
            .exec();
    }

    function fetchCustomerById(customerId) {
        return Customer2Model.findById(customerId)
            .exec();
    }

    function updateCustomer(customerId, customer) {
        return Customer2Model
            .findByIdAndUpdate(customerId, customer, {new: true})
            .exec();
    }

    function deleteCustomer(customerId) {
        return Customer2Model
            .findByIdAndRemove(customerId)
            .exec();
    }

})();