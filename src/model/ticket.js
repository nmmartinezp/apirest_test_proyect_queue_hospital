const { DataTypes } = require('sequelize');
const pgSequelize = require("../database/pgsqlQueue");

const Ticket = pgSequelize.define('ticket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    patient: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ci: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = Ticket;