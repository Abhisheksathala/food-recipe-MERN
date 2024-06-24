import React from "react";
import Hero from "../../components/Herro/Hero";
import CategoryWarpper from "../../components/CategoryWarpper/CategoryWarpper";
import FeaturSection from "../../components/featurSection/FeaturSection";
import LatestRespices from "../../components/LatestRecipes/LatestRespices";
import NewsLetter from "./../../components/NewsLetter/NewsLetter";
import AboutSection from "../../components/About/AboutSection";
import LogoSection from './../../components/LogoSection/LogoSection';

const Home = () => {
  return (
    <div className="home__container mx-auto container">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWarpper />
      </div>
      {/* <fatureSection /> */}
      <FeaturSection />
      <LatestRespices />
      <NewsLetter />
      <AboutSection />
      <LogoSection />
    </div>
  );
};

export default Home;
