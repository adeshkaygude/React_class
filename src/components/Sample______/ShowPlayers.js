import React, { useContext, useState } from "react";
import { PlayersContext } from "./PlayersContext";

import Playerdialog from "./Playerdialog";

const ShowPlayers = () => {
  const players = useContext(PlayersContext);

  const [open, setOpen] = useState(null);

  const handlbutton = (id) => {
    setOpen(id);
  };
  const selectedPlayer = players.find((item) => item?.id === open);
  console.log(selectedPlayer);

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {players.map((item) => (
        <div
          key={item?.id}
          style={{
            padding: 10,
            margin: 10,
            backgroundColor: item?.id % 2 === 0 ? "yellow" : "pink",
          }}
        >
          <img src={item?.avatar} alt={item?.player} width={150} />
          <h2>{item?.caption}</h2>
          <p>{item?.player}</p>
          <p>vilage : {item?.village}</p>

          <button onClick={() => handlbutton(item.id)}> open Dialog</button>
        </div>
      ))}

      <PlayersContext value={{ handleClose, selectedPlayer }}>
        <Playerdialog />
      </PlayersContext>
    </div>
  );
};

export default ShowPlayers;
