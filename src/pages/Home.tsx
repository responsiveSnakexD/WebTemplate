import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/common/Button";
import { ButtonType } from "../components/common/Button/type";

export const Home: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <HomeStyled>
      <h1>Home</h1>
      {clicked && (
        <h2>
          Lol you just clicked something{" "}
          <span onClick={() => setClicked(false)}>unclick me pls</span>
        </h2>
      )}
      <Button type={ButtonType.Primary} onClick={() => setClicked(true)}>
        Click Me!
      </Button>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  h1 {
    color: red;
    text-align: center;
  }
`;
