const Ticket = require("../model/ticket");

class QueueService {
  async getAllOfTickets() {
    try {
      return await Ticket.findAll();
    } catch (err) {
      throw new Error("Error trying to get all tickets");
    }
  }

  async getTicketsByCriterion(criteria) {
    try {
      return await Ticket.findAll({ where: criteria });
    } catch (err) {
      throw new Error("Error trying to get one ticket by criterion");
    }
  }
}

module.exports = new QueueService();
