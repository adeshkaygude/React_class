import React, { createRef } from "react";

const SimpaleRef = () => {
  const nameRef = createRef();
  const mobileRef = createRef();

  const handleNameClick = () => {
    nameRef?.current?.focus();
  };
  const handleMobileClick = () => {
    mobileRef?.current?.focus();
  };
  return (
    <div>
      <h4>ref</h4>

      <button onClick={handleNameClick}>Name</button>
      <br />
      <button onClick={handleMobileClick}>Mobile</button>
      <br />
      <input
        type="text"
        placeholder="enter your name "
        autoFocus
        ref={nameRef}
      />
      <br />
      <input
        type="number"
        placeholder="enter mobile number  "
        autoFocus
        ref={mobileRef}
      />
    </div>
  );
};

export default SimpaleRef;
