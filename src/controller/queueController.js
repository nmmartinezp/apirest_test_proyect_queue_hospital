const queueService = require("../service/queueService");
const { success } = require("../middleware/response");

class QueueController {
    async getAllQueues(req, res, next){
        try {
            const items = await queueService.getAllQueues();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async addQueue(req, res, next){
        try {
            const response = await queueService.addQueue(req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }

    async modifyQueue(req, res, next){
        try {
            const response = await queueService.modifyQueue(req.params.id, req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }

    async deleteQueue(req, res, next){
        try {
            const response = await queueService.deleteQueue(req.params.id);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new QueueController();