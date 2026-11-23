import React from "react";
import { createPortal } from "react-dom";

import Modal_Player from "./Modal_Player";

const Playerdialog = ({ selectedPlayer, handleClose }) => {
  return (
    <>
      {/* Player Select असेल तरच Dialog दाखवायचा */}
      {selectedPlayer &&
        createPortal(
          // Modal_Player ला Selected Player आणि Close Function पाठवले
          <Modal_Player
            selectedPlayer={selectedPlayer}
            handleClose={handleClose}
          />,

          // Dialog या HTML element मध्ये Render होईल
          document.getElementById("dialog"),
        )}
    </>
  );
};

export default Playerdialog;
