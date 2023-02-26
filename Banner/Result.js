import React from 'react'
import Button from '../Button/Options'
import { useState } from 'react';
import Start from './Start';

export default function Result(props) {
  const [start, setStart] = useState(false);
  
  const handleStart = () => {
    setStart(true)
  }
  return (
    <>
      {start? <Start/>:<><div className='score'>
        <p>You have answered {props.count}/5 Correctly</p>
      </div>
        <div className='buttonDiv'>
        <button className='buttonStart' onClick={handleStart}>Start Quiz</button>
        </div>
      </>}
      </>
  )
}