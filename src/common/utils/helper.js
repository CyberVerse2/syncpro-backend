import { randomBytes } from "crypto";
import { compare, hash } from "bcrypt";
import { ENVIRONMENT } from "../config/environment.js";
import jwt from "jsonwebtoken";
// import { ValidationError, validate } from "class-validator";
// import AppError from "./appError.js";

/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the random string to generate.
 * @return {string} - The generated random string.
 */
export function generateRandomString(length) {
  return randomBytes(length).toString("hex");
}

export const hashData = async (data) => {
  const hashedData = await hash(data, 10);
  return hashedData;
};

export const compareData = async (data, hashedData) => {
  const isValid = await compare(data, hashedData);
  return isValid;
};

export const signData = (data, secret, expiresIn) => {
  return jwt.sign({ ...data }, secret, {
    expiresIn,
  });
};

export const decodeData = (token, secret) => {
  return jwt.verify(token, secret);
};

export const setCookie = (
  res,
  name,
  value,
  options = {},
) => {
  res.cookie(name, value, {
    httpOnly: true,
    secure: ENVIRONMENT.APP.ENV === "production",
    path: "/",
    sameSite: "none",
    ...options,
  });
};