const Sequilize = require('sequelize');
const db = require('../config/database');

const Users_Followers = db.define('Users_Followers', {
    id:{
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id:{
        type: Sequilize.INTEGER   
    },
    follower_id:{
        type: Sequilize.STRING   
    },
    createdAt:{
        type: Sequilize.DATE
    },
    updatedAt:{
        type: Sequilize.DATE
    }
})

module.exports = Users_Followers;