
const mongoose = require('mongoose');

const password = 'BilblueMU3'
const conectarBD = async () => {
    try {
        // mongoose.connect(process.env.MONGODB_URI);
        mongoose.connect(`mongodb+srv://Martin2:${password}@clusterbd-tlp2-ipf-vela.2locxu9.mongodb.net/prueba_nodeCls16-09?retryWrites=true&w=majority`);
        console.log('Conected to the database');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }

}


module.exports = conectarBD;

