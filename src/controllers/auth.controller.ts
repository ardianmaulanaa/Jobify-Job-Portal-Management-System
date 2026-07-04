import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma";
import { registerSchema, loginSchema } from "../validators/auth.validator";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import { hashToken } from "../utils/hashToken";

function getRefreshTokenExpiryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date;
}

export async function register(req: Request, res: Response) {
  try {
    const validatedData = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: validatedData.email,
      },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email sudah terdaftar",
      });
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        passwordHash: hashedPassword,
        role: validatedData.role,
        phone: validatedData.phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        phone: true,
        createdAt: true,
      },
    });

    const tokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    await prisma.refreshToken.create({
      data: {
        tokenHash: hashToken(refreshToken),
        userId: user.id,
        expiresAt: getRefreshTokenExpiryDate(),
      },
    });

    return res.status(201).json({
      success: true,
      message: "Register berhasil",
      data: {
        user,
        accessToken,
        refreshToken,
      },
    });
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validasi gagal",
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const validatedData = loginSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: {
        email: validatedData.email,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    if (user.status !== "ACTIVE") {
      return res.status(403).json({
        success: false,
        message: "Akun tidak aktif",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    const tokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    await prisma.refreshToken.create({
      data: {
        tokenHash: hashToken(refreshToken),
        userId: user.id,
        expiresAt: getRefreshTokenExpiryDate(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Login berhasil",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
          phone: user.phone,
        },
        accessToken,
        refreshToken,
      },
    });
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validasi gagal",
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
}