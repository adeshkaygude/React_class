import React from 'react'
import B from './B'

export default function A({city}) {
  return (
    <div>
        <h2>A component </h2>
        <hr/>
        <B city={city}/>
    </div>
  )
}
