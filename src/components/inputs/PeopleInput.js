import React from "react";
import styled from "styled-components";
import PeopleSVG from "../../assets/icon-person.svg";

function PeopleInput({ people, setPeople }) {
  const handleChange = (e) => {
    const val = Math.max(0, Math.min(1000, Number(e.target.value)));
    setPeople(val.toString());
  };

  return (
    <div>
      <Label>Number of People</Label>
      <Input>
        <InputField
          type="number"
          placeholder="0"
          value={people}
          onChange={handleChange}
        ></InputField>
        <Img src={PeopleSVG} alt="person icon" />
      </Input>
    </div>
  );
}

export default PeopleInput;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

const Input = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  background: #f3f9fa;
  color: #00474b;

  border-radius: 5px;
  border: none;

  padding: 6px 18px 6px 36px;
  width: 100%;
  height: 48px;

  text-align: right;

  font-size: 24px;
  font-weight: 700;
  line-height: 36px;

  &:focus {
    outline: 2px solid #26c2ae;
  }
`;

const Img = styled.img`
  position: absolute;
  left: 19px;
`;
