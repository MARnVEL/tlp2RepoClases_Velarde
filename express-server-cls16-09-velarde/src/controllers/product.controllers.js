

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
            msg: 'Producto cargado correctamente 🐱‍👤!',
            product
        });


    } catch (error) {
        console.log('No se pudo crear el producto 💔. Vuelve a intentarlo porfa! ', error);
        
        return res.status(500).json({
            msg: 'No se pudo crear el producto 👾, vuelva a intentarlo'
        });
    }
};

ctrlProduct.putProduct = async (req, res) => {
    // const newTask = new Task({
    //     title: ,
    //     description: ,
    //     date: ""
    // });
    const { commercialName,
        description,
        price,
        quantity,
        inputDate} = req.body;
    const product = await Product.findById(req.params.id);
    // const task = await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(product);

    return res.json({
        msg: ''
    })
};


// Controlador para eliminar usuario, requiere ID de usuario.
ctrlProduct.deleteProduct = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlProduct;