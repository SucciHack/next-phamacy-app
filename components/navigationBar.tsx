'use client'
import { useCartStore } from '@/store/store'
import { ChevronDown, CircleUser, Pill, Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NavigationBar() {
  const {items} = useCartStore()
  return (
    <div className='py-4 bg-white text-black flex justify-between sticky top-0 z-50 shadow-lg px-3 items-center'>
      {/* Links  */}
      <div className="gap-8 justify-center items-center hidden md:flex lg:flex">
        <Link href='/' >Home</Link>
        <Link className='flex gap-2 justify-center items-center' href='#' >Shop <ChevronDown size={15}/></Link>
        <Link href='#' >About</Link>
        <Link className='flex gap-2 justify-center items-center' href='#' >Page <ChevronDown size={15}/></Link>
        <Link href='#' >Contact</Link>
      </div>
      {/* Logo  */}
      <div>
        <p className='flex items-center text-lg md:text-4xl gap-2 font-bold'><Pill className='text-blue-800 text-5xl'/>Phamacy</p>
      </div>
      {/* search & cart  */}
      <div className='flex gap-3 items-center'>
        <div className="flex border-[1px] rounded-full items-center p-1 md:p-2 border-gray-600">
            <input type="text" placeholder='Enter search...' className='bg-transparent hidden md:hidden lg:block'/>
            <Search className='text-sm md:text-lg lg:text-2xl'/>
        </div>
        <div className='relative flex gap-2'>
          <Link href='/cart'>
              <ShoppingBag className='text-black text-sm md:text-2xl'/>
          </Link>
          <div className='bg-black text-white w-[20px] h-[20px] absolute top-0 right-0 text-sm flex justify-center items-center rounded-full translate-x-2 translate-y-[-5px] font-bold'>{items.length}</div>
        </div>
        <Link href='/login'>
          <CircleUser className='text-sm md:text-2xl'/>
        </Link>
      </div>
    </div>
  )
}
