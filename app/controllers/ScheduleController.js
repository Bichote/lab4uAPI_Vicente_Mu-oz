const Schedule = require('../models/ScheduleModels');
// Controlador
module.exports = { // exportar las funciones al router

    // Funcion asincronica para listar agenda
    show: async (req,res) =>{
        try {
            const schedule_data = await Schedule.find({}); // Esperar respuesta y guadarla en data
            return res.status(200).send(schedule_data); // codigo http 200 = ok
        } catch (error) {
            return res.status(400).send({message:error}) // retornar error con codigo http 400 = bad request
        }
    },
    // Funcion asincronica para crear agenda
    create: async (req,res) =>{
        try {
            const data = req.body // guardar en data los valores del request recibido (Validados en el models)
            const schedule_data  = await new Schedule(data).save(); // esperar que se cree el usuario y guardar los datos
            return res.status(201).send({message:'CREATE',schedule_data}); // enviar los datos que se crearon con codigo de 201=creado
        } catch (error) {
            res.status(401).send({message:error}); // enviar error
        }
    },
    // Funcion asincronica para eliminar agenda
    remove: async (req,res) =>{
        try {
            const query = {};
            query[req.params.key] = req.params.value; // = where key = _id 
            const data = await Schedule.findByIdAndDelete(query); // pasarle la query 
            return res.status(202).send({message:'DELETE',data}); // codigo 202 = Accept con mensaje delete
        } catch (error) {
            res.status(401).send(error); // enviar error
        }
    },
    // Funcion asincronica para actualizar agenda
    update: async (req,res) =>{
        try {
            const query = {};
            query[req.params.key] = req.params.value; // = where key = _id 
            const data = await Schedule.updateOne(query,req.body); // pasarle la query  Y LOS datos a modificar
            return res.status(202).send({message:'UPDATE',data}); // codigo 202 = Accept con mensaje update
        } catch (error) {
            res.status(401).send(error); // enviar error
        }
    }
}