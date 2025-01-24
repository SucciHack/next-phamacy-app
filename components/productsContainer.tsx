import React from 'react'
import ProductCard from './productCard'
import Link from 'next/link'


export const products = [
    {
        id:1,
        image:'/sugical-gloves.webp',
        title:'Surgical Gloves',
        SalePrice:3.00,
        RegularPrice:35.00
    },
    {
        id:2,
        image:'/microscope.webp',
        title:'Microscope',
        SalePrice:3.00,
        RegularPrice:35.00
    },
    
    {
        id:3,
        image:'/stethoscope.webp',
        title:'Stethoscope',
        SalePrice:12.00,
        RegularPrice:13.00
    },
    {
        id:4,
        image:'/placebo.webp',
        title:'Placebo',
        SalePrice:8.00,
        RegularPrice:10.00
    },
    {
        id:5,
        image:'/priola.webp',
        title:'Priola',
        SalePrice:5.00,
        RegularPrice:6.00
    },
    {
        id:6,
        image:'/pain-killer.webp',
        title:'Pain Killer',
        SalePrice:2.00,
        RegularPrice:3.00
    },
    {
        id:7,
        image:'/veterinary-drugs.webp',
        title:'Veterinary Drugs',
        SalePrice:6.00,
        RegularPrice:8.00
    },
    {
        id:8,
        image:'/pain-relief-spray.webp',
        title:'Pain Relief Spray',
        SalePrice:19.59,
        RegularPrice:25.00
    },
]
export default function ProductsContainer() {
  return (
    <>
    <h2 className='text-2xl text-center py-3 font-bold text-blue-800'>New Arrival Medicines</h2>
    <div className="flex gap-6 justify-center items-center mb-5 font-semi-bold text-xl">
        <Link className='text-sm' href='#'>VITAMIN TABLETS</Link>
        <Link className='text-sm' href='#'>SYRUP</Link>
        <Link className='text-sm' href='#'>FEVER TABLETS</Link>
        <Link className='text-sm' href='#'>EQUIPEMENTS</Link>
    </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 md:w-[90%] mx-auto p-2 md:p-0'>
            {
                products.map((product,)=>{
                    return <ProductCard key={product.id} product = {product}/>
                })
            }
        </div>   
    </>
  )
}
