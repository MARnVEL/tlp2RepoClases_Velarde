const mongoose = require('mongoose');

const conectarBD = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('Conected to the database');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }

}


module.exports = conectarBD;
