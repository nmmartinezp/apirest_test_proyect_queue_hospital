const { DataTypes } = require("sequelize");
const pgSequelize = require("../database/pgsqlQueue");

const ConsultingRoom = pgSequelize.define('consulting_room',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "active",
      validate: {
        isIn: {
          args: [
            [
              "active",
              "inactive",
              "maintenan",
            ],
          ],
        },
      },
    },
    id_doctor: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = ConsultingRoom;
