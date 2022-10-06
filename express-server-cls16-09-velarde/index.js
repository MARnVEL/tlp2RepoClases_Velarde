
//*Importación de librerías:
const express = require('express');
// const path = require('path');

const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//*ROUTES
const home = require('./src/routes/home.routes');
const user = require('./src/routes/user.routes');
const task = require('./src/routes/task.routes');
const product = require('./src/routes/product.routes');

//*Importo la función para la Conexión a la BD
const conectarBD = require('./src/db/connection');

//*Configuraciones
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

conectarBD();


//*MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Para que el servidor comprenda archivos con formato json
app.use(home);
app.use(user);
app.use(task);
app.use(product);





//*Inicializo el servidor!
app.listen(port, () => console.log(`Servidor corriendo en "mongodb+srv://Martin2:*******@clusterbd-tlp2-ipf-vela.2locxu9.mongodb.net/prueba_nodeCls16-09?retryWrites=true&w=majority". Servidor iniciado en el puerto: ${port}`));

