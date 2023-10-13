import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { FiSend } from 'react-icons/fi'


import './MultiStepProgressBar.css'

const MultiStepProgressBar = (props) => {
  return (
    <ProgressBar
      percent={(props.step -0.99)*100/6}
      filledBackground="#CC13C5" //"linear-gradient(to right, #fefb72, #f0bb31)"
      unfilledBackground="#CDCDCD"
      
      style={{width:"70%", display:"flex", alignSelf:"center"}}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            1
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            2
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            3
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            4
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            5
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            6
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            <FiSend />
          </div>
        )}
      </Step>
    </ProgressBar>
  );
}

export default MultiStepProgressBar