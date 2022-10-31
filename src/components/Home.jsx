import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="bg-[#1d1e22] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#d4d4dc]">Hi! I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#d4d4dc]"><span className="text-[#D4AF37]">Ritwick</span> Sinha</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#d4d4dc]">a Full Stack Developer</h2>
        <p className="text-[#d4d4dc] py-4 max-w-[700px]">
          I specialize in building minimalistic and elegant digital experiences. Currently,
          I'm focused on building responsive full-stack web applications
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 flex px-6 py-3 my-2 items-center hover:bg-[#D4AF37] hover:border-[#D4AF37] duration-300">View Work
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3"/>
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
