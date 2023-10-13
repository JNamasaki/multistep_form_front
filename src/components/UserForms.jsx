import React from 'react'
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './range.css'
import RangeComponent from './RangeComponent';
import QuestionComponent from './QuestionComponent';

const UserForms = () => {
  return (
    <>


      <div style={{ margin: 20 }}>
  
        <QuestionComponent />
        
        <div className="container">


          <div className="pergunta">
            <label className='label_pergunta'>2</label>

            <p>Você se sente à vontade em ambientes de trabalho ao ar livre?</p>
          </div>


          <div className="resposta">

            <RangeComponent />

          </div>
        </div>

        <div className="container">


          <div className="pergunta">
            <label className='label_pergunta'>3</label>

            <p>Você se sente à vontade em ambientes de trabalho ao ar livre?</p>
          </div>


          <div className="resposta">

            <RangeComponent />

          </div>
        </div>
        <div className="container">


          <div className="pergunta">
            <label className='label_pergunta'>4</label>

            <p>Você se sente à vontade em ambientes de trabalho ao ar livre?</p>
          </div>


          <div className="resposta">

            <RangeComponent />

          </div>
        </div>

        <div className="container">


          <div className="pergunta">
            <label className='label_pergunta'>5</label>

            <p>Você se sente à vontade em ambientes de trabalho ao ar livre?</p>
          </div>


          <div className="resposta">

            <RangeComponent />

          </div>
        </div>

        <div className="container">


          <div className="pergunta">
            <label className='label_pergunta'>6</label>

            <p>Você se sente à vontade em ambientes de trabalho ao ar livre?</p>
          </div>


          <div className="resposta">

            <RangeComponent />

          </div>
        </div>
        {/* </div> */}


      </div>


    </>
  )
}

export default UserForms

