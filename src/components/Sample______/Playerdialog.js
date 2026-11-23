import React from "react";
import { createPortal } from "react-dom";
import ModalPlayer from "./ModalPlayer";

const Playerdialog = ({ selectedPlayer, handleClose }) => {
  return (
    <>
      {selectedPlayer &&
        createPortal(
          <ModalPlayer
            selectedPlayer={selectedPlayer}
            handleClose={handleClose}
          />,
          document.getElementById("dialog"),
        )}
    </>
  );
};

export default Playerdialog;
