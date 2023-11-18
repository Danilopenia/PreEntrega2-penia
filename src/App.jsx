import React from 'react'
import Navbar from "./componentes/Navbar"
import ItemListContainer from "./componentes/ItemListContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './componentes/Cart'
import ProductDetail from './componentes/ProductDetail'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import CategoriaA from './componentes/CategoriaA'
import CategoriaB from './componentes/CategoriaB'
import CategoriaC from './componentes/CategoriaC'
import Form from './componentes/Form'



const App = () => {


return (

<>


<BrowserRouter>
  <Navbar/>

 
  <Routes>

  <Route exact path ="/" element={<ItemListContainer/>}/>
  <Route exact path ="/cart" element={<Cart/>}/>
  <Route exact path ="/product/:id" element={<ItemDetailContainer/>}/>
  <Route exact path ="/categoriaA" element={<CategoriaA/>}/>
  <Route exact path ="/categoriaB" element={<CategoriaB/>}/>
  <Route exact path ="/categoriaC" element={<CategoriaC/>}/>
  </Routes>

  

</BrowserRouter>
</>
  )
   
}

export default App
