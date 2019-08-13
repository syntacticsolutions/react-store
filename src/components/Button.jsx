import React from 'react'


const Button = ({ type, disabled = false, children}) => {

    return (
        <button
            className={ `${type} ${disabled ? 'disabled' : ''}` }
            disabled={disabled}
        >
            { children }
        </button>
    )
}

export default Button