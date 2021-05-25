import PropTypes from 'prop-types'
import Button from '../Button/Button'

import './Functions.css'


const Functions = ({ onContentClear, onDelete }) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
)

Functions.protoTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;