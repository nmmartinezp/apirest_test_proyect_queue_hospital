const queueService = require("../service/queueService");
const { success, error } = require("../middleware/response");

class QueueController {
    async getAllTickets(req, res, next){
        try {
            const items = await queueService.getAllOfTickets();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async getTicketsByCriterion(req, res, next){
        try {
            const items = await queueService.getTicketsByCriterion(req.body);
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new QueueController();