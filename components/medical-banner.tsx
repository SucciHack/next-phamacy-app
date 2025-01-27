import React from 'react'
import Image from 'next/image'
import BookButton from './bookButton'

export default function MedicalBanner() {
  return (
    <div className=' text-white h-[400px] w-full flex flex-col justify-center bg-no-repeat object-cover relative'>
      <Image src='/phamacy-banner.jpg' alt='' width={6067} height={3467} className='object-cover h-[400px]'/>
    <div className="flex justify-between p-3 absolute top-50 left-10">
      <div className="space-y-2 w-full md:w-full">
        <h2 className='text-4xl font-bold'>Week End Sale!</h2>
        <p className='text-2xl'>Buy Your Best Healthcare Equipment & Medicines</p>
        <p className='text-sm md:text-lg'>Ornare arcu lacusac tellus faucibus accumsan. Duisaliquet veldiam sedpretium. Duis sodales maximus risusquis mollis</p>
        <BookButton />
      </div>
    </div>
    </div>
  )
}
