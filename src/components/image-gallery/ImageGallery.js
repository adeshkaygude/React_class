import React from "react";

const Image = ({ src, caption }) => {
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

const ImageGallery = () => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
      }}
    >
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXIcSJC5xOjSKsVpGTTjyRUhqu8tJ5HpN5qxSY8bZcRrE4Ocfvig-iKU&s=10"
        caption="White Flower"
      />

      <Image
        src="https://static.vecteezy.com/system/resources/thumbnails/049/139/790/small/vibrant-rainbow-garden-with-multicolored-daisies-for-floral-prints-and-posters-photo.jpg"
        caption="Colorful Flowers"
      />

      <Image
        src="https://t4.ftcdn.net/jpg/04/20/62/67/360_F_420626747_Bqp7FOBWwerrHzlOefkjerIgvGAOJU8L.jpg"
        caption="Garden Flowers"
      />

      <Image
        src="https://media.istockphoto.com/id/1396879850/photo/bright-colorful-image-of-a-flying-butterfly-over-lantana-flowers.jpg?s=612x612&w=0&k=20&c=-cTdvg13MpcxuzndFAofugx9sWDq3_S5PkwB-3rj3PA="
        caption="Butterfly Flowers"
      />
    </section>
  );
};

export default ImageGallery;
