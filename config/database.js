const Sequelize = require('sequelize');

module.exports = new Sequelize('JSTest', 'postgres', 'ppHWCC12', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        mas:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});