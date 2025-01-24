import React from 'react'

export default function BookBtn({title,rounded}:{title:string, rounded?:string}) {
  return (
    <div>
      <button style={{borderRadius:rounded}} className='py-1 px-4 text-sm md:py-3 md:px-8 bg-blue-900 font-bold text-white mt-3'>{title}</button>
    </div>
  )
}
