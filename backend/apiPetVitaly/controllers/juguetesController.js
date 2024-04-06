const JuguetesModel = require('../models/Juguetes.model')

exports.consultarJuguetes = async (req, res) => {
    try {
        let dataJuguetes = await JuguetesModel.find()
        res.json(dataJuguetes)
    } catch (error) {
        res.status(500).send({ error: "Ha ocirrido algo, comuníquese con el administrador" })
    }
}

exports.consultarUnJuguete = async (req, res) => {
    try {
        let dataJuguetes = await JuguetesModel.findById(req.params.jugueteId)
        if (!dataJuguetes) {
            res.status(404).send({ error: "No se ha encontrado el juguete" })
        } else {
            res.send(dataJuguetes)
        }
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.crearJuguete = async (req, res) => {
    try {
        let nuevoJuguete = new JuguetesModel(req.body)
        await nuevoJuguete.save()
        res.send(nuevoJuguete)
        console.log(req.body);
    } catch (error) {
        res.status(500).send({ error: "Ha ocirrido algo, comuníquese con el administrador" })

    }
}

exports.actualizarJuguete = async (req, res) => {
    try {
        if (req.params.jugueteId.length == 24) {
            let dataJuguete = await JuguetesModel.findById(req.params.jugueteId)
            if (!dataJuguete) {
                res.status(404).send({ error: "No se ha encontrado el juguete" })
                return
            }
            const { nombre, precio, marca, tipo } = req.body
            dataJuguete.nombre = nombre
            dataJuguete.precio = precio
            dataJuguete.marca = marca
            dataJuguete.tipo = tipo

            dataJuguete = await JuguetesModel.findOneAndUpdate({ _id: req.params.jugueteId }, dataJuguete, { new: true })
            res.json(dataJuguete)
        } else {
            res.status(403).send({ error: "El ID proporcionado no es válido" })
        }
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.eliminarJuguete = async (req, res) => {
    try {
        let dataJuguetes = await JuguetesModel.findById(req.params.jugueteId)
        if (!dataJuguetes) {
            res.status(404).send({ error: "No se ha encontrado el juguete" })
            return
        }
        await JuguetesModel.findOneAndDelete({ _id: req.params.jugueteId })
        res.status(200).send({ msg: "Eliminado correctamente" })
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}
