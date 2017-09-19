import React from 'react';
import styled from 'styled-components';
import styles from './styles';

import CashWallet from './CashWallet/CashWallet';
import NavMenu from './NavMenu/NavMenu';
import UserProfile from './UserProfile/UserProfile';

const HeaderContainer = styled.header`${ styles.headerContainer }`;

export default () => (
    <HeaderContainer>
        <CashWallet/>
        <NavMenu/>
        <UserProfile />
    </HeaderContainer>
);

