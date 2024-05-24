const patientService = require("../service/patientService");
const { success } = require("../middleware/response");

class PatientController {
    async getAllPatients(req, res, next){
        try {
            const items = await patientService.getAllPatients();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async getAllPatientsByFilters(req, res, next){
        try {
            const items = await patientService.getAllPatientsByFilters(req.body);
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async addPatient(req, res, next){
        try {
            const response = await patientService.addPatient(req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }

    async modifyPatient(req, res, next){
        try {
            const response = await patientService.modifyPatient(req.params.id, req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }

    async deletePatient(req, res, next){
        try {
            const response = await patientService.deletePatient(req.params.id);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new PatientController();