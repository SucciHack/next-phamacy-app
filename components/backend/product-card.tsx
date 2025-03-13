import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Medication } from '@prisma/client'

export default function ProductCard({product}:{product:Medication}) {
  return (
    <div className='mt-5'>
      <Card
        className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
    <div className="aspect-square relative">
    <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
        />
        </div>
        <CardContent className="p-3">
        <h3 className="font-medium text-sm">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)}</p>
        </CardContent>
    </Card>
    </div>
  )
}
