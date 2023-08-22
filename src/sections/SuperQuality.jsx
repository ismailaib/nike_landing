import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Button } from "../components";
import { shoe8 } from "../assets/images";




const SuperQuality = () => {

  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Apply animations to elements
    sr.reveal(".info-text", {
      delay: 200,
      origin: "bottom",
      distance: "20px",
      easing: "ease-in",
      scale: 1,
      duration: 600,
      reset: true,
      viewFactor: 0.2,
    });
    sr.reveal(".title", {
      delay: 200,
      origin: "right",
      distance: "20px",
      easing: "ease-in",
      scale: 1,
      duration: 600,
      reset: true,
      viewFactor: 1,
    });
    sr.reveal(".image-animation", {
      delay: 200,
      origin: "right",
      distance: "5px",
      easing: "ease",
      scale: 1,
      duration: 600,
      reset: false,
      viewFactor: 1,
    });
  }, []);
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold title'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain image-animation'
        />
      </div>
    </section>
  );
};

export default SuperQuality;