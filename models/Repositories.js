const Sequilize = require('sequelize');
const db = require('../config/database');

const Repositories = db.define('Repositories', {
    id:{
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    owner_id:{
        type: Sequilize.INTEGER   
    },
    name:{
        type: Sequilize.STRING   
    },
    description:{
        type: Sequilize.STRING   
    },
    is_public:{
        type: Sequilize.BOOLEAN
    },
    slug:{
        type: Sequilize.STRING   
    },
    createdAt:{
        type: Sequilize.DATE
    },
    updatedAt:{
        type: Sequilize.DATE
    }
})

module.exports = Repositories;