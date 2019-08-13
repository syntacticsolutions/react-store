import React from 'react'

export default function Input ({ value = '' }) {

    const doNothingBecauseReactSucks = () => {
        
    }

    return (
        <input
            type="text"
            value={ value }
            onChange={ () => doNothingBecauseReactSucks }
            />
    )
}