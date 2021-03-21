const { INTEGER } = require('sequelize');
const Sequilize = require('sequelize');
const db = require('../config/database');

const Tokens = db.define('Tokens', {
    id:{
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id:{
        type: INTEGER
    },
    createdAt:{
        type: Sequilize.DATE
    },
    updatedAt:{
        type: Sequilize.DATE
    }
})

module.exports = Tokens;