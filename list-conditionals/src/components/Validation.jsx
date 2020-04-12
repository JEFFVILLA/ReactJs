import React from 'react'

const validation = (props) => {
    let validationMessage = '';
    if (props.inputLength > 5) {
        validationMessage = 'Text long enough';
    } else if (props.inputLength <= 5 && props.inputLength > 0) {
        validationMessage = "Text too Short"
    } else {
        validationMessage = "No text to show"
    }

    return (
        <div>
            <p> {validationMessage}</p>
        </div>
    )
}

export default validation;