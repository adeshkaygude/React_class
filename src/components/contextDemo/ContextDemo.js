import React from "react";
import CountryContext from "./CounteryContext";
import A from "./A";

function ContextDemo() {
  const city = "pune";
  const countery = "Bharat";

  return (
    <>
      <h3>Context demo</h3>
      

      <CountryContext value={countery}>
        <A city={city} />
      </CountryContext>
    </>
  );
} 

export default ContextDemo;
