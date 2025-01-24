import z from "zod"

export const contactFormSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(5)
})