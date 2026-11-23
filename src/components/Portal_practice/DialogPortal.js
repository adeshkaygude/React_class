import React from "react";
import { createPortal } from "react-dom";

const DialogPortal = ({ open, handleClose }) => {
  return (
    <>
      {/* open true असेल तरच Dialog दाखवायचा */}
      {open &&
        createPortal(
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "#0008",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Main Dialog Box */}
            <div
              style={{
                backgroundColor: "white",
                padding: 30,
                borderRadius: 10,
              }}
            >
              <h2>Hello React Portal!</h2>

              <p>This is Simple Dialog Box</p>

              <button onClick={handleClose}>Close</button>
            </div>
          </div>,

          // Portal दुसऱ्या div मध्ये render होईल
          document.getElementById("dialog"),
        )}
    </>
  );
};

export default DialogPortal;
