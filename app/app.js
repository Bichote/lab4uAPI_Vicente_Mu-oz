const express = require('express');
const bodyParser = require('body-parser');
const App = express();
const cors = require('cors')
const schedule = require('./routes/ScheduleRouter');

App.use(bodyParser.json({ limit: '200mb' }));
App.use(bodyParser.urlencoded({ limit: '200mb', extended: true}));


//  Permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto
App.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// aplicar los permisos 
App.use(cors())
// aplicar ruta
App.use('/schedule/',schedule);


module.exports = App;