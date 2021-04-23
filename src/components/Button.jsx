import React from 'react'

//functional component

const Button = ({text, type}) => {
    return (
        <button className={type}>
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button;