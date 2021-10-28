(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            Customer2Controller: require('./customer2.controller'),
            Customer2Middleware: require('./customer2.middleware'),
            Customer2Service: require('./customer2.service'),
            Customer2Model: require('./customer2.model')
        }
    }

})();