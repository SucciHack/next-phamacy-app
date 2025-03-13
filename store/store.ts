import { toast } from '@/hooks/use-toast';
import { create } from 'zustand';
import { persist} from 'zustand/middleware'

export type cartItem = {
    id:number,
    image:string,
    title:string,
    SalePrice:number,
    RegularPrice:number,
}

export type orderItem = {
    id:number
    name:string
    price:string
    Quantity:string
}
type cartProductState = {
    items:cartItem[],
    handleAddToCart: (product:cartItem) => void,
    removeCartItem: (id:number) => void
}
export const useCartStore = create<cartProductState>()(
    persist(
        (set,get) => ({
            items:[],
            handleAddToCart: (newProduct:cartItem)=> {
                const productExist = get().items.find((product)=> product.id === newProduct. id)
                if(productExist){
                    toast({
                        variant: "destructive",
                        title: "❌❌ item already exists in cart.",
                        description: "There was a problem with your request.",
                      })
                }else{
                    const products = get().items;
                    set({items: [...products, newProduct]})
                    toast({
                        description: "👌👌Product added to cart",
                    })
                }
            },
            removeCartItem: (id:number)=> {
                const filteredProducts = get().items.filter((product)=> product.id !== id)
                set({items: filteredProducts})
                toast({
                    description: "✅✅Product removed from cart",
                  })
            }
        }),
        {
            name: 'cart-storage'
        }
    )
);

type OrderState = {
    orders:orderItem[],
    handleAddToCart: (order:orderItem) => void,
    removeCartItem?: (id:number) => void
}

export const useOrderStore = create<OrderState>((set,get)=>({
    orders:[],
    handleAddToCart: (newOrder:orderItem)=> {
        const productExist = get().orders.find((product)=> product.id === newOrder.id)
        if(productExist){
            toast({
                variant: "destructive",
                title: "❌❌ item already exists in cart.",
                description: "There was a problem with your request.",
              })
        }else{
            const products = get().orders;
            set({orders: [...products, newOrder]})
            toast({
                description: "👌👌Product added to store",
            })
        }
    },
    removeCartItem: (id:number)=> {
        const filteredProducts = get().orders.filter((product)=> product.id !== id)
        set({orders: filteredProducts})
        toast({
            description: "✅✅Product removed from order",
          })
    }
}))