const z = require("zod");

const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(9, { message: "Password must be at least 9 characters long" })
    .max(14, { message: "Password cannot exceed 14 characters" })
    .regex(/[a-zA-Z]/, { message: "Password must include at least one letter" })
    .regex(/\d/, { message: "Password must include at least one number" }),
});

const signInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

module.exports = {
  signUpSchema,
  signInSchema,
};
