import React from 'react'
import SendOrders from './SendOrders'
import { useContext } from 'react'
import { CartContext} from "../context/ShoppingCartProvider"




const Cart = () => {

const {cart, setCart, comision}=useContext
(CartContext)

  return (
    <>
    
    
    
     <SendOrders></SendOrders>
    </>
  )
}

export default Cart