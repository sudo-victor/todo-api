import mongoose from "mongoose";

const CustomListSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  imageBanner: { type: String },
  itemsCompleted: { type: Number, default: 0 },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  tasks: [{ type: mongoose.Schema.ObjectId, ref: "Task" }]
})

export const CustomListModel = mongoose.model("List", CustomListSchema)