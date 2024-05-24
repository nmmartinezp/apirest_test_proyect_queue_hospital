const express = require("express");
const patientController = require("../controller/patientController");
const router = express.Router();

router.get('/patient/all', patientController.getAllPatients);
router.get('/patient/all/search', patientController.getAllPatientsByFilters);
router.post('/patient/add', patientController.addPatient);
router.put('/patient/edit/:id', patientController.modifyPatient);
router.delete('/patient/delete/:id', patientController.deletePatient);

module.exports = router;