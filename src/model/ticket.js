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
    emition_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "issued",
        validate: {
            isIn: {
                args: [[
                    "issued", "called", "turn", "canceled", "ready", "deleted"
                ]]
            }
        }
    },
    presentation_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_doctor: {
        type: DataTypes.INTEGER,
    },
    id_queue: {
        type: DataTypes.INTEGER,
    },
    id_patient: {
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = Ticket;