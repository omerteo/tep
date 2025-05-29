import z from "zod";

export const QuestionFormSchema = z.object({  
  text: z.string()
})