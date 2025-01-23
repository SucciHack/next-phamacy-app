import Icon from '@/components/icon'
import { Facebook, Instagram, Mail, MapPin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
        <div className='flex justify-between bg-blue-800 py-4 px-2'>
            <div className="icons flex text-white gap-3">
                <Icon icon = {<Twitter size={20}/>}/>
                <Icon icon = {<Facebook size={20}/>}/>
                <Icon icon = {<Instagram size={20}/>}/>
                <Icon icon = {<Youtube size={20}/>}/>
            </div>
            <div className='flex gap-6 text-white'>
                <p className='flex gap-2'><MapPin size={20}/>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                <p className='flex gap-2'><Mail size={20}/>info@example.com</p>
            </div>
        </div>
  )
}
