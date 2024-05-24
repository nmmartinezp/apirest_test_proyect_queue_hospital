const { DataTypes } = require("sequelize");
const pgSequelize = require("../database/pgsqlQueue");

const Patient = pgSequelize.define(
  "patient",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ci: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    bloodtype: {
      type: DataTypes.STRING(10),
    },
    birthdate: {
      type: DataTypes.DATEONLY,
    },
    nrosocialsecurity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Patient;
