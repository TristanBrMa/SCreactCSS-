import React from "react";
import styled from "styled-components";

const Face = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffe4c4;

  border-radius: 50%;
  position: relative;
  border: 2px solid;
`;

const Eyes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Eye = styled.div`
  width: 30px;
  height: 30px;
  background-color: #add8e6;
  border-radius: 50%;
  margin: 10px;
  border: 2px solid;
`;

const Mouth = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 40px;
  background-color: white;
  border-radius: 50% / 100% 100% 0 0;
  border: 2px solid;
`;

const SimpleFace = () => {
  return (
    <Face>
      <Eyes>
        <Eye />
        <Eye />
      </Eyes>
      <Mouth />
    </Face>
  );
};

export default SimpleFace;
