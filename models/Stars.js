const Sequilize = require('sequelize');
const db = require('../config/database');

const Stars = db.define('Stars', {
    id:{
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    voter_id:{
        type: Sequilize.INTEGER   
    },
    repo_id:{
        type: Sequilize.STRING   
    },
    amount_of_stars:{
        type: Sequilize.FLOAT(2,1)
    },
    createdAt:{
        type: Sequilize.DATE
    },
    updatedAt:{
        type: Sequilize.DATE
    }
})

module.exports = Stars;