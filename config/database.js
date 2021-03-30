const Sequelize = require('sequelize');

module.exports = new Sequelize('JSTest', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        mas:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});
