import React from "react";
import ShowPlayers from "./ShowPlayers";

const Player_sample_main = () => {
  // सर्व क्रिकेटर्सची माहिती Array मध्ये store केली आहे
  const players = [
    {
      id: 1,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316507.png",
      caption: "Indian Cricketer",
      player: "Virat Kohli",
      village: "Delhi",
    },
    {
      id: 2,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316508.png",
      caption: "Indian Cricketer",
      player: "Rohit Sharma",
      village: "Mumbai",
    },
    {
      id: 3,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316506.png",
      caption: "Indian Cricketer",
      player: "MS Dhoni",
      village: "Ranchi",
    },
    {
      id: 4,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316509.png",
      caption: "Indian Cricketer",
      player: "Hardik Pandya",
      village: "Surat",
    },
    {
      id: 5,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316510.png",
      caption: "Indian Cricketer",
      player: "KL Rahul",
      village: "Bengaluru",
    },
    {
      id: 6,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316511.png",
      caption: "Indian Cricketer",
      player: "Jasprit Bumrah",
      village: "Ahmedabad",
    },
    {
      id: 7,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316512.png",
      caption: "Indian Cricketer",
      player: "Shubman Gill",
      village: "Fazilka",
    },
    {
      id: 8,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316513.png",
      caption: "Indian Cricketer",
      player: "Ravindra Jadeja",
      village: "Navagam Ghed",
    },
    {
      id: 9,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316514.png",
      caption: "Indian Cricketer",
      player: "Suryakumar Yadav",
      village: "Mumbai",
    },
    {
      id: 10,
      avatar:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/316500/316515.png",
      caption: "Indian Cricketer",
      player: "Rishabh Pant",
      village: "Roorkee",
    },
  ];

  return (
    <div>
      {/* Players चा संपूर्ण data ShowPlayers ला पाठवला */}
      <ShowPlayers players={players} />
    </div>
  );
};

export default Player_sample_main;
