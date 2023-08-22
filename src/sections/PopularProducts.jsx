import React, { useEffect, useState } from "react";
import { products } from "../constants";
import { PopularProductCard } from "../components";
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";

const PopularProducts = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (imageURL) => {
    setFullscreenImage(imageURL);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".product-card", {
      delay: 0,
      origin: "bottom",
      distance: "20px",
      easing: "ease",
      scale: 1,
      duration: 200,
      reset: true,
      viewFactor: 0.2,
    });

    // Reveal the text with a stagger
    ScrollReveal().reveal(".text-reveal", {
      delay: 400,
      origin: "bottom",
      distance: "20px",
      easing: "ease-in-out",
      scale: 1,
      duration: 600,
      reset: true,
      viewFactor: 0.2,
      interval: 150,
    });
  }, []);



  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-reveal">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-reveal">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 cursor-pointer md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product, index) => (
          <motion.div 
            key={product.name}
            className="product-card"
            data-scroll-reveal={`enter left and move ${index % 2 === 0 ? "up" : "down"}`}
            whileHover={{ scale: 1.05 }}
          >
            <PopularProductCard {...product} />
          </motion.div >
        ))}
      </div>

      {/* Render the fullscreen image */}
      {fullscreenImage && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            <img src={fullscreenImage} alt="Fullscreen" />
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white text-xl cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularProducts;
