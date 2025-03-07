// const taskValidator = require("../validators/taskValidator"); // Import validator
import { Task } from "../models/taskModel.js";
import { taskValidator } from "../validators/taskValidator.js";

export const taskController = {
  // Create a new task
  async createNewTask(req, res) {
    try {
      const { id } = req.user;
      const errors = taskValidator.validateTask(req.body);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const { title, description } = req.body;
      const newTask = new Task({ title, description, userId: id });
      await newTask.save();

      res
        .status(201)
        .json({ task: newTask, message: "Task created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to create task" });
    }
  },

  async getAllTasks(req, res) {
    try {
      const { id } = req.user;
      const tasks = await Task.find({ userId: id });
      console.log("req user ", req.user);
console.log('tasks ',tasks);

      res.status(201).json({
        tasks,
        message: "Tasks rettrived successfully",
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to create task" });
    }
  },

  // Edit an existing task
  async editTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;

      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { $set: { title, description } }, 
        { new: true, runValidators: true }
      );
      

      if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
      }

      res.json({ task: updatedTask, message: "Task updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update task" });
    }
  },

  // Delete a task
  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);

      if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
      }

      res.json({ message: "Task deleted successfully", taskId: id });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete task" });
    }
  },
};
