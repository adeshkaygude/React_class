import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const Dialog = ({ open, onClose }) => {
  return (
    <>
      {open &&
        createPortal(
          <Modal body="Sample Content" onClose={onClose} />,
          document.getElementById("dialog"),
        )}
    </>
  );
};

export default Dialog;
