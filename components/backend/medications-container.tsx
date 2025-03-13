'use client'
import { useMedications } from '@/hooks/useCategory'
import React from 'react'
import ProductCard from './product-card'

export default function MedicationContainer() {
    const {medications} = useMedications()
  return (
    <div className='grid grid-cols-8 gap-3 px-3'>
      {
        medications.map((product)=>{
            return <ProductCard key={product.id} product={product}/>
        })
      }
    </div>
  )
}
