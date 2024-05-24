const { Patient, Ticket } = require("../model");
const sequelize = require("../database/pgsqlQueue");

class PatientService {
  async getAllPatients() {
    try {
        return await Patient.findAll({
            include: {
                model: Ticket,
                as: "patientTicket"
            }
        });
    } catch (err) {
      throw new Error("Error trying to get all patient");
    }
  }

  async getAllPatientsByFilters(filters) {
    try {
        return await Patient.findAll({
            where: filters,
            include: {
                model: Ticket,
                as: "patientTicket"
            }
        });
    } catch (err) {
      throw new Error("Error trying to get all patients");
    }
  }

  async addPatient(data) {
    try {
        return await sequelize.transaction(async (t) => {
            const created = await Patient.create(data, { transaction: t });
            return {
              create: true,
              created: created,
            };
          });
    } catch (err) {
      throw new Error("Error trying to add one patient");
    }
  }

  async modifyPatient(idPatient, data) {
    try {
        return await sequelize.transaction(async (t) => {
            const nro = await Patient.update(data, {
              where: {
                id: idPatient,
              },
              transaction: t,
            });
            return {
              update: true,
              NroUpdateds: nro,
            };
          });
    } catch (err) {
      throw new Error("Error trying to update one patient");
    }
  }

  async deletePatient(idPatient) {
    try {
        return await sequelize.transaction(async (t) => {
            const nro = await Patient.destroy({
              where: {
                id: idPatient
              },
              transaction: t
            });
    
            return {
              delete: true,
              NroDeleteds: nro,
            };
          });
    } catch (err) {
      throw new Error("Error trying to delete one patient");
    }
  }
}

module.exports = new PatientService();
