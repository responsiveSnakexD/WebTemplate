import React, { FC } from "react";
import { useLoaderData } from "react-router-dom";

const BlogItem: FC = () => {
  const data = useLoaderData();
  if (!data) {
    return <div>Loading...</div>;
  }
  const hasAuthor = (value: unknown): value is { author: string } =>
    typeof value === "object" && value !== null && "author" in value;
  if (!hasAuthor(data)) {
    throw new Error("Invalid data");
  }

  const { author, ...post } = data;
  if (!isPost(data)) {
    throw new Error("Invalid post");
  }
  const { title, body, tags, reactions } = data;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>Author: {author}</p>
      <p>Tags: {tags.join(", ")}</p>
      <p>Reactions: {reactions}</p>
    </div>
  );
};

export type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};
export const isPost = (post: unknown): post is PostProps => {
  const hasAttributes =
    typeof post === "object" &&
    post !== null &&
    "id" in post &&
    "title" in post &&
    "body" in post &&
    "userId" in post &&
    "tags" in post &&
    "reactions" in post;
  if (!hasAttributes) throw new Error("Lacking attributes");
  const { id, title, body, userId, tags, reactions } = post as PostProps;
  const isId = typeof id === "number";
  const isTitle = typeof title === "string";
  const isBody = typeof body === "string";
  const isUserId = typeof userId === "number";
  const isTags =
    Array.isArray(tags) && tags.every((tag) => typeof tag === "string");
  const isReactions = typeof reactions === "number";
  return isId && isTitle && isBody && isUserId && isTags && isReactions;
};

export default BlogItem;
