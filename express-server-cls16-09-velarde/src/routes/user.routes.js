
//El método Router() de la librería express permite crear rutas.
const router = require('express').Router();

const {
    getUser,
    postUser,
    putUser,
    deleteUser } = require('../controllers/user.controllers');

// Defino rutas

// Ruta para obtener todos los usuarios
router.get('/user', getUser);

// Crear nuevo usuario
router.post('/user', postUser);

// Editar usuario, requiere ID de usuario
router.put('/user', putUser);

// Eliminar usuario, requiere ID de usuario
router.delete('/user', deleteUser);



// Se exporta el objeto router que contiene las rutas
module.exports = router;


