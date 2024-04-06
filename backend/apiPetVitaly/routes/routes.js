const express = require('express')
const router = express.Router()
const mascotascontroller = require('../controllers/macotasController')
const medicamentoscontroller = require('../controllers/medicamentosController')
const juguetescontroller = require('../controllers/juguetesController')

router.get('/consultar', mascotascontroller.consultarMascotas)
router.get('/consultarMascota/:mascotaId', mascotascontroller.consultarUnaMascota)
router.post('/crear', mascotascontroller.crearMascota)
router.put('/actualizar/:mascotaId', mascotascontroller.actualizarMascota)
router.delete('/eliminar/:mascotaId', mascotascontroller.eliminarMascota)

router.get('/consultar/medicamentos', medicamentoscontroller.consultarMedicamentos)
router.get('/consultarMedicamento/:medicamentoId', medicamentoscontroller.consultarUnMedicamento)
router.post('/crear/medicamentos', medicamentoscontroller.crearMedicamento)
router.put('/actualizar/:medicamentoId', medicamentoscontroller.actualizarMedicamento)
router.delete('/eliminar/:medicamentoId', medicamentoscontroller.eliminarMedicamento)

router.get('/consultar/juguetes', juguetescontroller.consultarJuguetes)
router.get('/consultarJuguete/:jugueteId', juguetescontroller.consultarUnJuguete)
router.post('/crear/juguetes', juguetescontroller.crearJuguete)
router.put('/actualizar/:jugueteId', juguetescontroller.actualizarJuguete)
router.delete('/eliminar/:jugueteId', juguetescontroller.eliminarJuguete)

module.exports = router
