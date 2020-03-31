const express = require('express');
const server = express();
const DBconnection = require('./src/database.js');          //Instancio a database.js para usar los metodos de conexion/consulta

//Settings
server.set('port',process.env.PORT || 3000);               //Declaro una variable con el numero del puerto en formato Express

//Middlewares
server.use(express.json());   

//Routes
server.get('/SQL', function(req1, res1){                   //Genero una ruta en localhost:port/SQL y respondo con un JSON
    DBconnection.query("SELECT * FROM [EXAMPLE].[dbo].[TABLE_0]",   //Genero el script SQL...
    function(err2,res2){                                 //y despues ejecuto una funcion
       if(err2){                                         //Si hay un error lo imprime en pantalla
          console.log(err2);
          throw err2;
       }
       else{                                             //Si no hay error...
          res1.status(200).json(res2);                   //Imprimimos el JSON en la ruta
       }
    });
 });

//Static files
server.use(express.static(__dirname + '/public'));

server.listen(server.get('port'), function(){                  //Creo al servidor
    console.log(`Server on port ${server.get('port')}`);    //Imprimo en pantalla el status del servidor
});