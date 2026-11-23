import React, { useState } from "react";
import Playerdialog from "./Playerdialog";

const ShowPlayers = ({ players }) => {
  // सुरुवातीला कोणताही Player Select केलेला नाही
  const [open, setopen] = useState(null);

  // open मध्ये असलेल्या ID चा Player शोधणे
  const selectedPlayer = players.find((item) => item.id === open);

  // Button वर क्लिक केल्यावर Player ची ID Store होईल
  const handlebutton = (id) => {
    setopen(id);
  };

  // Dialog Close करण्यासाठी State null करणे
  const handleClose = () => {
    setopen(null);
  };

  return (
    <div>
      <h2>Players List</h2>

      {/* सर्व Players दाखवण्यासाठी map वापरला */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {players.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: item.id % 2 === 0 ? "yellow" : "orange",
              margin: 5,
              padding: 10,
              width: 150,
            }}
          >
            {/* Player Image */}
            <img src={item.avatar} alt={item.player} width="100" />

            <h3>{item.caption}</h3>

            <p>Player: {item.player}</p>

            <p>Village: {item.village}</p>

            {/* Click केल्यावर त्या Player ची ID पाठवली जाते */}
            <button onClick={() => handlebutton(item.id)}>Open Dialog</button>
          </div>
        ))}
      </div>

      {/* Selected Player आणि Close Function Dialog ला पाठवले */}
      <Playerdialog selectedPlayer={selectedPlayer} handleClose={handleClose} />
    </div>
  );
};

export default ShowPlayers;
