import React from 'react'
import C from './C'

export default function B({city}) {
  return (
    <div>
        <h2> B component </h2>
        <hr/>
        <C city={city}/>
    </div>
  )
}
