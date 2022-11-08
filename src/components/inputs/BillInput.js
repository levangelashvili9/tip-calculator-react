import React from "react";
import styled from "styled-components";
import DollarSVG from "../../assets/icon-dollar.svg";

function BillInput({ bill, setBill }) {
  const handleChange = (e) => {
    const val = Math.max(0, Math.min(10000, Number(e.target.value)));
    setBill(val.toString());
  };

  return (
    <div>
      <Label>Bill</Label>
      <Input>
        <InputField
          type="number"
          placeholder="0"
          value={bill}
          onChange={handleChange}
        ></InputField>
        <Img src={DollarSVG} alt="dollar icon" />
      </Input>
    </div>
  );
}

export default BillInput;

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
