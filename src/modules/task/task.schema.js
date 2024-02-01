import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  progress: {
    type: String,
    enum: ["started", "in progress", "completed"],
    default: "started",
  },
  deadline: { type: Date },
  // Other task-related fields
});

export const Task = mongoose.model("Task", taskSchema);

