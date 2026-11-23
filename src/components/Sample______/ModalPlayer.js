import React from "react";

const ModalPlayer = ({ selectedPlayer, handleClose }) => {
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
            backgroundColor: "#fff",
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
              <h2>{selectedPlayer?.player}</h2>
              <img
                src={selectedPlayer?.avatar}
                alt={selectedPlayer?.player}
                width="200"
              />
              <p>{selectedPlayer?.caption}</p>
              <p>village : {selectedPlayer.village}</p>
            </>
          )}
          <button onClick={handleClose}>close</button>
        </div>
      </section>
    </div>
  );
};

export default ModalPlayer;
