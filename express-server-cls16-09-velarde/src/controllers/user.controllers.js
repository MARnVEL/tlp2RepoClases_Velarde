
//Un controlador es lo que hace es manejar la lógica... ¿ESTÁTICA?
//los controladores (funciones que contendrán la lógica del endpoint)
//En la carpeta controladaor no importa la biblioteca express.

const ctrlUser = {}; // a este obj le agrego métodos (propiedades para definir funciones).

//Requiero modelo de datos del usuario
const User = require('../models/User');

// Controlador para obtener todos los usuarios ACTIVOS de la Base de Datos.
ctrlUser.getUser = async (req, res) => {
    try {
        // Se consultan todos los documentos de la base de datos.
        const user = await User.find();
        // Se devuelve al cliente un arreglo con los datos de los usuarios.
        return res.json(user)

    } catch (err) {
        console.log('Error al obtener usuarios', err);
    }
}


// Controlador para crear nuevo usuario en la Base de Datos.
ctrlUser.postUser = async (req, res) => {
    //Cada vez que quiero ingresar documento a la BD voy al controlador.
    // Se obtienen los datos enviados por método POST
    const { username, password, email } = req.body;

    // const { username, password, email, ...otrosDatos } = req.body;
    //!El ...otrosDatos es para incluir posibles otros datos

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    try {
        
        const newUser = new User({
            username,
            password,
            email
        });
    
        // Se almacena en la base de datos con método asícrono .save()
        const user = await newUser.save();
        
        // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
        return res.json({
            msg: 'Usuario creado correctamente!',
            usario: user //acá podría usar la notación de JS para obviar la clave y dejar sólo user.
        });

    } catch (error) {
        console.log('No se pudo crear el usuario 💔. Vuelve a intentarlo porfa! ', error);
        
        return res.status(500).json({
            msg: 'No se pudo crear el usuario, vuelva a intentarlo'
        })
    }
};

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlUser.putUser = async (req, res) => {
    return res.json({
        msg: ''
    })
};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrlUser.deleteUser = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlUser;
