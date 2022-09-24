
const mongoose = require('mongoose');

const conectarBD = async () => {

    const { 
        TEST_APP_MONGODB_DATABASE,
        TEST_APP_MONGODB_HOST,
        TEST_APP_PASSWORD,
        TEST_APP_MONGODB_HOST2 } = process.env;

    
    // const MONGODB_URI = `mongodb://${TEST_APP_MONGODB_HOST}:27017/${TEST_APP_MONGODB_DATABASE}`; //!Esta línea es para hacer la conexión a una BD local de mongo, en el compass, por ejemplo.

    const MONGODB_URI_ATLAS = `mongodb+srv://${TEST_APP_MONGODB_HOST2}:${TEST_APP_PASSWORD}@clusterbd-tlp2-ipf-vela.2locxu9.mongodb.net/${TEST_APP_MONGODB_DATABASE}?retryWrites=true&w=majority`;


    try {
        // mongoose.connect(MONGODB_URI);
        mongoose.connect(MONGODB_URI_ATLAS);
        console.log('Conected to the database');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }

}


module.exports = conectarBD;

