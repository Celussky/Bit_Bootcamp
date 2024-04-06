const mongoose = require('mongoose')
const juguetesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    marca: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    // versionKey: false
})

module.exports = mongoose.model('juguete', juguetesSchema)
