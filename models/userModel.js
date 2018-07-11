const sequelize = require('sequelize');
const Connection = require('../config/connectionSql');


const User = Connection.define('users', {
    firstName: {
        type: sequelize.STRING(255)
    },
    lastName: {
        type:sequelize.STRING(255)
    },
    jobId: {
        type: sequelize.INTEGER
    }
});

module.exports = User;