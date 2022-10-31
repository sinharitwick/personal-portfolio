import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1d1e22] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#D4AF37]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ritwick. Nice to meet you! Please take a look around</p>
          </div>
          <div>
            <p>
              I'm an Engineering Undergraduate dedicated to improving skills
              through hands-on learning and development work. I'm adept at using
              the MERN stack and other programming languages to produce clean
              code. Other than being well-organized, I'm also a collaborative
              team player with strong communication and analytical abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
