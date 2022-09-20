

const router = require('express').Router();

const {
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
} = require('../controllers/product.controllers');



router.get('/product', getProduct);
router.post('/product', postProduct);
router.put('/product', putProduct);
router.delete('/product', deleteProduct);

module.exports = router;

