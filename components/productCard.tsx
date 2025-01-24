import Image from "next/image"
import { Star } from "lucide-react"
import BookBtn from "./bookBtn"

export type product = {
    id:number
    image:string
    title:string
    SalePrice:number
    RegularPrice:number
}
export default function ProductCard({product,rounded,}:{product:product,rounded?:string}) {
  return (
    <div className="relative bg-gray-200 shadow-lg rounded-md overflow-hidden w-[100%] mx-auto mb-6">
      <div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt="Professional microscope"
            fill
            className="object-cover w-full "
            // sizes="(max-width: 768px) 100vw, 300px"
          />
          <div className="left-4 top-4 z-10">
            <span className="rounded-full bg-transparent border-[1px] border-red-500 text-red-500 px-3 py-1 text-xs font-medium absolute top-2 left-2">-14%</span>
          </div>
          <div className="bg-gradient-to-t from-indigo-500 to-transparent opacity-50 absolute bottom-0 w-full h-[120px]"></div>
        </div>
        <div className="space-y-2 p-2 px-8 pb-6">
          <h3 className="text-lg font-medium">{product.title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">${product.SalePrice.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground line-through">${product.RegularPrice.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="h-4 w-4 fill-muted text-muted-foreground" />
            <span className="ml-2 text-sm text-muted-foreground">1 review</span>
          </div>
          <BookBtn rounded ={rounded} title="ADD CART"/>
        </div>
      </div>
    </div>
  )
}


