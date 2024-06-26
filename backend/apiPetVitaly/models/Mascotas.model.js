const mongoose = require('mongoose')
const mascotasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    vacunado: {
        type: Boolean,
        required: true
    },
    diagnostico: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    // versionKey: false
})

module.exports = mongoose.model('mascota', mascotasSchema)
