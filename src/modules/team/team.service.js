import { Team } from "./team.schema.js";

export function findTeam(field, value) {
  return Team.findOne({ [field]: value });
}
export function createTeam(body) {
  return Team.create(body);
}
export function deleteTeam(id) {
  return Team.findByIdAndDelete(id);
}
