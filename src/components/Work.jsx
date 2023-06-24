import React from 'react'
import Innter from '../assets/innter.png'
import Farmstack from '../assets/farmstack.png'

function Work() {
  return (
    <div name="work" className='w-full md:h-screen bg-[#1d1e22] text-gray-300'>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-[#D4AF37]">Work</p>
                <p className='py-6'>// Check out my recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Innter})`}}
                className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Restaurant Review Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://cute-puce-snail-slip.cyclic.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sinharitwick/Innter" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Farmstack})`}}
                className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Agritech Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://farmstack-abhi78nath.vercel.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sinharitwick/GFG-Lofi_Devs" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work