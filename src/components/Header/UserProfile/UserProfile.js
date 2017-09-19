import React from 'react';
import styled from 'styled-components';
import styles from './styles';

import Arrow from '../../../common_components/Arrow';

import dan from '../../../img/dan.jpg';

const UserProfileContainer = styled.aside`${ styles.userProfileContainer }`;
const UserAvatar = styled.img`${ styles.userAvatar }`;
const UserName = styled.span`${ styles.userName }`;

export default () => (
    <UserProfileContainer>
        <UserAvatar src={dan} alt={'Dan Abramov'} />
        <UserName>Dan Abramov</UserName>
        <Arrow margin={'auto 0 auto 15px'} inclination={135} size={'6px'}/>
    </UserProfileContainer>
);