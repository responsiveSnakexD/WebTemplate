import { json, LoaderFunction } from "react-router-dom";
import { blogSchema, postSchema } from "./type";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/posts/${params.blogId}`);
  const data = await response.json();
  const validatedData = postSchema.parse(data);
  const authorResponse = await fetch(
    `https://dummyjson.com/users/${validatedData.userId}`
  );
  const authorData = await authorResponse.json();
  const output = {
    ...data,
    author: `${authorData.firstName} ${authorData.lastName}`,
  };
  return json(blogSchema.parse(output));
};
