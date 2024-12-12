import React, { useState } from 'react'

const Counter = (props) => {
    const [contador,setContador] = useState(props.initialValue)
    // funciones
    const updateContador = (e) => {
        if(e.target.id == "suma"){
            setContador(contador + props.step)
        }else{
            setContador(contador - props.step)
        }
        
    }
  return (
    <>
    <button id="suma"onClick={updateContador}>+</button>
    <span>{contador}</span>
    <button id="resta"onClick={updateContador}>-</button>
    </>
  )
}

export default Counter