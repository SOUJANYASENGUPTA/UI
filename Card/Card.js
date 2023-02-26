import React, { useState } from 'react'
import Options from '../Button/Options'

export default function Card(props) {
    return (    
    <>
        <div className='question-container'>
            <h4>{props.question}</h4>
        </div>
        <div className='button-container'>
            <button
               
            > 
            {props.options.option1}
            </button>
            <button
                
            > 
            {props.options.option2}
            </button>
            <button
              
            > 
            {props.options.option3}
            </button>
            <button
                
            > 
            {props.options.option4}
            </button>
        </div>
        </>
    )
}