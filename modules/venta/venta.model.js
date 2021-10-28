(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var VentaSchema = new Schema({
        valorTotal: {
            type: String,
            required: true
        },
        idProducto: {
            type: String,
            required: true
        },
        precioProducto: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        fecha: {
            type: String,
            required: true
        },
        idCliente: {
            type: Number,
            required: true
        },
        nombreCliente: {
            type: String,
            required: true
        },
        vendedor: {
            type: String,
            required: true
        },
        estado:String
    });

    module.exports = mongoose.model('ventas', VentaSchema);
})();