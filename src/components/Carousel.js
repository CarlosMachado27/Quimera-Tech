import React, {useState} from "react";
import { DataSlide } from "./DataSlide";
import {FaArrowLeft,FaArrowRight} from "react-icons/fa";
import './Carousel.css';


const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 )
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1 )
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='slider'>
      <FaArrowLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowRight className='right-arrow' onClick={nextSlide} />
      {DataSlide.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  )
}

export default Carousel
