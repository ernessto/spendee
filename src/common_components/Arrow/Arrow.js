import React from 'react';
import styled from 'styled-components';

const Arrow = styled.span`
    display: inline-block;
    height: ${props => props.size || '8px'};
    width: ${props => props.size || '8px'};
    border-width: 2px 2px 0 0;
    border-style: solid;
    border-color: #bbcdd8;
    transition: transform .3s;
    transform: rotate(${props => props.inclination || '45'}deg);
    margin: ${props => props.margin || 'auto'};
`;


export default (props) => <Arrow {...props}/>;
