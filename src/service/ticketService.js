const { Ticket, Doctor, Queue, Patient } = require("../model");
const sequelize = require("../database/pgsqlQueue");

class TicketService {
    async getAllTickets(){
        try {
            return await Ticket.findAll({
                include : [
                    { model: Queue, as: "queueTicket"},
                    { model: Patient, as: "patientTicket"},
                    { model: Doctor, as: "doctorTicket"}
                ]
            })
        } catch (err) {
            throw new Error("Error trying to get all tickets");
        }
    }

    async getAllTicketsByFilter(filters){
        try {
            return await Ticket.findAll({
                where: filters,
                include : [
                    { model: Queue, as: "queueTicket"},
                    { model: Patient, as: "patientTicket"},
                    { model: Doctor, as: "doctorTicket"}
                ]
            });
        } catch (err) {
            throw new Error("Error trying to get all tickets by filters");
        }
    }

    async addTicket(data){
        try {
            return await sequelize.transaction(async (t) => {
                const created = await Ticket.create(data, { transaction: t });
                return {
                  create: true,
                  created: created,
                };
              });
        } catch (err) {
            throw new Error("Error trying to add one ticket");
        }
    }

    async modifyTicket(idTicket, data){
        try {
          return await sequelize.transaction(async (t) => {
            const nro = await Ticket.update(data, {
              where: {
                id: idTicket,
              },
              transaction: t,
            });
            return {
              update: true,
              NroUpdateds: nro,
            };
          });
        } catch (err) {
          throw new Error("Error trying to update a ticket");
        }
      }

      async deleteTicket(idTicket){
        try {
          return await sequelize.transaction(async (t) => {
            const nro = await Ticket.destroy({
              where: {
                id: idTicket
              },
              transaction: t
            });
    
            return {
              delete: true,
              NroDeleteds: nro,
            };
          });
        } catch (err) {
          throw new Error("Error trying to delete a ticket");
        }
      }
}

module.exports = new TicketService();