import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

import './Numbers.css'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = onclickNumber => {
    const renderButton = number => (
        <Button key={number} text={number.toString()} clickHandler={onclickNumber} />
    )
    return numbers.map(renderButton)
}

const Numbers = ({ onclickNumber }) => (
    <section className="numbers">
        {renderButtons(onclickNumber)}
    </section>

)

Numbers.propTypes = {
    onclickNumber: PropTypes.func.isRequired
}

export default Numbers;