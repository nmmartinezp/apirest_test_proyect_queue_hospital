const { DataTypes } = require("sequelize");
const pgSequelize = require("../database/pgsqlQueue");

const Doctor = pgSequelize.define(
  "doctor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    specialism: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        isIn: {
          args: [
            [
              "Medicina General",
              "Traumatologia",
              "Odontologia",
              "Medicina Interna",
              "Cardiologia",
            ],
          ],
        },
      },
    },
    credencial: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        is: /^HM-PD-2255\d{5}$/
      }
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Doctor;
