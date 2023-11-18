import {useState} from 'react'
import Loader from './Loader'






const Rendering = () => {


  const [mensaje, setMensaje] = useState("")
/*
  let IsVisible= "Coder"

  let carrito = ["A"]



  return (
    <div>
        {
          mensaje ? <h1>{mensaje}</h1> : <h3>no hay msjs</h3>
        }

        <button onClick={()=> setMensaje("Mensaje modificado")}>cambiar mensaje</button>
    </div>
  )
}*/

return (
  <div>
    <Loader></Loader>
  </div>
)
}

export default Rendering