

const ctrlTask = {}; 
const Task = require('../models/Task');

//************************************************************************************************ */
// Controlador para obtener las tareas de la Base de Datos.
ctrlTask.getTask = async (req, res) => {
    try {
        const task = await Task.find({active: true});
        return res.json(task)

    } catch (err) {
        console.log('Error al obtener tareas', err);
    }
};

//************************************************************************************************ */

ctrlTask.postTask = async (req, res) => {

    // Se obtienen los datos enviados por método POST
    const { title, description, date } = req.body;

    try {
        
        const newTask = new Task({
            title,
            description,
            date
        });
    
        // Se almacena en la base de datos con método asícrono .save()
        const task = await newTask.save();

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

//************************************************************************************************ */

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlTask.putTask = async (req, res) => {

    const id = req.params.taskId;

    const { title, description , ...otrosDatos} = req.body;

    if(!id || !description || !title){
        return res.status(400).json({
            msg: 'No task id on the request body'
        });
    };

    try {
        await Task.findByIdAndUpdate(id, { title, description})


        const task = await Task.findById(req.params.taskId);
        // const task = await Task.findByIdAndUpdate(req.params.id, newTask);
        // console.log(task);

        return res.json(
            {
                msg: 'The task has been updated successfully.'
            }
        )
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Error updating task!'
        })
    }

};

//************************************************************************************************ */

// Controlador para eliminar usuario, requiere ID de usuario.
ctrlTask.deleteTask = async (req, res) => {

    const id = req.params.taskId;

    try {
        // const theTask = await Task.findByIdAndUpdate(id, { active : false });
        const theTask = await Task.findById(id);
        const theDeletedTask = await theTask.updateOne({ active : false })
        // await theTask.delete()//!No usar!!
        console.log(theTask);
        // console.log(theTask);
        // await theTask.updateOne(id, { active : false });
        // await theTask.save();
        return res.json({
            msg: 'Task has been deleted',
            msg2: `The task with the title '${theTask.title}' has been deleted successfully`
        }).end();
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg : 'Internal Server Error'
        });

    }

};

//************************************************************************************************ */

module.exports = ctrlTask;


