


//Como esto es una Clase, la primera letra del nombre de este archivo va en mayúscula: "User".

const { Schema, model } = require('mongoose');


const userSchema =  new Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        max: 50,
        unique: true //Para verificar el email que sea único.
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

//Las clases son como plantillas para darle forma a los datos.
//Para dejar conformado el esquema se importa el model.

module.exports = model('User', userSchema);
//Model necesita dos parámetros, como se llama la colección, y como se estructuran los datos.
//!Los modelos son esquemas compilados. Tenemos un esquema por cada entidad de nuestro proyecto!!
//!Las collecciones en el mongo se crean con el plural del nombre que le pongo acá al modelo. Es decir, la colección de usuarios será: "users"
