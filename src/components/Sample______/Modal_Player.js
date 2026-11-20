import React from "react";

const Modal_Player = ({ selectedPlayer, handleClose }) => {
  return (
    <div>
      {/* पूर्ण Screen वर Background तयार केला */}
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
        {/* Main Modal Box */}
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
          {/* Close Button */}
          <button onClick={handleClose}>X</button>

          {/* Selected Player ची माहिती */}
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
        </div>
      </section>
    </div>
  );
};

export default Modal_Player;
