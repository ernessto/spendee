import React from 'react';
import styled from 'styled-components';

import styles from './styles';

import Arrow from '../../../common_components/Arrow';

const CashWalletContainer = styled.div` ${styles.cashWalletContainer} `;
const CashWalletHeader = styled.h2` ${styles.header} `;

export default () => (
    <CashWalletContainer>
        <CashWalletHeader>Cash Wallet</CashWalletHeader>
        <Arrow margin={'auto 0 auto 15px'} arrowState={'down'} size={'6px'}/>
    </CashWalletContainer>
);



