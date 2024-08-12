'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
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
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
    "https://edsico.com.au/assets/Industries/building.jpg",
    "https://edunitas.com/file/UniversitasMercuBuanaKuliahRegulerSoredanMalam.jpg",
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

export default ImageCarousel;
