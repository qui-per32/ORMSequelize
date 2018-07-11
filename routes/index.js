var express = require('express');
var router = express.Router();
const connection = require('../config/connectionSql');
const PuestoModel = require('../models/puestosModel');

/* GET home page. */
router.get('/', function(req, res, next) {

  connection
    .authenticate()
      .then(()=>{console.log("conexion extablecida");})
      .catch(err=>{console.log("error->" + err);})
    PuestoModel.sync({force: true}).then(()=>{
      return PuestoModel.create({
        job: 'Prueba'
      })
    })

  res.render('index', { title: 'Express' });

});

module.exports = router;
