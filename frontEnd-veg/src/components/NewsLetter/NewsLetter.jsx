import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button, TextField } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewsLetter = () => {
  const controls = useAnimation();

  useEffect(() => {
    gsap.fromTo(
      ".newsletter-title",
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".newsletter-title",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".newsletter-input",
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".newsletter-input",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".newsletter-button",
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".newsletter-button",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.4,
      }
    );
  }, []);

  // Animate the container on scroll
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Animate the button on hover
  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="w-full flex flex-col mx-auto items-center mt-10 justify-center p-10 bg-gray-100 shadow-lg rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-secondary text-3xl font-semibold newsletter-title opacity-0 translate-y-10">
        Sign up for my weekly{" "}
        <span className="text-red-500 capitalize">Newsletter!</span>
      </h3>
      <p className="text-lg mt-2 mb-4 newsletter-text">
        Stay updated with the latest news and trends.
      </p>
      <div className="flex items-center gap-2 mb-10">
        <TextField
          label="Your Email"
          variant="outlined"
          className="newsletter-input w-1/2 mb-4"
          fullWidth
        />
        <TextField
          label="Your name"
          variant="outlined"
          className="newsletter-input w-1/2 mb-4"
          fullWidth
        />
      </div>
      <motion.div variants={buttonVariants}>
        <Button
          variant="contained"
          color="primary"
          className="newsletter-button h-10"
        >
          Subscribe
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default NewsLetter;
