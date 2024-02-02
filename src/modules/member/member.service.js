import { Member } from './member.schema.js';
// import AppError from "../../common/utils/appError.js";

export async function createNewMember(body) {
  const member = await Member.create(body);
  return member;
}
export async function findMember(field, value) {
  const member = await Member.findOne({ [field]: value });
  return member;
}

export async function updateMember(memberId, body) {
  const updatedMember = await Member.findByIdAndUpdate(memberId, body, {
    new: true
  });
  return updatedMember;
}
