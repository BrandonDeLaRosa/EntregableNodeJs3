const ToDosServices = require("../services/toDos.services");

const getToDos = async (req,res) => {
    try {
        const getAll = await ToDosServices.getAllToDos();
        res.status(201).json(getAll)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createtoDo = async (req,res) =>{
    try {
        const newToDo = req.body;
        const createTodo = await ToDosServices.toDoCreate(newToDo);
        res.status(201).json(createTodo);
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateToDo = async (req,res) => {
    try {
        const {id} = req.params;
        const toDoInfo = req.body;
        await ToDosServices.updateTask(id, toDoInfo); 
        res.status(204).send('Updated')    
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteToDo = async (req,res) =>{
    try {
        const {id} = req.params;
        await ToDosServices.deleteTask(id); 
        res.status(204).send('Updated')    
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createtoDo,
    getToDos,
    updateToDo,
    deleteToDo
}