


//Como esto es una Clase, la primera letra del nombre de este archivo va en mayúscula: "Task".

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
        unique: true //Para verificar el email que sea único.
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
},
);

//Las clases son como plantillas para darle forma a los datos.
//Para dejar conformado el esquema se importa el model.

module.exports = model('Task', taskSchema);//Model necesita dos parámetros, como se llama la conexión, 
//y como se estructuran los datos.

