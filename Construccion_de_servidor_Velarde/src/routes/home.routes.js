// El método Router() de Express nos permite crear rutas
const router = require('express').Router();


//*Importando controladores
const {
    getHome,
    postHome,
    putHome,
    deleteHome,

} = require('../controllers/home.controllers');



//Request handler. Manejador de petición. el callback me permite definir el comportamiento de lo que tiene que hacer.
//El callback me define el comportamiento del controlador.

//*Definiendo rutas

router.get('/', getHome);
// router.get('/', (req,res)=>console.log(res.json("ok")));


router.post('/', postHome);



router.put('/', putHome);


router.delete('/', deleteHome);



// Se exporta el objeto router que contiene las rutas
module.exports = router;