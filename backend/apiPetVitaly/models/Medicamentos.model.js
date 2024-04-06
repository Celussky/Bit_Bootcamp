const mongoose = require('mongoose')
const medicamentosSchema = mongoose.Schema({
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
    },
    fecha_vencimiento: {
        type: Date,
        required: true
    },
    fecha_fabricacion: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    // versionKey: false
})

module.exports = mongoose.model('medicamento', medicamentosSchema)
