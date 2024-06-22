import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="hero__conatainer px-5 xl:px-10 md:w-1/2 mb-10">
      <h1 className="mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342]">
        A Blog templet made for food{" "}
        <span className="text-[red]">influencers</span>
      </h1>
      <p className="text-center font-semibold ">
        "Cooking up <span className="text-[red]">memories</span> , one recipe at
        a <span className="text-[red]">time</span>.."
      </p>
      <form
        action="/search"
        className="bg-white p-4 mt-3 rounded flex items-center justify-between "
      >
        <IoSearchSharp className="w-5 h-5 mr-2 text-neutral-300 cursor-pointer" />
        <input
          type="search"
          name="quary"
          placeholder="Search for recipes"
          className="w-[100%] font-semibold text-[#ee9292] uppercase focus:outline-none"
        />
      </form>
    </div>
  );
};

export default Hero;
