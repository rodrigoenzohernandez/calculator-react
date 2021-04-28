import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ text, type, clickHandler }) => (
    //When a function only has one line, can be deleted the brackets
    <button className={type} onClick={() => clickHandler(text)}>
        <span>
            {text}
        </span>
    </button>
)


Button.prototypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;