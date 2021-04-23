import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {
    return (
        <div className="result">
            {value}
        </div>
    )
}

//The object contains all the properties that we want to validate
Result.propTypes = {
    value: PropTypes.string.isRequired
}

export default Result;