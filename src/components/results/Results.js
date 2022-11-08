import React from "react";
import styled from "styled-components";
import DisplayResults from "./DisplayResults";
import Reset from "./Reset";

function Results({
  tipValue,
  totalValue,
  bill,
  tip,
  people,
  setBill,
  setTip,
  setPeople,
}) {
  return (
    <Container>
      <Display>
        <DisplayResults tipValue={tipValue} totalValue={totalValue} />
        <Reset
          bill={bill}
          people={people}
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
        />
      </Display>
    </Container>
  );
}

export default Results;

const Container = styled.div`
  padding: 32px 24px 0;

  @media screen and (min-width: 1080px) {
    padding: 32px 32px 32px 0;
  }
`;

const Display = styled.div`
  background: #00474b;
  border-radius: 15px;

  padding: 37px 22px 24px 24px;

  @media screen and (min-width: 1080px) {
    width: 413px;
    height: 417px;

    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
