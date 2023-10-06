import React from 'react'
import Navbar from "./componentes/Navbar"
import ItemListContainer from "./componentes/ItemListContainer"


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting={"bienvenido a mi ecomerce"}/>
    </div>
  )
}

export default App
