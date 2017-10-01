import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    margin-top: 50px;
`;

export default () => (
    <Container>
        <h1>Page not found :(</h1>
        <NavLink to={'/transactions'}>Back to home</NavLink>
    </Container>
);