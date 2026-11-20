import React from "react";

const Modal = ({ body, onClose }) => {
  return (
    <div>
      <section
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          backgroundColor: "#0008",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            width: "80%",
            height: "80%",
            minHeight: 500,
            padding: 20,
            margin: 10,
          }}
        >
          <button onClick={onClose}>X</button>
          {body}
        </div>
      </section>
    </div>
  );
};

export default Modal;
