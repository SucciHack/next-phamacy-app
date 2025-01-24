import React from 'react'
import CountdownTimer from './count-down'
import { products } from './productsContainer'
import ProductCard from './productCard'

export default function CampaignContainer() {
  return (
    <div className='flex flex-col md:items-center md:flex-col mt-10 items-center mb-6 lg:flex-row'>
        <div className='px-3 mx-auto md:w-[90%] lg:w-[30%]'>
            <CountdownTimer/>
        </div>
        <div className='w-[100%] md:w-[90%] lg:w-[70%] grid grid-cols-2 px-3 md:flex h-full md:p-6 gap-3'>
            {
                products.slice(0,3).map((product)=> {
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    </div>
  )
}