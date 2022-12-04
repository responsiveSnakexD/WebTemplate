import { z } from "zod";

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
  tags: z.array(z.string()),
  reactions: z.number(),
});

export const blogSchema = z
  .object({
    author: z.string(),
  })
  .and(postSchema);

export type Blog = z.infer<typeof blogSchema>;
export type Post = z.infer<typeof postSchema>;
