
//*Importación de librerías:
const express = require('express');
// const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const home = require('./src/routes/home.routes');
const user = require('./src/routes/user.routes');
const task = require('./src/routes/task.routes');

const conectarBD = require('./src/db/connection');

dotenv.config();//Configuro la librería dotenv.


const app = express();//Inicializo la librería express
conectarBD();//Ejecuto la conección a la Base de datos.


//*MIDDLEWARES
app.use(cors());//Para admitir peticiones de cualquier lado.
app.use(morgan('dev'));
app.use(express.json()); // Para que el servidor comprenda archivos con formato json
app.use(home);
app.use(user);
app.use(task)


//*Configuraciones
const port = process.env.PORT || 3000;


//*Inicializo el servidor!
app.listen(port, () => console.log(`Servidor corriendo en " http://localhost:${port} ". Servidor iniciado en el puerto: ${port}`));

