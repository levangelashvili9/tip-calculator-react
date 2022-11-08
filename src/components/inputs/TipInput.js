import React, { useState, useEffect } from "react";
import styled from "styled-components";

function TipInput({ tip, setTip }) {
  const percentArray = [5, 10, 15, 25, 50];

  const [active, setActive] = useState(); // FOR ACTIVE BUTTON
  const handleClick = (percent) => {
    setTip(percent);
    setActive(percent);
  };

  const handleChange = (e) => {
    const val = Math.max(0, Math.min(100, Number(e.target.value)));
    setTip(val.toString());
    setActive(val);
  };

  useEffect(() => {
    tip || setActive("");
  }, [tip]);

  return (
    <div>
      <label>Select Tip %</label>
      <ButtonsContainer>
        {percentArray.map((percent, id) => {
          return (
            <TipButton
              key={id}
              onClick={() => handleClick(percent)}
              isActive={active === percent ? true : false} // DEFINE ACTIVE CLASS
            >
              {percent}%
            </TipButton>
          );
        })}
        <Input
          type="number"
          placeholder="Custom"
          value={tip}
          onChange={handleChange}
        ></Input>
      </ButtonsContainer>
    </div>
  );
}

export default TipInput;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  margin-top: 16px;

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TipButton = styled.button`
  height: 48px;

  background: ${(props) => (props.isActive ? "#26c2ae" : "#00474b")};
  color: ${(props) => (props.isActive ? "#00474b" : "#fff")};

  border-radius: 5px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  line-height: 36px;

  &:hover {
    background: #9fe8df;
    color: #00474b;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 48px;

  background: #f3f9fa;
  border-radius: 5px;
  border: 2px solid #fff;

  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;

  color: #00474b;

  &:focus {
    outline: none;
    border: 2px solid #26c2ae;
  }
`;
