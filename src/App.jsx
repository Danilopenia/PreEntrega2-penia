import React from 'react'
import Navbar from "./componentes/Navbar"
import ItemListContainer from "./componentes/ItemListContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/Home'
import Cart from './componentes/Cart'
import About from './componentes/About'
import ProductDetail from './componentes/ProductDetail'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import CategoriaA from './componentes/CategoriaA'
import CategoriaB from './componentes/CategoriaB'
import CategoriaC from './componentes/CategoriaC'



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


  <BrowserRouter>

 <Navbar/>


<Routes>


<Route exact path="/" element={<ItemListContainer />}/>
<Route exact path="/cart" element={<Cart/>}/>
<Route exact path="/about" element={<About />}/>
<Route exact path="/product/:id" element={<ItemDetailContainer />}/>
<Route exact path="/CategoriaA" element={<CategoriaA />}/>
<Route exact path="/CategoriaB" element={<CategoriaB />}/>
<Route exact path="/CategoriaC" element={<CategoriaC />}/>







</Routes>




</BrowserRouter>


  )
}

export default App
