const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    codigo: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    
});

module.exports = mongoose.model('Producto', ProductoSchema);