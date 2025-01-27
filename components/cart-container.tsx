'use client'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from "lucide-react"
import { CartCard } from "./cart-card"
import { useCartStore } from "@/store/store"

export function CartContainer() {
    const {items} = useCartStore()
    const totalPrices = items.map((item)=> item.SalePrice)
    const total = totalPrices.reduce((acc, curr)=> acc + curr, 0)
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {
        items && items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">MY BAG</h1>
              <p className="text-sm text-gray-500">Items are reserved for 60 minutes</p>
            </div>

            <div className="divide-y">
              {
                items.map((item)=> {
                  return <CartCard key={item.id} item = {item}/>
                })
              }
            </div>

            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <span className="font-semibold">SUB-TOTAL</span>
              <span className="font-semibold">£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">£{total.toFixed(2)}</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Sub-total</span>
                <span>£{total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span>Delivery</span>
                <Info size={16} className="text-gray-400" />
              </div>

              <Select defaultValue="standard">
                <SelectTrigger className="bg-gray-100 border border-gray-300">
                  <SelectValue placeholder="Select delivery method" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="standard">Standard Delivery (Free)</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">CHECKOUT</Button>

              <div className="space-y-2">
                <p className="font-semibold">WE ACCEPT:</p>
                <div className="flex gap-2">
                  {["visa", "mastercard", "paypal", "amex", "visa", "maestro", "klarna", "affirm"].map(
                    (provider, i) => (
                      <div key={i} className="w-12 h-8 bg-gray-100 rounded" />
                    ),
                  )}
                </div>
              </div>

              <p className="text-sm">Got a discount code? Add it in the next step.</p>
            </div>
          </div>
        </div>
      </div>
        ) : (
          <div className="flex justify-center items-center h-[300px]">
            <p className="text-lg text-gray-500">Your cart is empty</p>
          </div>
        )
      }
    </div>
  )
}

