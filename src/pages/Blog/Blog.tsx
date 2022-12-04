import React, { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";

const Blog: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Blog</h1>
      <Button
        onClick={() => navigate(`/blog/${Math.floor(Math.random() * 10) + 1}`)}
      >
        Generate Post
      </Button>
      <Outlet />
    </div>
  );
};

export default Blog;
