import React from 'react'
import BookBtn from './bookBtn'
import Image from 'next/image'

export default function FollowerSection() {
  return (
    <div>
      <div className=' text-black min-h-[400px] flex flex-col md:items-center md:flex-row mt-10 items-center mb-6'>
          <div className="flex justify-between p-3 w-[100%] md:w-1/2">
            <div className="space-y-2">
              <h2 className='text-2xl md:text-4xl font-bold text-blue-700'>Excellent Medical Professionals With Significant Experience</h2>
              <p className='text-sm md:text-lg'>Tristique senectus et netus et malesuada fames ac turpis. Turpis massa tincidunt dui ut ornare lectus sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet proin fermentum leo vel orci porta non pulvinar.</p>
              <BookBtn title = 'Book Now'/>
            </div>
          </div>
          <div className='w-[90%] md:w-1/2'>
                <Image src='/doctor.jpg' alt='' width={6000} height={4000} className='h-[400px] object-cover'/>
            </div>
          </div>
    </div>
  )
}
