
const { Schema, model } = require('mongoose');

const taskSchema =  new Schema({
    

    title: {
        type: String,
        required: true,
        max: 100
    },

    description: {
        type: String,
        max: 500,
        unique: true
    },

    state: {
        type: String,
        //Yo necesito algo para darle al usuario 3 estados (pendiente, en proceso y completada)
        // required: true,
        default: 'pending'
    },
    date: {
        type: Date,
        default: Date.now,
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
}
);

module.exports = model('Task', taskSchema);


