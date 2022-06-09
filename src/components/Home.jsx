import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <p className="text-pink-600">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rishabh Kumar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#939cb8]">
          I am a frontend developer
        </h2>
        <p className="text-[#9ca7c6] py-4 max-w-[700px]">
          I'm a frontend developer passionate and focused about building nice
          frontend web applications. Currently i am focused in building
          responsive frontend web applications using different tools and
          services. I love to learn and explore different ideas!.{" "}
        </p>
        <div>
          <Link to="work" smooth={true} duration={400}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
