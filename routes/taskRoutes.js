import express from "express";
import { taskController } from "../controllers/taskController.js";

const router = express.Router();

router
  .route("/")
  .post(taskController.createNewTask)
  .get(taskController.getAllTasks);

router
  .route("/:id")
  .put(taskController.editTask)
  .delete(taskController.deleteTask);

export default router;
