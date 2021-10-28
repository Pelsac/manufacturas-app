(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ProductoSchema = new Schema({
        nombreProducto: {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: true
        },
        codigoBarras: {
            type: Number,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        precioProducto: {
            type: Number,
            required: true
        },
        estado: String
    });

    module.exports = mongoose.model('productos', ProductoSchema);
})();