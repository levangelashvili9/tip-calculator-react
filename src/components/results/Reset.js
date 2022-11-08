import React from "react";
import styled from "styled-components";

function Reset({ bill, tip, people, setBill, setPeople, setTip }) {
  const handleClick = () => {
    setBill("");
    setPeople("");
    setTip("");
  };

  return (
    <Button
      onClick={handleClick}
      isActive={bill || people || tip ? true : false}
    >
      Reset
    </Button>
  );
}

export default Reset;

const Button = styled.button`
  padding: 9px 32px;

  background: ${(props) => (props.isActive ? "#26C2AE" : "#0d686d")};
  border-radius: 5px;
  border: none;
  width: 100%;

  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  color: #00474b;

  mix-blend-mode: normal;
  opacity: 0.35;

  &:hover {
    background: #9fe8df;
    cursor: pointer;
  }
`;
