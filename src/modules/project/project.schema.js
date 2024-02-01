import mongoose from "mongoose";
// const progress = ['started', 'in progress', 'completed'];

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    banner: { type: String, required: true },
    description: { type: String, required: true },
    teamCode: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],
    deadline: { type: Date, required: true },
    progress: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true },
);

export const Project = mongoose.model("Project", projectSchema);
