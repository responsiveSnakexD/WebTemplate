import { json, LoaderFunction } from "react-router-dom";
import { isPost } from "./BlogItem";
export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/posts/${params.blogId}`);
  const data = await response.json();
  if (!hasUserId(data)) {
    throw new Error("Invalid data");
  }
  const authorResponse = await fetch(
    `https://dummyjson.com/users/${data.userId}`
  );
  const authorData = await authorResponse.json();
  if (!hasName(authorData)) {
    throw new Error("Invalid data");
  }
  return json({
    ...data,
    author: `${authorData.firstName} ${authorData.lastName}`,
  });
};

const hasName = (
  data: unknown
): data is { firstName: string; lastName: string } =>
  typeof data === "object" &&
  data !== null &&
  "firstName" in data &&
  "lastName" in data;

const hasUserId = (data: unknown): data is { userId: number } =>
  typeof data === "object" &&
  data !== null &&
  "userId" in data &&
  typeof (data as { userId: unknown }).userId === "number";
