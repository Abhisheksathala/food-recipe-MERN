import React from "react";
import { motion } from "framer-motion";
import bg_image from "./../../assets/about-image.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

const FeaturSection = () => {
  return (
    <section className="overflow-hidden flex justify-center items-center my-4 gap-12 px-5">
      {/* Featured Recipe Card */}
    
      {/* Featured Recipe Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-semibold sm:text-5xl"
          style={{
            background: "-webkit-linear-gradient(45deg, #FFC107, #FF9800)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover Our Featured Section
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-neutral-500 mt-4"
        >
          Explore our handpicked vegetarian recipe that's perfect for any occasion.
        </motion.p>

        {/* View More Recipes Button */}
        <div className="mt-6">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary hover:to-primary-dark"
          >
            Learn More About Us
          </Button>
        </div>
      </motion.div>
      <div className="relative bg-slate-300 rounded-lg shadow-xl overflow-hidden">
        {/* Image with Motion */}
        <motion.img
          src={bg_image}
          alt="Featured Section"
          className="w-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />

        {/* Featured Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-4 left-5 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Featured Section
        </motion.div>

        {/* View Section Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-6 left-5 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark focus:outline-none"
        >
          View Section <IoArrowForwardOutline className="text-xl" />
        </motion.button>
      </div>
    </section>
  );
};

export default FeaturSection;
