import z from "zod";

export const formSchema = z.object({
    company : z.string().trim().min(5),
    nature : z.string().trim().min(5),
    address : z.string().trim().min(5),
    postcode : z.string().trim().min(1),
    contactn : z.string().trim().min(1),
    contactp : z.string().trim().min(1),
    email : z.email(),
    linkedin : z.string().trim().min(3),
    talk : z.string().trim().min(1),
})
 export type FormSchema = z.infer<typeof formSchema>;