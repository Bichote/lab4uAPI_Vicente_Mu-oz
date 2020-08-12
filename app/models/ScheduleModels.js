const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Crear esquema ( modelo ) de la bd de mongoDB
const ScheduleSchema = new Schema({

   first_name: {
      type: String,
      required: true,
      trim: true , 
      minlength:[2,"Nombre demasiado corto"],
      maxlength:[30,"El Nombre es demasiada largo"]
   },

   last_name: {
      type: String,
      required: true,
      trim: true ,
      minlength:[2,"Apellido demasiado corto"],
      maxlength:[30,"El apellido es demasiada largo"]
   },

   email: {
      type: String,
      unique : true,
      required: true,
      index: true,
      trim: true ,
      validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Ingrese un email correcto"
    },
   },

   commentary: {
      type: String,
      required: true,
      trim: true ,
      maxlength:[100,"El comentario es demasiada largo"]
   },

   date: {
      type: Date,
      required: true,
      default: Date.now()
   }

});

const Schedule = mongoose.model('Schedule', ScheduleSchema);
module.exports = Schedule;