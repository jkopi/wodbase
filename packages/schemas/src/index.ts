import { z } from "zod";

export const MyTestSchema = z.object({
  name: z.string()
});

export const GymSchema = z.object({});

export const GymFeedSchema = z.object({});