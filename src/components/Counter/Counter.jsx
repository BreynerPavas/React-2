import React, { useState } from 'react'

const Counter = (props) => {
    const [contador,setContador] = useState(props.initialValue)
    // funciones
    const updateContador = (e) => {
        if(e.target.innerHTML == "+"){
            setContador(contador + props.step)
        }else{
            setContador(contador - props.step)
        }
        
    }
  return (
    <>
    <button onClick={updateContador}>+</button>
    <span>{contador}</span>
    <button onClick={updateContador}>-</button>
    </>
  )
}

export default Counter