const sequelize = require('sequelize');
const Connection = require('../config/connectionSql');


const Puesto = Connection.define('puestos', {
    job: {
        type: sequelize.STRING
    }
});

module.exports = Puesto;