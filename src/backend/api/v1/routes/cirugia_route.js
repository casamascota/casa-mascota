const express = require('express');
const router = express.Router();
const cirugiaController = require('../controllers/cirugia_controller');

// Ruta para obtener todas las cirugias
router.get('/', cirugiaController.getCirugias);
// Ruta para obtener todas las cirugias PENDIENTES
router.get('/', cirugiaController.getCirugiasPendientes);

// Ruta para obtener una cirugia por ID
router.get('/:id', cirugiaController.getCirugiaById);
// Ruta para obtener todas las cirugias de un doctor por ID de doctor
router.get('/doctor/:doctorId', cirugiaController.getCirugiaByDoctorId);
// Ruta para obtener todas las cirugias de un doctor por ID de enfermero
router.get('/doctor/:doctorId', cirugiaController.getCirugiasByEnfermeroId);
// Ruta para obtener todas las cirugias de un doctor por ID de diagnostico
router.get('/doctor/:doctorId', cirugiaController.getCirugiaByDiagnosticoId);
// Ruta para crear una nueva cirugia
router.post('/', cirugiaController.createCirugia);
// Ruta para actualizar una cirugia existente
router.put('/:id', cirugiaController.updateCirugia);
// Ruta para eliminar una cirugia por ID
router.delete('/:id', cirugiaController.deleteCirugiaById);

module.exports = router;