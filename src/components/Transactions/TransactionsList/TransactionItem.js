import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

const ListItemWrapper = styled.div`${ styles.listItemWrapper }`;
const ListItem = styled.li`${ styles.listItem }`;
const HashTagView = styled.div`${ styles.hashView }`;
const AmountView = styled.div`${ styles.amountView }`;

class TransactionItem extends PureComponent {
    
    static propTypes = {
        transactionID: PropTypes.number.isRequired,
        transactionName: PropTypes.string,
        transactionImage: PropTypes.string,
        transactionType: PropTypes.string,
        date: PropTypes.string,
        hashTag: PropTypes.string,
        amount: PropTypes.string
    };
    
    constructor(props) {
        super(props);
        this.state = {
            isOpenEditModal: false
        }
    }
    render() {
        const {
            transactionName,
            transactionImage,
            date,
            hashTag,
            amount
        } = this.props;
        return (
            <ListItemWrapper>
                {!this.state.isOpenEditModal
                    ?
                    <ListItem>
                        <div>
                            <img src={transactionImage} alt={transactionName}/>
                            <span>{transactionName}</span>
                        </div>
                        <div>{date}</div>
                        <HashTagView isValue={!!hashTag}>
                            <span>{hashTag || '---'}</span>
                        </HashTagView>
                        <AmountView isNegative={amount.includes('-')}>
                            <span>---</span>
                            <output>{amount}</output>
                        </AmountView>
                    </ListItem>
                    :
                    null
                }
            </ListItemWrapper>
        )
    }
}

export default TransactionItem;