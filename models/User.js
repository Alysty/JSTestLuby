const Sequilize = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
    id:{
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: Sequilize.STRING   
    },
    location:{
        type: Sequilize.STRING   
    },
    email:{
        type: Sequilize.STRING   
    },
    avatar:{
        type: Sequilize.BLOB
    },
    bio:{
        type: Sequilize.STRING   
    },
    createdAt:{
        type: Sequilize.DATE
    },
    updatedAt:{
        type: Sequilize.DATE
    }
})

module.exports = User