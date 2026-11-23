import React, { useContext } from "react";
import { PlayersContext } from "./PlayersContext";

const ModalPlayer = () => {
  const { handleClose, selectedPlayer } = useContext(PlayersContext);
  return (
    <div>
      <section
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#0008",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            backgroundColor: "#ebc3c3",
            width: "80%",
            height: "80%",
            minHeight: 500,
            padding: 20,
            margin: 10,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          {selectedPlayer && (
            <>
              <h2>{selectedPlayer.player}</h2>

              <img
                src={selectedPlayer.avatar}
                alt={selectedPlayer.player}
                width="200"
              />

              <p>{selectedPlayer.caption}</p>

              <p>Village: {selectedPlayer.village}</p>
            </>
          )}
          <button onClick={handleClose}> close Dialog</button>
        </div>
      </section>
    </div>
  );
};

export default ModalPlayer;
