import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

const OverlayView = styled.div`${ styles.overlayView }`;

const Overlay = props => <OverlayView onClick={props.incomingClickHandler} />;

Overlay.propTypes = {
    incomingClickHandler: PropTypes.func
};

export default Overlay;