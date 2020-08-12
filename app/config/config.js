module.exports = {
    // Configurar servidor express en el localhost con el puerto 5000
    PORT: process.env.PORT || 5000,
    // Configuracion de la bd mongoDB que esta en la nube
    DB: process.env.BD || 'mongodb+srv://bicho:1234@cluster0.xr1ky.mongodb.net/mongodb?retryWrites=true&w=majority'
}
