const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router();

router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

/* //full version of routes
//create a task
router.post("/", createTask)
//get and read tasks
router.get("/", getTasks)
//get single task
router.get("/:id", getTask)
//delete single task
router.delete("/:id", deleteTask)
//update single task - this requires all fields vs patch one field
router.put("/:id", updateTask) */

module.exports = router