import React from "react";
import Hero from "../../components/Herro/Hero";
import CategoryWarpper from "../../components/CategoryWarpper/CategoryWarpper";

const Home = () => {
  return (
    <div className="home__container mx-auto container">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWarpper />
      </div>
    </div>
  );
};

export default Home;
