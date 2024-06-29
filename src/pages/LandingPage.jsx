import React from 'react'

function LandingPage() {
  return (
    <>
      <div className=' px-4 md:px-20 bg-gray-100 pb-20 overflow-y-hidden'>
      <div className='bg-gray-400 top-[350px] lg:bottom-3 md:top-[600px] lg:top-auto  z-50 absolute  text-xl rounded-r-2xl  font-semibold'>
            <div className='bg-red-800 text-white px-6 py-1  text-center rounded-r-2xl relative -top-1'>
                 <h1 className=' text-sm md:text-lg -mb-2 font-semibold'>Talk To Our Experts</h1>
                 <p className='font-extrabold text-lg md:text-2xl'>8010-263-263</p>
            </div>
        </div> 
        <div className='absolute top-[400px] md:w-[650px] md:top-[650px] lg:bottom-12 lg:top-auto z-50 lg:right-[400px]'>
            <h1 className='text-red-800 font-semibold text-sm text-center'>About Engmates<sup>TM</sup></h1>
            <p className='bg-red-800 text-white text-xs px-6 py-1 rounded-3xl'>
            ENgmates<sup>TM</sup> provides high-quality English courses at extremely affordable and reasonable fees compared to other institutions. Unlike others, we offer comprehensive content that exceeds expectations without straining your budget. Choose ENgmates<sup>TM</sup> for great returns on a low investment.
            </p>
        </div> 
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        
        <div className='flex flex-col justify-around mb-20 '>
            <img src='logo.png' className='w-[150px] mt-10'></img>
            <img src='contact_img.png' className='lg:-translate-x-40 lg:translate-y-12 w-[600px]'></img>
        </div>
        <div className=' w-full lg:w-[25%] lg:-translate-y-32 md:px-20 lg:px-0'>
            <h1 className='font-bold text-red-800 text-xl px-10 text-center mb-4 kanit-black uppercase'>English Speaking Course In Tilak Nagar</h1>
            <div className='border  py-2  border-white shadow-2xl bg-gray-100 mb-5'>
                <h1 className='text-center font-bold text-red-800 text-lg mb-4 kanit-black'>Get Free Consultation</h1>
                <form className='w-full flex flex-col'>
                <input className='text-white placeholder-white  placeholder:text-xs mx-7 bg-red-800 mb-3 px-2 py-1' placeholder='Enter Your Name'></input>
                <input className='text-white placeholder-white placeholder:text-xs mx-7 bg-red-800 mb-3 px-2 py-1' placeholder='Enter Your Phone No.'></input>
                <input className='text-white placeholder-white placeholder:text-xs mx-7 bg-red-800 mb-4 px-2 py-1' placeholder='Your Message'></input>
                <button className='bg-transparent border-t-2 w-full pt-2 text-lg font-bold text-red-800'>Submit</button>
                </form>
            </div>
            <ul className='list-disc px-6 mb-4'>
                <li className=' font-semibold text-sm'>Interactive Learning Methods</li>
                <li className=' font-semibold text-sm'>Experienced Training</li>
                <li className=' font-semibold text-sm'>Personlized Feedbacks</li>
                <li className=' font-semibold text-sm'>Advanced Learning Modules</li>

            </ul>
            <hr className='border-t-4 border-dotted border-black mb-1'/>
            <h1 className='text-xl text-red-800 font-bold text-center px-16 mb-2 kanit-black'>Join The Best English Speaking Institute In Tilak Nagar</h1>
            <hr className='border-t-4 border-dotted border-black mb-1'/>
            <h1 className='font-bold text-red-800 text-center text-lg'>Holistic Development</h1>
            <p className="text-xl font-bold text-center">BETTER ENGLISH | BETTER YOU</p>

        </div>
        
      </div>
      </div>
    </>
  )
}

export default LandingPage
