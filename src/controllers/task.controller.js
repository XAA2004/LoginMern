import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {

    const tasks = await Task.find();
    res.json(tasks);
}

export const getTask = async (req, res) => {

    const task = await Task.findById(req.params.id);
    if(!task) return res.status(404).json({ message: 'Task not Found'});
    res.status(200).json(task)
}


export const createTask = async (req, res) => {

    const { title, description, date } = rq.body;

    const newTask = new Task({
        title,
        description,
        date
    });
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
}

export const updateTask = async (req, res) => {
    const task = await Task.findByIdUpdate(req.params.id, req.body);
    if(!task) return res.status(404).json({ message: 'Task not Found'});
    res.status(201).json(task)
}

export const deleteTask = async (req, res ) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({ message: 'Task not Found'});
    return res.status(204)
};