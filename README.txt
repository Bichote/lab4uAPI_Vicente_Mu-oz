npm install
node server = iniciar proyecto

Se utilizo estructura de modelo vista controlador con funciones asincronas , ademas se utilizo la funcion
de cluster para aprovechar cada nucleo del procesador , la base de datos es MongoDb.


Postman : POST , http://localhost:5000/schedule/
{
    "first_name": "Juan",
    "last_name":"Soto",
    "email": "Sotojuan@gmail.com",
    "commentary": "hola soy un post "
}

PULL : http://localhost:5000/schedule/_id/5f33ff65045c371b904f2252 , es como decir update from schedule where _id = 5f33ff65045c371b904f2252

{
    "_id":"5f33ff65045c371b904f2252",
    "first_name": "Vicente",
    "last_name":"Muñoz",
    "email": "smoust312@gmail.com",
    "commentary": "holA soy un put para modificar"
}
         
GET :  http://localhost:5000/schedule/    

DELETE : http://localhost:5000/schedule/_id/5f33ff65045c371b904f2252                    