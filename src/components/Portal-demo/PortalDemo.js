import React from "react";
import SampleParent from "./SampleParent";

const PortalDemo = () => {
  return (
    <div>
      <section style={{ backgroundColor: "blue" }}>
        <h3>Portal Demo</h3>
        <SampleParent />
        <h3>sample element </h3>
        <h3>sample element </h3>
        <h3>sample element </h3>
        <h3>sample element </h3>
        <h3>sample element </h3>
      </section>
    </div>
  );
};

export default PortalDemo;
