import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Numbers = ({ onclickNumber }) => (
    <section className="numbers">

        <Button text="1" clickHandler={onclickNumber} />
        <Button text="2" clickHandler={onclickNumber} />
        <Button text="3" clickHandler={onclickNumber} />
        <Button text="4" clickHandler={onclickNumber} />
        <Button text="5" clickHandler={onclickNumber} />
        <Button text="6" clickHandler={onclickNumber} />
        <Button text="7" clickHandler={onclickNumber} />
        <Button text="8" clickHandler={onclickNumber} />
        <Button text="9" clickHandler={onclickNumber} />
        <Button text="0" clickHandler={onclickNumber} />

    </section>

)

Numbers.propTypes = {
    onclickNumber: PropTypes.func.isRequired
}

export default Numbers;