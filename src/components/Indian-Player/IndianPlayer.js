import React from "react";

const Player = ({ src, caption }) => {
  return (
    <div
      style={{
        border: "1px solid #0009",
        height: 300,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={src}
        alt={caption}
      />

      <p
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          margin: 0,
          fontSize: "2em",
          background: "#fff4",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {caption}
      </p>
    </div>
  );
};

const IndianPlayer = () => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
      }}
    >
      <Player
        src="https://i.pinimg.com/564x/f9/17/6b/f9176b60888f3a0572afb842e6724de4.jpg"
        caption="Rohit Sharma"
      />

      <Player
        src="https://i.pinimg.com/474x/0e/d5/8c/0ed58cccd51c4758e634d0b29e8cb0c2.jpg"
        caption="Virat Kohli"
      />

      <Player
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jIqjEnsNWNCEnMvPFBVSQstVp2nM9A7AADETA6BCcA&s"
        caption="Yuvraj Singh"
      />

      <Player
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVvWGcl2o__TbanZ-zTCVM3IFT03-7Pz4Mc_-PR5rWB8Y_LG0t3O_rg7m&s=10"
        caption="Ajinkya Rahane"
      />
    </section>
  );
};

export default IndianPlayer;
