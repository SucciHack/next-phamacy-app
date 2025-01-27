'use client'
import { useCartStore } from '@/store/store'
import { products } from '@/types/types'
import React from 'react'

export default function BookBtn({myProduct,rounded}:{myProduct:products, rounded?:string,}) {
  const handleAddToCart = useCartStore((state)=>state.handleAddToCart)
  const cartItem = {
    id: myProduct.id,
    image: myProduct.image,
    title: myProduct.title,
    SalePrice : myProduct.SalePrice,
    RegularPrice:myProduct.RegularPrice,
}
  return (
    <div>
      <button onClick={()=> handleAddToCart(cartItem)} style={{borderRadius:rounded}} className='py-1 px-4 text-sm md:py-3 md:px-8 bg-blue-900 font-bold text-white mt-3'>Add Cart</button>
    </div>
  )
}
