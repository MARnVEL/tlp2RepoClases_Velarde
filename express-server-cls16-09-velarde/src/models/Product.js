
const {Schema, model} = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        quantityPack: {
            type: Number,
            required: true
        },

        unitWeight: {
            type: Number,
            required: true
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
