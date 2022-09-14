
//*Importo librerías
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const home = require('./src/routes/home.routes');



const app = express();//Inicializo la librería express


//*Configuraciones
const port = process.env.PORT || 3000;

//*MIDDLEWARES
app.use(cors());//PAra admitir peticiones de cualquier lado.
app.use(morgan('dev'));
app.use(express.json()); // Para que el servidor comprenda archivos con formato jso
app.use(home);

//*Inicializo el servidor!
app.listen(port, () => console.log(`Servidor corriendo en " http://localhost:${port} ". Servidor iniciado en el puerto: ${port}`));