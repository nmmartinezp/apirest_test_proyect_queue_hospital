const { ConsultingRoom, Doctor } = require("../model");
const sequelize = require("../database/pgsqlQueue");

class ConsultingRoomService {
  async getAllConsultingRooms() {
    try {
      return await ConsultingRoom.findAll({
        include: {
          model: Doctor,
          as: "doctorConsulting"
        }
      });
    } catch (err) {
      throw new Error("Error trying to get all consulting rooms");
    }
  }

  async getAllConsultingRoomsByFilter(filters) {
    try {
      return await ConsultingRoom.findAll({
        where: filters,
        include: {
          model: Doctor,
          as: "doctorConsulting",
        },
      });
    } catch (err) {
      throw new Error("Error trying to get consulting rooms by filters");
    }
  }

  async getInfoConsultingRoomById(idConsultingRoom) {
    try {
      return await ConsultingRoom.findByPk(idConsultingRoom, {
        include: {
          model: Doctor,
          as: "doctorConsulting",
        },
      });
    } catch (err) {
      throw new Error("Error trying to get consulting room by id");
    }
  }

  async addConsultingRoom(data) {
    try {
      return await sequelize.transaction(async (t) => {
        const doctor = await Doctor.findByPk(data.id_doctor, {transaction: t,});
        if (!doctor) {
          throw new Error("Doctor not found");
        }
        const created = await ConsultingRoom.create(data, { transaction: t });
        return {
          create: true,
          created: created,
        };
      });
    } catch (err) {
      throw new Error("Error trying to add a new consulting room");
    }
  }

  async modifyConsultingRoom(idConsultingRoom, data) {
    try {
      return await sequelize.transaction(async (t) => {
        const nro = await ConsultingRoom.update(data, {
          where: {
            id: idConsultingRoom,
          },
          transaction: t,
        });
        return {
          update: true,
          NroUpdateds: nro,
        };
      });
    } catch (err) {
      throw new Error("Error trying to update a consulting room");
    }
  }

  async deleteConsultingRoom(idConsultingRoom){
    try {
      return await sequelize.transaction(async (t) => {
        const nro = await ConsultingRoom.destroy({
          where: {
            id: idConsultingRoom,
          },
          transaction: t,
        });
        return {
          delete: true,
          NroDeletes: nro,
        };
      });
    } catch (err) {
      throw new Error("Error trying to delete a consulting room");
    }
  }
}

module.exports = new ConsultingRoomService();
