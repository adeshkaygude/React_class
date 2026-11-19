import React from 'react'
import D from './D'

export default function C({city}) {
  return (
    <div>
        <h2> C component </h2>
                <hr/>
                <D city={city}/>
    </div>
  )
}
