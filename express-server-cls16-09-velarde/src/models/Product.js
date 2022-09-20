

const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
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