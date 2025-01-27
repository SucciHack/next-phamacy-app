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
            handleAddToCart: (newProduct:cartItem)=> {
                const productExist = get().items.find((product)=> product.id === newProduct.id)
                if(productExist){
                    toast({
                        variant: "destructive",
                        title: "item already exists in cart.",
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
                    description: "👌👌 Product removed from cart",
                  })
            }
        }),
        {
            name: 'cart-storage'
        }
    )
);

