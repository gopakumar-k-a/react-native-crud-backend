import mongoose, { Schema, Document } from "mongoose";


const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);

// Create & export Mongoose model
export const Task = mongoose.model("Task", TaskSchema);

