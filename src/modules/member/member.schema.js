import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, enum: ['admin', 'member', 'client'], default: 'member' },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    // Other member-related fields
  },
  { timestamps: true }
);

export const Member = mongoose.model('Member', memberSchema);
