import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import styled from 'styled-components';
import styles from './styles';

import TransactionItem from './TransactionItem';

const TransactionListContainer = styled.div`${ styles.transactionContainer }`;
const List = styled.ul`${ styles.list }`;

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
        const { transactions, categories } = this.props.store;
        console.log(transactions);

        let transactionsItems = null;
        if (transactions.length > 0) {
            transactionsItems = transactions.map((item, idx) => {
                const transactionItem = item;
                const currentCategory = categories.filter(item => item.value === transactionItem.categoryName);
                const {url, type} = currentCategory[0];
                return (
                    <TransactionItem
                        key={idx}
                        transactionID={idx}
                        transactionName={transactionItem.categoryName}
                        transactionImage={url}
                        transactionType={type}
                        date={transactionItem.date}
                        hashTag={transactionItem.hashTag}
                        amount={transactionItem.amount}
                    />
                )
            });
        }
        
        return (
            <TransactionListContainer style={!transactionsItems && {padding: '0'}}>
                {transactionsItems ? <List>{transactionsItems}</List> : null}
            </TransactionListContainer>
        )
    }
    
}

const mapStateToProps = store => {
    return {
        store
    }
}

export default connect(mapStateToProps)(TransactionList);
