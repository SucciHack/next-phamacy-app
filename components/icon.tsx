import React from 'react'

export default function Icon({icon}:{icon:React.ReactNode}) {
  return (
    <div className='bg-white text-black w-[25px] h-[25px] flex items-center justify-center rounded-full p-1'>
      {icon}
    </div>
  )
}
