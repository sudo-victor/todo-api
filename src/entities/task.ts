import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
  title: { type: String },
  status: { type: String, default: "pending" }
}, { timestamps: true })

export const TaskModel = mongoose.model("Task", TaskSchema)
