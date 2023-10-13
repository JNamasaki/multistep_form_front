import React, { useState } from 'react'
import FormItem from './FormItem'

const MultiStepForm = (props) => {

  const [answers, setAnswers] = useState([]);

  const updateAnswers = (value, category,categoria,id) => {

    // console.log(categoria,id)

    setAnswers({...answers, [category]: value});
    props.updateResponses(value,categoria,id);
  }

  return (
    <div >
        {props.list[props.step].items?.map((item,index)=>{
          
            return (
                <FormItem key={item.id} index={index} item={item} onChange={updateAnswers}  />
            )
        })}
    </div>
  
  )
}

export default MultiStepForm