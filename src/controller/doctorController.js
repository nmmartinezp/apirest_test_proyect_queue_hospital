const doctorService = require("../service/doctorService");
const { success } = require("../middleware/response");

class DoctorController {
    async getAllDoctors(req, res, next){
        try {
            const items = await doctorService.getAllDoctors();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async getAllDoctorsByFilter(req, res, next){
        try {
            const items = await doctorService.getAllDoctorsByFilter(req.body);
            success(req, res, items, 200);
        } catch (err) {
            next(err)
        }
    }

    async getInfoDoctorById(req, res, next){
        try {
            const item = await doctorService.getInfoDoctorById(req.params.id);
            success(req, res, item, 200);
        } catch (err) {
            next(err)
        }
    }

    async addDoctor(req, res, next){
        try {
            const response = await doctorService.addDoctor(req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err)
        }
    }

    async modifyDoctor(req, res, next){
        try {
            const response = await doctorService.modifyDoctor(req.params.id, req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err)
        }
    }

    async deleteDoctor(req, res, next){
        try {
            const response = await doctorService.deleteDoctor(req.params.id);
            success(req, res, response, 200);
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new DoctorController();