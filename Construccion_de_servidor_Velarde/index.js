
//*Importo librerías
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//*Importaciones de módulos propios del proyecto:

const home = require('./src/routes/home.routes');
const user = require('./src/routes/users.routes');
const conectarBD = require('./src/db/connection');


dotenv.config();
const app = express();//Inicializo la librería express
conectarBD();




//*MIDDELWARES
app.use(cors());//Para admitir peticiones de cualquier lado.
app.use(morgan('dev'));
app.use(express.json()); // Para que el servidor comprenda archivos con formato json
app.use(home);
app.use(user);


//*Configuraciones
const port = process.env.PORT || 3000;


//*Inicializo el servidor!
app.listen(port, () => console.log(`Servidor corriendo en " http://localhost:${port} ". Servidor iniciado en el puerto: ${port}`));