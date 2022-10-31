import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Reactico from "../assets/react.png";
import Git from "../assets/git.png";
function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#1d1e22] text-gray-300'>
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#D4AF37]">Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JS} alt="JS icon" />
            <p>JavaScript</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node icon" />
            <p>Node JS</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
            <p>MongoDB</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Reactico} alt="React icon" />
            <p>React JS</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt="Git icon" />
            <p>git</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="TailWind icon" />
            <p>TailWind CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills