import React, { Component } from 'react';

const checkingTypes = {
    phonenumber: "phonenumber",
    fullname: "fullname"
}
const placeholder = {
    fullname: "Họ và tên",
    phonenumber: "Số điện thoại di động"
}
const isDefined = v => typeof v !== "undefined";

function FormError(props) {
    if (props.errorMessage === '') {
        return null;
    }
    return (
        <div className={`form-error error-${props.type}`}>
            {props.errorMessage}
        </div>
    )
}

class FormInputPhoneAndName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: {
                value: '',
                isInputValid: true, 
                errorMessage: ''
            },
            fullname: {
                value : '',
                isInputValid: true, 
                errorMessage: ''
            }
        }
    }

    validateInput = (type, checkingText) => {
        if (type === checkingTypes.phonenumber) {
            const regexp = /^\d{10,11}$/; // regular expression - checking if phone number contains only 10 - 11 numbers
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
        }else if (type === checkingTypes.fullname) {
            const regexp = /\d{1,}/; // regular expression - checking if fullname contains any number
            const checkingResult = regexp.exec(checkingText);
            if (checkingResult === null) {
                return {
                    isInputValid: true,
                    errorMessage: ''
                }
            } else {
                return {
                    isInputValid: false,
                    errorMessage: 'Tên chỉ được chứa chữ cái.'
                };
            }
    
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        const newState = { ...this.state[name] };
        newState.value = value;
        this.setState({ [name]: newState });
    }

    handleInputValidation = event => {
        const { name } = event.target;
        const { isInputValid, errorMessage } = this.validateInput(name, this.state[name].value);
        const newState = { ...this.state[name] };
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        this.setState({ [name]: newState })
    }
    
    render() {
        const name = this.props.name;
        const errorMessage = isDefined(this.state[name]) ? this.state[name].errorMessage : '';
        return (
            <div className="input-field-container">
                <input
                    type={this.props.type}
                    className="input-field"
                    name={this.props.name}
                    placeholder={placeholder[this.props.name]}
                    onChange={this.handleInput}
                    onBlur={this.props.needValidation ? this.handleInputValidation : null}
                    required={this.props.needValidation} />
                <FormError errorMessage={errorMessage} />
            </div>
        );
    }
}

export default FormInputPhoneAndName;