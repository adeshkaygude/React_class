import React, { useContext } from "react";
import { PlayersContext } from "./PlayersContext";
import { createPortal } from "react-dom";
import ModalPlayer from "./ModalPlayer";

const Playerdialog = () => {
  const { handleClose, selectedPlayer } = useContext(PlayersContext);
  return (
    selectedPlayer &&
    createPortal(
      <PlayersContext value={{ handleClose, selectedPlayer }}>
        <ModalPlayer />
      </PlayersContext>,
      document.getElementById("dialog"),
    )
  );
};

export default Playerdialog;
