import React, { useState } from 'react'
import ResultadoComponent from './ResultadoComponent'

const MultiPerfilComponent = (props) => {

// props.resultado.forEach((item)=>{
//   console.log(item)
// })

  return (
    <div className="text-left">
        {props.resultado.map((item,index)=>{
          
            return (
                <ResultadoComponent key={item.categoria} categoria={item.categoria} pontuacao={item.valor} />
            )
        })}
    </div>
  
  )
}

export default MultiPerfilComponent;