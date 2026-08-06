import { z } from "zod";

export const registrationSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required." })
      .min(2, { message: "Must be at least 2 characters." })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "First name can only contain letters and spaces (no numbers).",
      })
      .trim(),
    lastName: z
      .string()
      .min(1, { message: "Last name is required." })
      .min(2, { message: "Must be at least 2 characters." })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Last name can only contain letters and spaces (no numbers).",
      })
      .trim(),
    dob: z
      .string()
      .min(1, { message: "Date of birth is required." })
      .superRefine((dateString, ctx) => {
        const selectedDate = new Date(dateString);
        const today = new Date();

        // 1. Prevent future dates
        if (selectedDate > today) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Date of birth cannot be in the future.",
          });
          return;
        }

        // 2. Calculate actual age
        let age = today.getFullYear() - selectedDate.getFullYear();
        const monthDiff = today.getMonth() - selectedDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < selectedDate.getDate())
        ) {
          age--;
        }

        // 3. Restrict if under 18 and display their calculated age
        if (age < 18) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `You are ${age} years old. You must be at least 18 years old to register.`,
          });
        }
      }),
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