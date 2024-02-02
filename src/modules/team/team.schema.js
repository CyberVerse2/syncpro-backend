import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    teamCode: { type: String, required: true, unique: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }]
  },
  { timestamps: true }
);

export const Team = mongoose.model('Team', teamSchema);
