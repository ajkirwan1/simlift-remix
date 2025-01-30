/** @format */

import z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name field is required" })
    .max(30, { message: "Too many characters" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Contact number field is required" })
    .max(30, { message: "Too many characters" }),
  email: z
    .string()
    .email()
    .trim()
    .min(1, { message: "Email field is required" })
    .max(31, { message: "Too many characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message field is required" })
    .max(500, { message: "Too many characters" }),
});
