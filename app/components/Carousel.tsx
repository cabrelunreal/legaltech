// components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the interface for the carousel item
interface CarouselItem {
  src: string;
  alt: string;
}

// Define the props for the Carousel component
interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <Image
              src={item.src}
              alt={item.alt}
              width={120}
              height={100}
              layout="flex justify-center items-center"
            />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .carousel-container {
          justify-items: center;
          align-items: center;
          width: 100%;
          margin: auto;
        }
        .carousel-item {
          padding: 0 10px;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
