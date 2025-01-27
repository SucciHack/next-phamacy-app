import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cartItem, useCartStore } from "@/store/store"
import { X } from "lucide-react"
import Image from "next/image"

export function CartCard({item}:{item:cartItem}) {
  const { removeCartItem } = useCartStore()


  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="relative w-36 h-36 bg-gray-100">
        <Image src={item.image} alt="Product image"
        width={144} height={144}
        className="object-cover" />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">£{item.SalePrice.toFixed(2)}</span>
            </div>
            <h3 className="text-sm">adidas Originals t-shirt with shattered logo in black</h3>
            <p className="text-sm text-gray-500">Bk1 - black 1</p>
          </div>
          <button onClick={()=> removeCartItem(item.id)} className="text-red-600/70 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="flex gap-4 mt-2">
          <Select defaultValue="M">
            <SelectTrigger className="w-20 bg-gray-100 border border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="XS">XS</SelectItem>
              <SelectItem value="S">S</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="XL">XL</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="1">
            <SelectTrigger className="w-20 bg-gray-100 border border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <button className="text-sm text-gray-600 hover:text-gray-800 mt-2">Save for later</button>
      </div>
    </div>
  )
}

