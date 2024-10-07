import React from "react";
import styled from "styled-components";

const Button = ({ text, handleSubmit }) => {
  const handeClick = () => {
    if (!handleSubmit) return;
    handleSubmit();
  };

  return <ButtonComp onClick={handeClick}>{text}</ButtonComp>;
};

export default Button;

const ButtonComp = styled.button`
  height: 2rem;
  border-radius: 10px;
  padding: 0 2rem;
  background: rgb(14, 84, 255);
  color: white;
  font-weight: 800;
`;
