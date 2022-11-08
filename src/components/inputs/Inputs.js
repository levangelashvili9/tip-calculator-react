import React from "react";
import styled from "styled-components";
import BillInput from "./BillInput";
import TipInput from "./TipInput";
import PeopleInput from "./PeopleInput";

function Inputs({ bill, setBill, tip, setTip, people, setPeople }) {
  return (
    <Container>
      <BillInput bill={bill} setBill={setBill} />
      <TipInput tip={tip} setTip={setTip} />
      <PeopleInput people={people} setPeople={setPeople} />
    </Container>
  );
}

export default Inputs;

const Container = styled.div`
  padding: 0 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 1080px) {
    padding: 45px 0 48px 48px;
    gap: 40px;
  }
`;
