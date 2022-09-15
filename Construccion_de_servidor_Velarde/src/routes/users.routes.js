
//El método Router() de la librería express permite crear rutas.
const router = require('express').Router();

const {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers } = require('../controllers/users.controllers');

// Defino rutas

// Ruta para obtener todos los usuarios
router.get('/user', getUsers);

// Crear nuevo usuario
router.post('/user', postUsers);

// Editar usuario, requiere ID de usuario
router.put('/user', putUsers);

// Eliminar usuario, requiere ID de usuario
router.delete('/user', deleteUsers);



// Se exporta el objeto router que contiene las rutas
module.exports = router;







