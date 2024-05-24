const { Queue, Doctor} = require("../model");
const sequelize = require("../database/pgsqlQueue");

class QueueService {
  async getAllQueues(){
    try {
      return await Queue.findAll({
        include: {
          model: Doctor,
          as: "doctorQueue"
        }
      });
    } catch (err) {
      throw new Error("Error trying to get all queues");
    }
  }

  async addQueue(data){
    try {
      return await sequelize.transaction(async (t) => {
        const created = await Queue.create(data, { transaction: t });
        return {
          create: true,
          created: created,
        };
      });
    } catch (err) {
      throw new Error("Error trying to add a new queue");
    }
  }

  async modifyQueue(idQueue, data){
    try {
      return await sequelize.transaction(async (t) => {
        const nro = await Queue.update(data, {
          where: {
            id: idQueue,
          },
          transaction: t,
        });
        return {
          update: true,
          NroUpdateds: nro,
        };
      });
    } catch (err) {
      throw new Error("Error trying to update a queue");
    }
  }

  async deleteQueue(idQueue){
    try {
      return await sequelize.transaction(async (t) => {
        const nro = await Queue.destroy({
          where: {
            id: idQueue
          },
          transaction: t
        });

        return {
          delete: true,
          NroDeleteds: nro,
        };
      });
    } catch (err) {
      throw new Error("Error trying to delete a queue");
    }
  }
}

module.exports = new QueueService();
