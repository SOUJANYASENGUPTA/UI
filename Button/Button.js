import React from 'react'
import Result from '../Banner/Result'
export default function Button(props) {
  return (
    <div>
        <button
            onClick={<Result/>}
        >{props.TestingInput}</button>
    </div>
  )
}