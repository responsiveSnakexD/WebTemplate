import { LoaderFunction } from "react-router-dom";
export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/posts/${params.blogId}`);
  return await response.json();
};
