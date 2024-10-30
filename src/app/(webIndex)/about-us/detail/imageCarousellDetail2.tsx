'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarouselDetail2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
  };

  const images = [
    "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4268520/pexels-photo-4268520.jpeg",
    "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`Slide ${index}`} 
              className="w-[600px] h-[200px] md:h-[350px] object-cover px-2 md:px-4" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarouselDetail2;
