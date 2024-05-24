module.exports = {
    app: {
        port: process.env.SERVER_PORT || 4000,
    },
    pgsql_queues: {
        host: process.env.PGSQL_HOST_QUEUES || 'localhost',
        user: process.env.PGSQL_USER_QUEUES || 'postgres',
        password: process.env.PGSQL_PASSWORD_QUEUES || '',
        port: process.env.PGSQL_PORT_QUEUES || 5432,
        database: process.env.PGSQL_DB_QUEUES || 'default',
    }
}