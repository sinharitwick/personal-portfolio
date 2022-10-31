import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#1d1e22] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/69dcf74b-0247-4ce7-abde-7f29d449f3b8" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#D4AF37] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me an email at <span className='font-bold'>sritwick10@gmail.com</span></p>
            </div>
            <input className='p-2 bg-[#d4d4dc]' type="text" placeholder='Enter your name' name="name" />
            <input className='my-4 p-2 bg-[#d4d4dc]' type="email" placeholder='Enter your email' name="email" />
            <textarea className='p-2 bg-[#d4d4dc]' name="message" rows="10" placeholder='Write your message'></textarea>
            <button className="text-white border-2 flex px-4 py-3 my-4 mx-auto items-center hover:bg-[#D4AF37] hover:border-[#D4AF37] duration-300">Submit</button>
        </form>
    </div>
  )
}

export default Contact