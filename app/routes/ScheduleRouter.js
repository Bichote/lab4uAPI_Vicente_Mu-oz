const express = require('express');
const ScheduleController = require('../controllers/ScheduleController.js');
const Router = express.Router(); 

Router
    //Peticiones get , post , delete y put para las agendas
    .get('/',ScheduleController.show) // get para mostrar todas las agendas
    .post('/',ScheduleController.create) // post para guardar agendas
    .delete('/:key/:value',ScheduleController.remove) // eliminar where key = value
    .put('/:key/:value',ScheduleController.update);  // modificar where key = value
    
module.exports = Router;