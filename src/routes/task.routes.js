import { Router } from "express";
import { getTask, getTasks, createTask, deleteTask, updateTask } from "../controllers/task.controller.js";
import { requiredAuth, tokenValidation } from '../middlewares/tokenValidation.js';

const router = Router();

router.get('/tasks', requiredAuth, getTasks)
router.get('/task/:id',requiredAuth, getTask)
router.post('/task',requiredAuth, createTask)
router.put('/tasks/:id',requiredAuth, updateTask)
router.delete('/task/:id', requiredAuth, deleteTask)

export default router;