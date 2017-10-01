import React from 'react';
import styled from 'styled-components';
import styles from './styles';

import paths from '../../data/routes_paths';

import CashWallet from './CashWallet';
import NavMenu from './NavMenu';
import UserProfile from './UserProfile';

const Header = styled.header`${ styles.headerContainer }`;
const Wrapper = styled.div`${ styles.wrapper }`;

export default props => {
    let isCurrent = false;
    for (let prop in paths) {
        if (paths[prop] === props.location.pathname) {
            isCurrent = true;
        }
    }
    console.log('Header rendered!!!');
    return (
        <Header>
            {isCurrent
                ?
                <Wrapper>
                    <CashWallet/>
                    <NavMenu/>
                    <UserProfile/>
                </Wrapper>
                :
                null
            }
        </Header>
    );
};

