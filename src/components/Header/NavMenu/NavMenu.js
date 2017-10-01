import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import styles from './styles';

const NavMenuContainer = styled.nav`${ styles.navMenuContainer }`;
const LinkContainer = styled.span`${ styles.link }`;

export default () => (
    <NavMenuContainer>
        <LinkContainer>
            <NavLink to={'/transactions'}>Transactions</NavLink>
        </LinkContainer>
        <LinkContainer>
            <NavLink to={'/settings/categories'}>Wallet Settings</NavLink>
        </LinkContainer>
    </NavMenuContainer>
);
