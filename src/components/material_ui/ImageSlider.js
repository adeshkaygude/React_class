import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderdata = [
  {
    src: "https://media.istockphoto.com/id/998390080/photo/lavender-field-at-sunset.jpg?s=612x612&w=0&k=20&c=-4KuH9Rho29rxPSJZIZoKNL5XGBp7N_MaXD-aBxW_E8=",
    caption: "Nature Image",
  },
  {
    src: "https://img.magnific.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg?semt=ais_hybrid&w=740&q=80",
    caption: "Waterfall Image",
  },
  {
    src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    caption: "Mountain Image",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8bGB5lohVyn2q4dTkL7WxkmqgSN6HeLz3ojurZdZVA&s",
    caption: "Fourth Image",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ImageSlider = () => {
  return (
    <div style={{ margin: "30px" }}>
      <h2>Image Slider</h2>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {sliderdata.map((item, i) => (
          <div key={i} style={{ padding: "10px" }}>
            <img
              src={item.src}
              alt={item.caption}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{item.caption}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
