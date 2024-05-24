const doctorQueueService = require("../service/doctorQueueService");
const { success } = require("../middleware/response");

class DoctorQueueController {
    async getQueues(req, res, next){
        try {
            const items = await doctorQueueService.getQueues(req.params.id);
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async syncTicket(req, res, next){
        try {
            const response = await doctorQueueService.syncTicket(req.params.id, req.params.status);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new DoctorQueueController();