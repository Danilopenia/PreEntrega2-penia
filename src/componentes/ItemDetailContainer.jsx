import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const productos= [
        {id: "1", name:"producto A", description:"Descripcion a", stock:10, price:1000},
        {id: "2", name:"producto B", description:"Descripcion B", stock:10, price:1500},
        {id: "3", name:"producto C", description:"Descripcion C", stock:15, price:2000},
        {id: "4", name:"producto D", description:"Descripcion D", stock:20, price:2500},
        {id: "5", name:"producto E", description:"Descripcion E", stock:25, price:3000},
        {id: "6", name:"producto F", description:"Descripcion F", stock:30, price:3500}
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
        console.log(resultado);
      })
      .catch((error)=>{
        console.log(error);
      })



  return (
    <><ItemDetail
    productos={productos}/>
    </>
  )
}

export default ItemDetailContainer