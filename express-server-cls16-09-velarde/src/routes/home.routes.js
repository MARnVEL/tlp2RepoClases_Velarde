
// El método Router() de Express nos permite crear rutas
const router = require('express').Router();
// const express = require('express');
// const router = express.Router();


//*Importando controladores
const {
    getHome,
    postHome,
    putHome,
    deleteHome,

} = require('../controllers/home.controllers');


//*Definiendo rutas

router.get('/', getHome);

router.post('/', postHome);

router.put('/', putHome);

router.delete('/', deleteHome);

// Se exporta el objeto router que contiene las rutas
module.exports = router;

