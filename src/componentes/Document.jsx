import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore"



const Document = () => {
    const [producto, setProducto] = useState([])

    useEffect(()=> {

        const db = getFirestore()

        const oneItem = doc(db, "productos1", `83DCDf4JxZJwame2QOk2`)

        getDoc(oneItem).then((snapshot)=>{
            if (snapshot.exists()){
                const docs = snapshot.data()
                setProducto(docs)
            }
        })
    })
  return (
    <div><h1>{producto.nombre}</h1>
    <h1>{producto.precio}</h1>
    <img src={producto.imagen} />
    </div>
  )
}

export default Document