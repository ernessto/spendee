import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

const ModalWrapper = styled.div`${ styles.wrapper }`;

const Modal = props => {
    return (
        <ModalWrapper {...props} onClick={props.onClickFunc}>
            {props.children}
        </ModalWrapper>
    );
};

Modal.propTypes = {
    onClickFunc: PropTypes.func,
    rounded: PropTypes.bool
};

export default Modal;