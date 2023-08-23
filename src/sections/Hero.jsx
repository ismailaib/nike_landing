import { useState } from "react";
import { motion } from "framer-motion";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeOut = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  // Animation variant for the big shoe image change
  const changeBigShoeImageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };


  return (
    <motion.section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
        
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">NIKE</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish artworks feature, in our newest arrivals.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <motion.img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
          variants={changeBigShoeImageAnimation} // Apply the animation variant
          initial="hidden"
          animate="visible"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <motion.div
                // Wrap the ShoeCard with motion
                whileHover={{ scale: 1.05 }} // Add a hover animation
                onClick={() => handleShoeClick(image)} // Handle the click event
              >
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
