import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './styles';

import Indicator from '../Indicator';

const ControlBtn = styled.button.attrs({
    type: props => props.type || 'button',
    disabled: props => props.btnDisabled && 1
})`${ styles.controlButton }`;
const ButtonText = styled.span`${ styles.buttonText }`;

const Button = props => {
    return (
        <ControlBtn onClick={props.incomingClickHandler} {...props}>
            {props.indicator
                ?
                <Indicator {...props} content={props.indicator}/>
                :
                null
            }
            <ButtonText>{props.text}</ButtonText>
        </ControlBtn>
    );
};

Button.propTypes = {
    incomingClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string,
    indicator: PropTypes.any,
    primary: PropTypes.bool,
    close: PropTypes.bool,
    btnDisabled: PropTypes.bool
};

export default Button;