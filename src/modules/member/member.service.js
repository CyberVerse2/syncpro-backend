import { Member } from "./member.schema.js";
// import AppError from "../../common/utils/appError.js";

export async function createNewMember(body) {
  const member = await Member.create(body);
  return member;
}
