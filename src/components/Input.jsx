import React, {} from 'react'

export default function Input ({ value = '', cb }) {

    return (
        <input
            type="text"
            value={ value }
            onChange={ () => cb }
        />
    )
}