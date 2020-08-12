const Database = require('./app/config/database'); // Configuracion de la BD
const CONFIG = require('./app/config/config'); // Configuracion server
const App = require('./app/app');
const express = require('express'); // express

var cluster = require( 'cluster' ); // utilizar los cluster
var cCPUs   = require( 'os' ).cpus().length; // contar los nucleos
Database.connect();


if( cluster.isMaster ) {

  for( var i = 0; i < cCPUs; i++ ) {
    cluster.fork(); // crear cluster por cada nucleo del procesador
  }
  cluster.on( 'online', function( worker ) {
    console.log( 'El Worker ' + worker.process.pid + ' esta online.' ); 
  });
  cluster.on( 'exit', function( worker, code, signal ) {
    console.log( 'El worker ' + worker.process.pid + ' ha muerto.' );
  });

}else{

    App.listen(CONFIG.PORT,function(error){ // correr aplicaciones
    if(error) return null;
    });
}

