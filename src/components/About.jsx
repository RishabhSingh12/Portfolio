import React from "react";
import profile from "../assets/rishabh.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>
        <div className="sm:text-right pb-8 pl-4 justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
        </div>
        <div className="sm:text-right pb-8 pl-4">
          <img
            src={profile}
            alt="profile pic"
            style={{
              width: "140px",
              // height: "159px",
            }}
          />
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm Rishabh, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Hi, i am Rishabh 👋,a frontend developer, who loves to learn web
              technologies and related topics. I am passionate about building
              good quality solutions to different problems and exploring best
              development practices. I have also completed B.Tech degree in
              Information Technology from Haldia Institute of Technology.That's
              all for my introduction. Do have a look at my projects, i put my
              learnings into!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
