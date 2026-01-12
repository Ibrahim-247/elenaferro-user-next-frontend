import { z } from "zod";

export const registerSchema = z
  .object({
    full_name: z.string().min(3, "Full name must be at least 3 characters"),

    email: z.string().email("Invalid email address"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    password_confirmation: z.string(),

    privacy_policy: z.literal(true, {
      errorMap: () => ({
        message: "You must accept the Terms & Privacy Policy",
      }),
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });
