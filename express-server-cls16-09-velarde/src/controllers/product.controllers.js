

const ctrlProduct = {};

const Product = require('../models/Product');

ctrlProduct.getProduct = async (req, res) => {
    
    try {

        const product = await Product.find();
        return res.json(product);
        
    } catch (error) {
        console.log('Error al obtener productos', err);
    }
};


ctrlProduct.postProduct = async (req, res) => {
    const { commercialName, description, unitPrice, quantity, inputDate } = req.body;
    
    try {
        
        const newProduct = new Product({
            commercialName,
            description,
            unitPrice,
            quantity,
            inputDate
        });

        const product = await newProduct.save();
        return res.json({
            msg: 'Product saved successfully 🚀!',
            product
        });


    } catch (error) {
        console.log('Error trying to create product 😿! ', error);
        
        return res.status(500).json({
            msg: 'No se pudo crear el producto 👾, vuelva a intentarlo'
        });
    }
};

ctrlProduct.putProduct = async (req, res) => {

    try {
        
        const product = await Product.findById(req.params.id);

        console.log('The products is: ', product);

        return res.json({
            msg : 'Product updated successfully 🌟',
            product
        });
        
    } catch (error) {
        console.log('Error trying to UPDATE the product 😿', error);
        return res.status(500).json({
            msg: 'No se pudo ACTUALIZAR el producto 👾, vuelva a intentarlo'
        });
    }
    
};



ctrlProduct.deleteProduct = async (req, res) => {
    try {

        const product = await Product.find();
        console.log('The products are: ', product);

        console.log('Product deleted successfully');

        return res.json({
            msg: 'Product deleted successfully'
        })
    } catch (error) {
        console.log('Error trying to DELETE the product 😿', error);
        return res.status(500).json({
            msg: 'No se pudo ELIMINAR el producto 👾, vuelva a intentarlo'
        });
    };
};

module.exports = ctrlProduct;