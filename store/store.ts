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
type cartProductState = {
    items:cartItem[],
    handleAddToCart: (product:cartItem) => void,
    removeCartItem: (id:number) => void
}
export const useCartStore = create<cartProductState>()(
    persist(
        (set,get) => ({
            items:[],
            handleAddToCart: (product:cartItem)=> {
                if(product){
                    toast({
                        description: "❌❌ product already in cart",
                    })
                }else{
                    const products = get().items;
                    set({items: [...products, product]})
                    toast({
                        description: "👌👌Product added to cart",
                    })
                }
            },
            removeCartItem: (id:number)=> {
                const filteredProducts = get().items.filter((product)=> product.id !== id)
                set({items: filteredProducts})
                toast({
                    description: "👌👌 Product removed from cart",
                  })
            }
        }),
        {
            name: 'cart-storage'
        }
    )
);

