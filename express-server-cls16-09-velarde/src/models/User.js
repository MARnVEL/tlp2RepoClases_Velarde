
const { Schema, model } = require('mongoose');

const userSchema =  new Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    active: {
        type: Boolean,
        default: true,
        required: true,
    }

},
{
    versionKey: false,
    timestamps: true
},
);

module.exports = model('User', userSchema);

