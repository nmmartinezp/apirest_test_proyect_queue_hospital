const { Doctor, ConsultingRoom } = require("../model");
const sequelize = require("../database/pgsqlQueue");

class DoctorService {
  async getAllDoctors() {
    try {
      return await Doctor.findAll();
    } catch (err) {
      throw new Error("Error trying to get all doctors");
    }
  }

  async getAllDoctorsByFilter(filters) {
    try {
      return await Doctor.findAll({ where: filters });
    } catch (err) {
      throw new Error("Error trying to get doctors by filters");
    }
  }

  async getInfoDoctorById(idDoctor) {
    try {
      return await Doctor.findByPk(idDoctor);
    } catch (err) {
      throw new Error("Error trying to get doctor by id");
    }
  }

  async addDoctor(data) {
    try {
      return await sequelize.transaction(async (t) => {
        const created = await Doctor.create(data, { transaction: t });
        return {
          create: true,
          created: created,
        };
      });
    } catch (err) {
      throw new Error("Error trying to add a new doctor");
    }
  }

  async modifyDoctor(idDoctor, data) {
    try {
      return await sequelize.transaction(async (t) => {
        const nro = await Doctor.update(data, {
          where: {
            id: idDoctor,
          },
          transaction: t,
        });
        return {
          update: true,
          NroUpdateds: nro,
        };
      });
    } catch (err) {
      throw new Error("Error trying to update a doctor");
    }
  }

  async deleteDoctor(idDoctor) {
    try {
      return await sequelize.transaction(async (t) => {
        await ConsultingRoom.update({ id_doctor: null },{
          where: {
            id_doctor: idDoctor
          },
          transaction: t
        })

        const nro = await Doctor.destroy({
          where: {
            id: idDoctor
          },
          transaction: t
        });

        return {
          delete: true,
          NroDeleteds: nro,
        };
      });
    } catch (err) {
      throw new Error("Error trying to delete a doctor");
    }
  }
}

module.exports = new DoctorService();
