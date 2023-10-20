import React from 'react'
import Navbar from "./componentes/Navbar"
import ItemListContainer from "./componentes/ItemListContainer"
import Componente from './componentes/ComponenteA'
import Componente from './componentes/ComponenteB'


const App = () => {
  const tomarValor = (valor)=>{
    console.log(`valor: ${valor}`);
  }

  const user={
    nombre: "coder",
    apellido:"House",
    edad:50
  }

  const arr = ["A", "B", "C"]

  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting={"bienvenido a mi ecomerce"}/>
      <Componente tomarValor={tomarValor} isAdmin={false} user={user} arr={arr}/>
    </div>
  )
}

export default App
