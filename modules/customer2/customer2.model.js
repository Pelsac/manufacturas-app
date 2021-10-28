(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var Customer2Schema = new Schema({
        user2: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('customers2', Customer2Schema);
})();