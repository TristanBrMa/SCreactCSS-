import React from "react";
import styled from "styled-components";

const RedDiv = styled.div`
  background-color: red;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TrueTitle = styled.h1`
  font-family: "Highway Gothic";
  color: #ffff;
`;

const Thought = () => {
  return (
    <RedDiv>
      <TrueTitle>TailWind c'est mieux </TrueTitle>
    </RedDiv>
  );
};

export default Thought;
