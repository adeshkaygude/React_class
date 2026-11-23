import React, { useState } from "react";
import Playerdialog from "./Playerdialog";

const ShowPlayers = ({ players }) => {
  const [open, setopen] = useState(null);
  const selectedPlayer = players.find((item) => item.id === open);
  const handlebutton = (id) => {
    setopen(id);
  };
  const handleClose = () => {
    setopen(null);
  };
  return (
    <div>
      <h2>players list</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {players.map((item) => (
          <div
            key={item?.id}
            style={{
              width: 150,
              padding: 10,
              margin: 10,
              backgroundColor: item % 2 === 0 ? "yellow" : "pink",
            }}
          >
            <img src={item.avatar} alt={item?.player} width="100" />
            <h3>{item?.caption}</h3>
            <p>player : {item?.player}</p>
            <p>Village : {item?.village}</p>
            <button onClick={() => handlebutton(item.id)}>open dialog</button>
          </div>
        ))}
      </div>
      <Playerdialog selectedPlayer={selectedPlayer} handleClose={handleClose} />
    </div>
  );
};

export default ShowPlayers;
