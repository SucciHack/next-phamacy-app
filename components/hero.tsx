import React from 'react'

export default function Hero() {
  return (
    <div className='h-screen bg-[url(/hero-doctor.jpg)] bg-no-repeat bg-cover text-black overflow-hidden flex justify-start items-center'>
        <div className=" text-white ml-10 w-[50%] space-y-2">
            <h2 className='text-5xl text-blue-900 font-bold'>Healthcare Doesn’t Have To Be Expensive.</h2>
            <p className='text-xl text-black font-semibold'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.</p>
        </div>
    </div>
    
  )
}
