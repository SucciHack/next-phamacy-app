import { ChevronDown, CircleUser, Pill, Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NavigationBar() {
  return (
    <div className='py-4 bg-white flex justify-between px-3'>
      {/* Links  */}
      <div className="flex gap-8 justify-center items-center">
        <Link href='#' >Home</Link>
        <Link className='flex gap-2 justify-center items-center' href='#' >Shop <ChevronDown size={15}/></Link>
        <Link href='#' >About</Link>
        <Link className='flex gap-2 justify-center items-center' href='#' >Page <ChevronDown size={15}/></Link>
        <Link href='#' >Contact</Link>
      </div>
      {/* Logo  */}
      <div>
        <p className='text-4xl flex gap-2 font-bold'><Pill size={40} className='text-blue-800'/>Phamacy</p>
      </div>
      {/* search & cart  */}
      <div className='flex gap-3 items-center'>
        <div className="flex border-[1px] rounded-full items-center p-2 border-gray-600">
            <input type="text" placeholder='Enter search...'/>
            <Search size={15}/>
        </div>
        <ShoppingBag size={18}/>
        <CircleUser size={18}/>
      </div>
    </div>
  )
}
