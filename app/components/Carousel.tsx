// components/Carousel.tsx
import React, { useEffect } from 'react'; // Added useEffect
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

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
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on your design
    slidesToScroll: 1,
    centerPadding: '4',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item relative mx-12 w-full h-48" data-aos="fade-up"> {/* Added AOS attribute */}
            <Image
              src={item.src}
              alt={item.alt}
              layout='fill'
              objectFit='contain'
              className='rounded'
            />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .carousel-container {
          width: 100%;
          max-width: 1200px;
          margin-left: 24px; 
          margin: auto;
        }
        .carousel-item {
          position: relative; /* Ensure Image can fill the div */
          overflow: hidden; /* Optional, to hide any overflow */
        }
      `}</style>
    </div>
  );
};

export default Carousel;
