import React from "react";
import styled from "styled-components";

function DisplayResults({ tipValue, totalValue }) {
  return (
    <Container>
      <Result>
        <div>
          <H2>Tip Amount</H2>
          <H3>/ person</H3>
        </div>
        <H1>${tipValue}</H1>
      </Result>
      <Result>
        <div>
          <H2>Total</H2>
          <H3>/ person</H3>
        </div>
        <H1>${totalValue}</H1>
      </Result>
    </Container>
  );
}

export default DisplayResults;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;

  @media screen and (min-width: 1080px) {
    gap: 40px;
  }
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 32px;
  line-height: 47px;
  text-align: right;
  letter-spacing: -0.666667px;
  color: #26c2ae;

  @media screen and (min-width: 1080px) {
    font-size: 48px;
    // line-height: 71px;
    letter-spacing: -1px;
  }
`;

const H2 = styled.h2`
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

const H3 = styled.h3`
  font-size: 13px;
  line-height: 19px;

  color: #7f9d9f;
`;
