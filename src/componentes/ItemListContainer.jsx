import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from 'react'
import {Center} from '@chakra-ui/react'
import Navbar from './Navbar'




const ItemListContainer = () => {

  const productos= [
    {id: "1", name:"producto A", description:"Descripcion A", stock:10, price:1000, category: "A"},
    {id: "2", name:"producto AA", description:"Descripcion AA", stock:10, price:1500, category: "A"},
    {id: "3", name:"producto B", description:"Descripcion B", stock:15, price:2000, category: "B"},
    {id: "4", name:"producto BB", description:"Descripcion BB", stock:20, price:2500, category: "B"},
    {id: "5", name:"producto C", description:"Descripcion C", stock:25, price:3000, category: "C"},
    {id: "6", name:"producto CC", description:"Descripcion CC", stock:30, price:3500, category: "C"}
  ]
  const mostrarProductos= new Promise ((resolve, reject)=>{
    if (productos.length >0){
      setTimeout(()=>{
        resolve(productos)
      },3000)
    }else{
      reject("no se encontraron productos")
    }
  })
  
  mostrarProductos
  .then((resultado)=>{
   
  })
  .catch((error)=>{

  })


  
 
 /*const getProducts = async ()=>{
   const response = await fetch ("https://fakestoreapi.com/products")
   const data = await response.json()

    return data
}



 const [product, setProduct]= useState([])
 
 console.log(product);

 useEffect((p)=>{
  getProducts().then((p) => setProduct(p))
 }
 */

  return (
    <>
    <Center p="1rem">
      <ItemList productos={productos}/> 
    </Center>
    
    
    </>
  )
}
export default ItemListContainer