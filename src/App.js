import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import SVGsplitter from "./assets/SVGsplitter";
import Inputs from "./components/inputs/Inputs";
import Results from "./components/results/Results";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipValue, setTipValue] = useState("0.00");
  const [totalValue, setTotalValue] = useState("0.00");

  useEffect(() => {
    bill === "0" && setBill(""); // clear input
    people === "0" && setPeople(""); // clear input
    tip === "0" && setTip(""); // clear input

    // calculate tip value
    let tipSum = (bill * (tip / 100)) / people;
    let formattedTipSum = (Math.round(tipSum * 100) / 100).toFixed(2);
    bill > 0 && tip > 0 && people >= 1 && setTipValue(formattedTipSum);

    // calculate total value
    let totalSum = bill / people + tipSum;
    let formattedTotalSum = (Math.round(totalSum * 100) / 100).toFixed(2);
    bill > 0 && tip > 0 && people >= 1 && setTotalValue(formattedTotalSum);

    // set default values to 0.00
    return () => {
      setTipValue("0.00");
      setTotalValue("0.00");
    };
  }, [bill, tip, people]);

  return (
    <>
      <SVGcontainer>
        <SVGsplitter />
      </SVGcontainer>
      <Container>
        <Inputs
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Results
          tipValue={tipValue}
          totalValue={totalValue}
          bill={bill}
          tip={tip}
          people={people}
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
        />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 375px;
  padding: 32px 0;

  background: #ffffff;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px 25px 0px 0px;

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;

    padding: 0;

    width: 920px;
  }
`;

const SVGcontainer = styled.div`
  margin: 50px auto 40px;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 1080px) {
    margin: 163px auto 88px;
  }
`;
