import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './styles';

const IndicatorView = styled.span`${ styles.indicator }`;

const Indicator = props => {
    return (
        <IndicatorView {...props}>
            {props.content.type === 'text' && <span>{props.content.data}</span>}
            {props.content.type === 'image' && <img src={props.content.data} alt={props.content.alt}/>}
        </IndicatorView>
    );
};

Indicator.propTypes = {
    content: PropTypes.objectOf(PropTypes.string),
    primary: PropTypes.bool,
    invertPrimary: PropTypes.bool
};

export default Indicator;