

const {Schema, model} = require('mongoose');

const productSchema = new Schema(
    {
    commercialName: {
        type: String,
        required: true,
        max: 255
    },

    description: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inputDate: {
        type: Date,
        default: Date.now
    }
    },
    {
        versionKey: false,
        timestamps: true
    },
);

module.exports = model('Product', productSchema);
//!Los modelos son esquemas compilados. Tenemos un esquema por cada entidad de nuestro proyecto!!
//!Las collecciones en el mongo se crean con el plural del nombre que le pongo acá al modelo. Es decir, la colección de productos será: "products"