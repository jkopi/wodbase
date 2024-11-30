import { z } from "zod";

export const MyTestSchema = z.object({
  name: z.string()
});