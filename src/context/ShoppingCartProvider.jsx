import { createContext, useState } from "react";


export const CartContext = createContext(1)

export const ShoppingCartProvider = ({
    children}) => {

        const [cart, setCart] = useState([])

        const comision = 60815 

return(

    <CartContext.Provider value={{cart, setCart, comision}}>
       {children}
    </CartContext.Provider> 


  )


}

export default ShoppingCartProvider