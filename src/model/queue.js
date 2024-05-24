const { DataTypes } = require("sequelize");
const pgSequelize = require("../database/pgsqlQueue");

const Queue = pgSequelize.define(
  "queue",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number_of_tickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = Queue;
