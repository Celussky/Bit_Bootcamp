const MedicamentosModel = require('../models/Medicamentos.model')

exports.consultarMedicamentos = async (req, res) => {
    try {
        let dataMedicamentos = await MedicamentosModel.find()
        res.json(dataMedicamentos)
    } catch (error) {
        res.status(500).send({ error: "Ha ocirrido algo, comuníquese con el administrador" })
    }
}

exports.consultarUnMedicamento = async (req, res) => {
    try {
        let dataMedicamentos = await MedicamentosModel.findById(req.params.medicamentoId)
        if (!dataMedicamentos) {
            res.status(404).send({ error: "No se ha encontrado el medicamento" })
        } else {
            res.send(dataMedicamentos)
        }
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.crearMedicamento = async (req, res) => {
    try {
        let nuevoMedicamento = new MedicamentosModel(req.body)
        await nuevoMedicamento.save()
        res.send(nuevoMedicamento)
        console.log(req.body);
    } catch (error) {
        res.status(500).send({ error: "Ha ocirrido algo, comuníquese con el administrador" })

    }
}

exports.actualizarMedicamento = async (req, res) => {
    try {
        if (req.params.medicamentoId.length == 24) {
            let dataMedicamento = await MedicamentosModel.findById(req.params.medicamentoId)
            if (!dataMedicamento) {
                res.status(404).send({ error: "No se ha encontrado la medicamento" })
                return
            }
            const { nombre, precio, marca, tipo, fecha_vencimiento, fecha_fabricacion } = req.body
            dataMedicamento.nombre = nombre
            dataMedicamento.precio = precio
            dataMedicamento.marca = marca
            dataMedicamento.tipo = tipo
            dataMedicamento.fecha_vencimiento = fecha_vencimiento
            dataMedicamento.fecha_fabricacion = fecha_fabricacion

            dataMedicamento = await MedicamentosModel.findOneAndUpdate({ _id: req.params.medicamentoId }, dataMedicamento, { new: true })
            res.json(dataMedicamento)
        } else {
            res.status(403).send({ error: "El ID proporcionado no es válido" })
        }
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.eliminarMedicamento = async (req, res) => {
    try {
        let dataMedicamentos = await MedicamentosModel.findById(req.params.medicamentoId)
        if (!dataMedicamentos) {
            res.status(404).send({ error: "No se ha encontrado el medicamento" })
            return
        }
        await MedicamentosModel.findOneAndDelete({ _id: req.params.medicamentoId })
        res.status(200).send({ msg: "Eliminado correctamente" })
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}
