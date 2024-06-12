const { Sequelize } = require('sequelize');
const config  = require("../config");

const sequelize = new Sequelize(config.pgsql_queues.database, config.pgsql_queues.user, config.pgsql_queues.password, {
    host: config.pgsql_queues.host,
    port: config.pgsql_queues.port,
    dialect: 'postgres',
    timezone: '+00:00'
});

module.exports = sequelize;