import React, { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { blogSchema } from "./type";

const BlogItem: FC = () => {
  const data = useLoaderData();
  if (!data) {
    return <div>Loading...</div>;
  }

  const { author, ...post } = blogSchema.parse(data);

  const { title, body, tags, reactions } = post;
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

export default BlogItem;
