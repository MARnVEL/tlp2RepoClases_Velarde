

//El método Router() de la librería express permite crear rutas.
const router = require('express').Router();

const {
    getTask,
    postTask,
    putTask,
    deleteTask } = require('../controllers/task.controllers');

// Defino rutas

// Ruta para obtener todos los usuarios
router.get('/task', getTask);

// Crear nuevo usuario
router.post('/task', postTask);

// Editar usuario, requiere ID de usuario
router.put('/task/:taskId', putTask);


// Eliminar usuario, requiere ID de usuario
router.delete('/task/:taskId', deleteTask);



// Se exporta el objeto router que contiene las rutas
module.exports = router;

