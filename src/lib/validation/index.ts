import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "please provide a valid name" }),
  username: z.string().min(2, { message: "username too short" }),
  email: z.string().email({ message: "email not valid" }),
  password: z
    .string()
    .min(8, { message: "Password has to be at least 8 characters long" }),
});
