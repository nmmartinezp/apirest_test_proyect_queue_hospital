const express = require("express");
const doctorController = require("../controller/doctorController");
const router = express.Router();

router.get('/doctor/all', doctorController.getAllDoctors);
router.get('/doctor/all/search', doctorController.getAllDoctorsByFilter);
router.get('/doctor/:id', doctorController.getInfoDoctorById);
router.post('/doctor/add', doctorController.addDoctor);
router.put('/doctor/edit/:id', doctorController.modifyDoctor);
router.delete('/doctor/delete/:id', doctorController.deleteDoctor);

module.exports = router;