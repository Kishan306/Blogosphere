import z from "zod";

export const userSignup = z.object({
    email: z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})

