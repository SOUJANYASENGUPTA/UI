import React from 'react'
import { useState } from 'react';

export default function Options(props) {
    const [clicked, setClicked]=useState(false);
  return (
    <>
        <button className='butt' disabled={clicked?true:false} onClick={()=>{
            if(props.ans===0) props.handleCount(1)
            else props.handleCount(0)
            setClicked(true)
            props.handleClick()
        }
        }>
        </button>

        <button className='butt'  disabled={clicked?true:false} onClick={()=>{
            if(props.ans===1) props.handleCount(1)
            else props.handleCount(0)
            setClicked(true)
            props.handleClick()
        }}>
        </button >

        <button className='butt'  disabled={clicked?true:false}  onClick={()=>{
            if(props.ans===2) props.handleCount(1)
            else props.handleCount(0)
            setClicked(true)
            props.handleClick()
            }}>
        </button>

        <button className='butt'  disabled={clicked?true:false} onClick={()=>{
            if(props.ans===3) props.handleCount(1)
            else props.handleCount(0)
            setClicked(true)
            props.handleClick()
            }}>
        </button>

        </> 
  )
}