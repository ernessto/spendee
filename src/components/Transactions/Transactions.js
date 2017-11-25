import React, { Component } from 'react';

import LS from '../../local_storage';

import AddTransaction from './AddTransaction';
import TransactionList from './TransactionsList';

class Transactions extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    
    componentWillMount() {
        if (LS.checkData('categories')) {
            this.setState({ categories: LS.getData('categories') });
        }
    }
    
    addTransaction = data => {
        if (data && data instanceof Object && Object.keys(data).length > 0) {
            if (LS.checkData('transactions')) {
                LS.mergeData(data, 'transactions');
                this.setState({ transactions: LS.getData('transactions') });
            }
            else {
                const dataToArray = [];
                dataToArray.push(data);
                LS.setData('transactions', dataToArray);
                this.setState({ transactions: LS.getData('transactions') });
            }
        }
    };
    
    render() {
        const { categories } = this.state;
        return (
            <div>
                {(categories && categories.length)
                    ?
                    <AddTransaction
                        selectCategories={categories}
                        getTransaction={this.addTransaction}
                    />
                    :
                    null
                }
                <TransactionList categories={categories}/>
            </div>
        );
    }
}

export default Transactions;