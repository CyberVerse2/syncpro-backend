import { Team } from "./team.schema.js";

export function findTeam(field, value) {
  return Team.findOne({ [field]: value });
}
