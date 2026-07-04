import jwt, { SignOptions } from "jsonwebtoken";

type TokenPayload = {
  id: string;
  email: string;
  role: string;
};

const accessSecret = process.env.JWT_ACCESS_SECRET || "default_access_secret";
const refreshSecret = process.env.JWT_REFRESH_SECRET || "default_refresh_secret";

export function generateAccessToken(payload: TokenPayload) {
  const options: SignOptions = {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
  };

  return jwt.sign(payload, accessSecret, options);
}

export function generateRefreshToken(payload: TokenPayload) {
  const options: SignOptions = {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  };

  return jwt.sign(payload, refreshSecret, options);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, accessSecret) as TokenPayload;
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, refreshSecret) as TokenPayload;
}