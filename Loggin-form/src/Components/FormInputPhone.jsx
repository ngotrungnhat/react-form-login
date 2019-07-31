import React, { Component } from 'react';

function FormError(props) {
    if (props.isHidden === true) {
        return null;
    }
    return (<div className={`form-error error`}>
                {props.errorMessage}
            </div>)
}

class FormInputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isInputValid: true, 
            errorMessage: ''
        }
    }

    validateInput = (checkingText) => {
        const regexp = /^\d{10,11}$/;
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult !== null) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
            };
        }
    }

    handleInput = event => {
        const { value } = event.target
        this.setState({ value });
    }

    handleInputValidation = (event) => {
        const { isInputValid, errorMessage } = this.validateInput(this.state.value)
        this.setState({ isInputValid, errorMessage });
    }
    
    render() {
        return (
            <div>
                <input
                    name="fullname"
                    className="input-field"
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                />
                <FormError 
                    isHidden={this.state.isInputValid} 
                    errorMessage={this.state.errorMessage} 
                />
            </div>
        );
    }
}

export default FormInputNumber;