const mongoose = require('mongoose');
const CONFIG = require('./config');

mongoose.set('useCreateIndex', true)

// Realizar la conexion
module.exports = {
    connection:null,
    connect:function(){
        if(this.connection) return this.connection;
        else mongoose.connect(CONFIG.DB,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        }).then(connection =>{
            this.connection =  connection
        }).catch(error => console.log("error"+error));
    }
}