import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

const ArrowView = styled.span`${ styles.arrow }`;


const Arrow = props => <ArrowView {...props}/>;

Arrow.propTypes = {
    arrowState: PropTypes.string,
    active: PropTypes.bool,
};

export default Arrow;
