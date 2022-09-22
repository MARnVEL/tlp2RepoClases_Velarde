
//*Importación de librerías:
const express = require('express');
// const path = require('path');//El mpodulo path e encarga de normalizar rutas. Porque en W y en Lnx la 
//sintaxis de las rutas es diferente.
/**
 * El cors (Cross O)
 * Los servidores saben si pueden permitir el acceso o no a cierta
 * Desde un dominio diferente al servidor, no se pueda hacer peticiones al
 */
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//*ROUTES
const home = require('./src/routes/home.routes');
const user = require('./src/routes/user.routes');
const task = require('./src/routes/task.routes');
const product = require('./src/routes/product.routes');

const conectarBD = require('./src/db/connection');

dotenv.config();//Configuro la librería dotenv.


const app = express();//Inicializo la librería express
conectarBD();//Ejecuto la conección a la Base de datos.


//*MIDDLEWARES
app.use(cors());//Para admitir peticiones de cualquier lado. 
//Es decir, para que el servidor acepte peticiones desde cualquier cliente sin que tenga la ncecesidad de verficar que la página
//sea una página creada en el servidor de origen. "Es un MIDDLEWARE PORQUE SE USA ANTES DE QUE LLEGUE LA PETICIÓN AL CONTROLADOR.
// DE QUE REALIZAR LA CONEXIÓN A LA BD"
//Es una dependencia de DESARROLLO ¿Entonces porque no está en el devDependecies del package.josn?, en producción 
//se delega esto a quien me va a desplegar la app. ¿no se usa cors?
app.use(morgan('dev'));
app.use(express.json()); // Para que el servidor comprenda archivos con formato json
app.use(home);
app.use(user);
app.use(task);
app.use(product);


//*Configuraciones
const port = process.env.PORT || 3000;


//*Inicializo el servidor!
app.listen(port, () => console.log(`Servidor corriendo en "mongodb+srv://Martin2:*******@clusterbd-tlp2-ipf-vela.2locxu9.mongodb.net/prueba_nodeCls16-09?retryWrites=true&w=majority". Servidor iniciado en el puerto: ${port}`));

