import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselData } from './CarouselData';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousell = () => {
  return (
    <>
      <div className='mb-5'>
        <Carousel variant="dark">
          {CarouselData.map((carousel) => (
            <Carousel.Item key={carousel.id}>
              <img
                className="d-block w-100"
                src={carousel.carousel_url}
                alt={`Slide ${carousel.id}`}
              />
              <Carousel.Caption>
                {/* You can add caption content here if needed */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carousell;
