import z from "zod";

export const userSignup = z.object({
    email: z.string().email(),
    password:z.string().min(6),
    name:z.string()
})


export const userSignin = z.object({
    email: z.string().email(),
    password:z.string().min(6),
    name:z.string()
})


export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});


export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});


export type SignupInput = z.infer<typeof userSignup>;
export type SigninInput = z.infer<typeof userSignin>;
export type CreatePostType = z.infer<typeof createPostInput>;
export type UpdatePostType = z.infer<typeof updatePostInput>;