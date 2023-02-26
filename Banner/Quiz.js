import React, { useRef } from 'react'
import Card from '../Card/Card'
import { useState } from 'react';
import Result from './Result';

export default function Quiz() {
    const options1=["Mahatma Gandhi","Jawaharlal Nehru","Donald Trump","Barack Obama"];
    const options2=["Blue", "Red", "Yellow","Green"];
    const [active, setActive] = useState(true);
    const [complete, setComplete] = useState(0);
    const handleActive = () => {
        setActive(false);
    }
    
    
    const [count, setCount] = useState(0);

    const handleCount1 = (card1) =>{
        setCount(count+card1);
    }
    const handleCount2 = (card2) =>{
        setCount(count+card2);
    }
    const handleCount3 = (card3) =>{
        setCount(count+card3);
    }
    const handleCount4 = (card4) =>{
        setCount(count+card4);
    }
    const handleCount5 = (card5) =>{
        setCount(count+card5);
    }

    const [click, setClick] = useState(0);

    const handleClick = () =>{
        setClick(click+1);
    }
    const questionProp = {
        questionId : 2,
        question : "What color is are the leaves ?",
        option1 : "Blue",
        option2 : "Red",
        option3 : "Yellow",
        option4 : "Green",
        answer : "Green"
    }

  return (
    <>
    {
        !active ? 
          <Result count = {count}/>:
          <>
          <div className='card-container'>
            <div className='card-wrapper1'>
                <div className='card1'>
                    <Card
                    key={questionProp.questionId}
                    question={questionProp.question}
                    correctAnswerMarkUpdate={handleCount1}
                    attempt={handleClick}
                    options={{
                    option1: questionProp.option1,
                    option2: questionProp.option2,
                    option3: questionProp.option3,
                    option4: questionProp.option4
                    }}
                    answer={questionProp.answer}
                    />
                </div>
                
            </div>
            
        </div>
        <div className='res-container'>
            {
                click === 5 ?
                <button className="show-res" onClick={handleActive}>
                    Show Results
                </button>:<></>
            }
        </div>
        </>

      }

    
    </>
  )
}