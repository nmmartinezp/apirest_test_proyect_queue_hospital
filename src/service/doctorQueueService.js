const { Ticket, Queue } = require("../model");
const sequelize = require("../database/pgsqlQueue");

class DoctorQueueService {
  async getQueues(idDoctor) {
    try {
      return await Queue.findAll({
        where: {
          id_doctor: idDoctor,
        },
        include: {
          model: Ticket,
          as: "queueTicket",
        },
      });
    } catch (err) {
      throw new Error("Error trying to get all queues");
    }
  }

  async syncTicket(idTicket, status) {
    try {
      return await sequelize.transaction(async (t) => {
        const nro = await Ticket.update(
          { status: status },
          {
            where: {
              id: idTicket,
            },
            transaction: t,
          }
        );
        return {
          status: status,
          update: true,
          NroUpdateds: nro,
        };
      });
    } catch (err) {
      throw new Error("Error trying to update a ticket");
    }
  }
}

module.exports = new DoctorQueueService();
