const Task = require("../models/taskModel")

//create a tasks
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({msg: error.message})
    }
}

//get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    }catch (error){
        res.status(500).json({msg: error.message})
    }
}

//get a single task
const getTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        //if no task is found
        if (!task) {
            return res.status(404).json(`No task with id: ${id} not found`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

//delete task
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`No task with id: ${id} found`)
        }
//sending message back to say task has been deleted
        res.status(200).send("Task deleted")
    } catch(error) {
        res.status(500).json({msg: error.message})
    }
}

//update a task
const updateTask = async (req, res) => {
    try {
        //destructure id
        const { id } = req.params
        const task = await Task.findByIdAndUpdate(
            {_id: id}, 
            req.body, 
            {new: true,
            //now tell the function when it looks into the model to make sure the user has entered all the required fields
                runValidators: true,
            }
        )
        if (!task) {
            return res.status(404).json(`No task with id: ${id} found`)
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}