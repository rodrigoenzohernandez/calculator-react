import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button text ="clear" clickHandler={onContentClear}/>
        <Button text ="r" clickHandler={onDelete}/> 
        {/* &larr instead  of r*/}
  </section>
)

Functions.protoTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;