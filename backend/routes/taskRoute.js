const express = require("express");
const { createTask, getTasks } = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router();

//create a task
router.post("/api/tasks", createTask)
//get and read tasks
router.get("/api/tasks", getTasks)

module.exports = router