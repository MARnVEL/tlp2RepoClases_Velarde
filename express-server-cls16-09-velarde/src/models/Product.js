

const {Schema, model} = require('mongoose');

const productSchema = new Schema({
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