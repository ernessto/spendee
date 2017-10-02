import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

const TransactionListContainer = styled.div`${ styles.transactionContainer }`;
const List = styled.ul`${ styles.list }`;
const ListItem = styled.li`${ styles.listItem }`;

class TransactionList extends PureComponent {
    
    static propTypes = {
        transactions: PropTypes.array,
        categories: PropTypes.array
    };
    
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    
    render() {
        const { transactions } = this.props;
        
        const transactionsItems = transactions.map((item, idx) => {
            return (
                <ListItem key={idx}>
                    <div>{item.categoryName}</div>
                    <div>{item.date}</div>
                    <div>{item.hashTag || '---'}</div>
                    <div className={'textRight'}>{item.amount}</div>
                </ListItem>
            )
        });
        
        return (
            <TransactionListContainer>
                <List>
                    {transactionsItems}
                </List>
            </TransactionListContainer>
        )
    }
    
}

export default TransactionList;
