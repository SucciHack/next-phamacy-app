"use client"

import { useState } from "react"
import { Search, Plus, Minus, ShoppingCart, User, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useCategories } from "@/hooks/useCategory"
import { Medication } from "@prisma/client"
import { newCategory } from "@/types/types"


type OrderItem = {
  id: number
  medication: Medication
  quantity: number
}

export default function PharmacyPOS() {
  const [searchQuery, setSearchQuery] = useState("")
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [discount, setDiscount] = useState("0")
  const {categories} = useCategories()
  const [activeCategory, setActiveCategory] = useState<newCategory | null>(categories[0])
  console.log(activeCategory)


  // const addToOrder = (filteredMedications:newCategory) => {
  //   const existingItem = orderItems.find((item) => item.medication.id === filteredMedications.id)

  //   if (existingItem) {
  //     setOrderItems(
  //       orderItems.map((item) =>
  //         item.medication.id === filteredMedications.id ? { ...item, quantity: item.quantity + 1 } : item,
  //       ),
  //     )
  //   } else {
  //     // setOrderItems([...orderItems, { id: Date.now(), medication, quantity: 1 }])
  //   }
  // }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setOrderItems(orderItems.filter((item) => item.id !== id))
    } else {
      setOrderItems(orderItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setOrderItems(orderItems.filter((item) => item.id !== id))
  }

  const subtotal = orderItems.reduce((sum, item) => sum + item.medication.price * item.quantity, 0)
  const discountAmount = Number.parseFloat(discount) || 0
  const tax = subtotal * 0.08
  const total = subtotal + tax - discountAmount

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Left side - Medication catalog */}
      <div className="w-full md:w-2/3 p-4 overflow-auto">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search medications..."
              className="pl-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {/* <Button variant={activeCategory?.id === category.id ? "default" : "ghost"}>All</Button> */}
          { categories.map((category)=> {
            return <Button variant={activeCategory?.id === category.id ? "default" : "ghost"}  className="ml-2 mb-2" onClick={()=> setActiveCategory(category)} key={category.id} value={category.name}>
              {category.name}
          </Button>
          })
        }
        {
          activeCategory && activeCategory.medications && <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {activeCategory.medications.map((medication) => (
            <Card
              key={medication.id}
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              // onClick={() => addToOrder(medication)}
            >
              <div className="aspect-square relative">
                <Image
                  src={medication.image || "/placeholder.svg"}
                  alt={medication.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-3">
                <h3 className="font-medium text-sm">{medication.name}</h3>
                <p className="text-sm text-gray-500 mt-1">${medication.price}</p>
              </CardContent>
            </Card>
          ))}
    </div>
        }
      </div>

      {/* Right side - Order panel */}
      <div className="w-full md:w-1/3 bg-white border-l border-gray-200 flex flex-col h-full">
        <div className="p-4 border-b border-gray-200 flex items-center">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            <span>Add Customer</span>
          </Button>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Plus size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Calendar size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Search size={16} />
          </Button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {orderItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingCart size={48} strokeWidth={1} />
              <p className="mt-2">No items in order</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div key={item.id} className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <div className="font-medium text-gray-700 min-w-[20px]">{index + 1}</div>
                  <div className="flex-1">
                    <div className="font-medium">{item.medication.name}</div>
                    <div className="text-sm text-gray-500 mt-1">Unit Price: ${item.medication.price.toFixed(2)}</div>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-md"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={12} />
                      </Button>
                      <div className="w-8 text-center font-medium">{item.quantity}</div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-md"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={12} />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${(item.medication.price * item.quantity).toFixed(2)}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-400 hover:text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                </div>
              ))}

              {orderItems.length > 0 && (
                <div className="flex items-center gap-2 mt-4 border-t pt-4">
                  <div className="text-sm font-medium">Discount($)</div>
                  <Input
                    type="number"
                    className="w-24 h-8"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium text-lg">
              <span>Payable Amount</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              Hold Order
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700">Pay Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

