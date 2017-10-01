import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './styles';
import utils from '../../utils';

const { valueToNegativeAmount, valueToPositiveAmount } = utils;

const InputView = styled.input.attrs({
    'data-not-close-select': true,
    placeholder: props => props.placeholder || '',
    type: props => props.type || 'text'
})`${ styles.inputView }`;

const LabelText = styled.span`${ styles.labelText }`;
const Label = styled.label`${ styles.label }`;

const Input = props => {
    const onBlurHandler = e => {
        if (props.onBlurFunc && props.dateValidation) {
            const { value, name } = e.target;
            let tmpArr = undefined;
            let isValid = true;
            if (value.includes('.')) {
                tmpArr = value.split('.');
            }
            if (value.includes('/')) {
                tmpArr = value.split('/');
            }
            if (tmpArr) {
                const [ date, month, year ] = tmpArr;
                console.log(date, month, year);
                if (Number(date) > 31 || Number(date) < 1) isValid = false;
                if (Number(month) > 12 || Number(month) < 1) isValid = false;
                if ((year.length === 4 && Number(year) > new Date().getFullYear()) || Number(year) < 1970 ) isValid = false;
            }
            if (isValid) return;
            else {
                props.onChangeFunc({ name: name, value: new Date().toLocaleDateString()});
            }
        }
    };
    const onChangeHandler = e => {
        const { value, name } = e.target;
        const data = {value, name};
        if (props.amount) {
            const amountValue = value.includes('-') ? value.substring(1) : value;
            const amountData = {value: amountValue, name};
            props.onChangeFunc(amountData);
        }
        props.onChangeFunc(data);
    };
    const onFocusHandler = () => {
        if (props.onFocusFunc) {
            props.onFocusFunc();
        }
        else return false;
    };
    return (
        <Label>
            {(props.label && props.label.length > 1) && <LabelText>{props.label}</LabelText>}
            {!props.amount
                ?
                <InputView onChange={onChangeHandler} onFocus={onFocusHandler} onBlur={onBlurHandler} {...props}/>
                :
                <InputView
                    onChange={onChangeHandler}
                    {...props}
                    value={(props.amountState && props.amountState === 'expenses')
                        ?
                        valueToNegativeAmount(props.value)
                        :
                        valueToPositiveAmount(props.value)
                    }
                />
            }
        </Label>
    )
};


Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeFunc: PropTypes.func,
    onFocusFunc: PropTypes.func,
    onBlurFunc: PropTypes.func,
    label: PropTypes.string,
    textColor: PropTypes.string,
    textPosition: PropTypes.string,
    weight: PropTypes.string,
    borderActiveColor: PropTypes.bool,
    amountState: PropTypes.string,
    resetInput: PropTypes.bool,
    dateValidation: PropTypes.bool
};

export default Input;