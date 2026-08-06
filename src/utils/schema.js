import { z } from "zod";

export const registrationSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required." })
      .min(2, { message: "Must be at least 2 characters." })
      .trim(),
    lastName: z
      .string()
      .min(1, { message: "Last name is required." })
      .min(2, { message: "Must be at least 2 characters." })
      .trim(),
    dob: z
      .string()
      .min(1, { message: "Date of birth is required." }),
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({
        message: "Please enter a valid email address containing an @ symbol.",
      })
      .trim(),
    password: z
      .string()
      .min(1, { message: "Password is required." })
      .min(8, { message: "Password must be at least 8 characters long." }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password." }),
  })
  // Cross-field validation: enforce confirmPassword === password
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

// Field groups to let React Hook Form validate only the current step on "Next"
export const stepFields = {
  1: ["firstName", "lastName", "dob"],
  2: ["email", "password", "confirmPassword"],
};