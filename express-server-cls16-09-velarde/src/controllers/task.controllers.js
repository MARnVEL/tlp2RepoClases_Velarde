
//Un controlador es lo que hace es manejar la lógica... ¿ESTÁTICA?
//los controladores (funciones que contendrán la lógica del endpoint)
//En la carpeta controladaor no importa la biblioteca express.

const ctrlTask = {}; // a este obj le agrego métodos (propiedades para definir funciones).

//Requiero modelo de datos del usuario
const Task = require('../models/Task');


// Controlador para obtener las tareas de la Base de Datos.
ctrlTask.getTask = async (req, res) => {
    try {
        // Se consultan todos los documentos de la base de datos.
        const task = await Task.find({isActive: true});
        // !Se devuelve al cliente !UN ARREGLO con los datos de los usuarios.
        return res.json(task)

    } catch (err) {
        console.log('Error al obtener tareas', err);
    }
}


// Controlador para crear nuevo usuario en la Base de Datos.
ctrlTask.postTask = async (req, res) => {
    //Cada vez que quiero ingresar documento a la BD voy al controlador.
    // Se obtienen los datos enviados por método POST
    const { title, description, date } = req.body;

    // const { username, password, email, ...otrosDatos } = req.body;
    //!El ...otrosDatos es para incluir posibles otros datos

    try {
        
        // Se instancia un nuevo documento de MongoDB para luego ser guardado
        const newTask = new Task({
            title,
            description,
            date
        });
    
        // Se almacena en la base de datos con método asícrono .save()
        const task = await newTask.save();
        
        // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
        return res.json({
            msg: 'Tarea creada correctamente!',
            task: task //acá podría usar la notación de JS para obviar la clave y dejar sólo task.
        });

    } catch (error) {
        console.log('No se pudo crear la tarea 💔. Vuelve a intentarlo porfa! ', error);
        
        return res.status(500).json({
            msg: 'No se pudo crear la tarea 👾, vuelva a intentarlo'
        })
    }
};

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlTask.putTask = async (req, res) => {

    /*
    Cuando quiero editar tengo que pensar primero qué tengo que editar.
    No todos los datos se pueden editar.

    */
    // const newTask = new Task({
    //     title: ,
    //     description: ,
    //     date: ""
    // });
    //también se podría estructurar, pero si no envío el Id acá se rompería.
    try {
        const id = req.params.id;
        const { title, description , ...otrosDatos} = req.body;

        if(!id || !description || !title){
            return res.status(400).json({
                        msg: 'No task id'
            });
        };

        const updatedTask = await findByIdAndUpdate(id, { title, description})


        const task = await Task.findById(req.params.taskId);
        // const task = await Task.findByIdAndUpdate(req.params.id, newTask);
        console.log(task);

        return res.json({
            msg: 'The task has been updated'
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Internal Server Error'
        })
    }

};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrlTask.deleteTask = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlTask;


