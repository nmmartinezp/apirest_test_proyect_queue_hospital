const ticketService = require("../service/ticketService");
const { success } = require("../middleware/response");

class TicketController {
    async getAllTickets(req, res, next){
        try {
            const items = await ticketService.getAllTickets();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async getAllTicketsByFilter(req, res, next){
        try {
            const items = await ticketService.getAllTicketsByFilter(req.body);
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }

    async addTicket(req, res, next){
        try {
            const response = await ticketService.addTicket(req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }

    async modifyTicket(req, res, next){
        try {
            const response = await ticketService.modifyTicket(req.params.id, req.body);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }

    async deleteTicket(req, res, next){
        try {
            const response = await ticketService.deleteTicket(req.params.id);
            success(req, res, response, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new TicketController();