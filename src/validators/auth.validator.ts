import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Nama minimal 3 karakter")
    .max(100, "Nama maksimal 100 karakter"),

  email: z
    .string()
    .email("Format email tidak valid")
    .max(150, "Email terlalu panjang"),

  password: z
    .string()
    .min(8, "Password minimal 8 karakter"),

  role: z
    .enum(["ADMIN", "RECRUITER", "JOB_SEEKER"])
    .optional()
    .default("JOB_SEEKER"),

  phone: z
    .string()
    .max(20, "Nomor telepon terlalu panjang")
    .optional(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email("Format email tidak valid"),

  password: z
    .string()
    .min(1, "Password wajib diisi"),
});