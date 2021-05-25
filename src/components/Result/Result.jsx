import React from 'react'
import PropTypes from 'prop-types'

import './Result.css'

const Result = ({ value }) => (
    <div className="result">
        {value}
    </div>
)


//The object contains all the properties that we want to validate
Result.propTypes = {
    value: PropTypes.string.isRequired
}
//The object contains all the properties that we want to set a default value

Result.defaultProps = {
    value: "0"
}

export default Result;