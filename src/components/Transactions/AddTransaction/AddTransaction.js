import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

import Modal from '../../../common_components/Modal';
import Input from '../../../common_components/Input';
import Button from '../../../common_components/Button';
import Overlay from '../../../common_components/Overlay';
import Select from '../../../common_components/Select';

import utils from '../../../utils';
const { valueToNegativeAmount, valueToPositiveAmount, checkObjectOnFilled } = utils;

const Wrapper = styled.div`${ styles.wrapper }`;
const FooterContent = styled.footer`${ styles.footerContent }`;
const InputsWrapper = styled.div`${ styles.inputsWrapper }`;

class AddTransaction extends PureComponent {
    
    static propTypes = {
        selectCategories: PropTypes.array,
        getTransaction: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false,
            isOpenSelect: true,
            transactionData: {
                date: new Date().toLocaleDateString(),
                hashTag: '',
                categoryImage: '',
                categoryName: '',
                categoryType: 'expenses',
                amount: ''
            },
            selectActions: {
                selectFilterValue: '',
                selectInputResetState: true,
                selectCategoriesControls: ['Expenses', 'Incomes'],
                amountStatus: 'expenses'
            }
        }
    }
    
    toggleOpen = () => {
        const isOpen = this.state.isOpenModal;
        this.setState({isOpenModal: !isOpen});
    };
    
    toggleSelectOpen = () => {
        const isOpen = this.state.isOpenSelect;
        this.setState({ isOpenSelect: !isOpen });
    };
    
    openSelect = () => this.setState({ isOpenSelect: true });
    
    closeSelect = e => {
        if (this.state.isOpenSelect) {
            if (e.target.getAttribute('data-not-close-select')) return;
            this.setState(() => ({
                isOpenSelect: false,
                selectActions: Object.assign({}, this.state.selectActions, {
                    selectFilterValue: '',
                    selectInputResetState: true
                })
            }));
        }
    };
    
    setCategoryItem = value => {
        const { selectCategories } = this.props;
        if (value && value.length && typeof value === 'string') {
            const currentItem = selectCategories.filter(item => item.value === value);
            if (currentItem) {
                const amount = this.state.transactionData.amount;
                const {type, url, value } = currentItem[0];
                const currentAmount =
                    type === 'expenses' ?
                        valueToNegativeAmount(amount) :
                        type === 'incomes' ?
                            valueToPositiveAmount(amount) :
                            ''
                ;
                this.setState(() => ({
                    transactionData: Object.assign({}, this.state.transactionData, {
                        categoryImage: url,
                        categoryName: value,
                        categoryType: type,
                        amount: currentAmount
                    }),
                    selectActions: Object.assign({}, this.state.selectActions, {
                        selectFilterValue: '',
                        selectInputResetState: true
                    })
                }));
            }
        }
    };
    
    inputOnChange = data => {
        if (data && data instanceof Object && Object.keys(data).length === 2) {
            const isCurrentTransactionKey = Object.keys(this.state.transactionData).some(item => item === data.name);
            if (isCurrentTransactionKey) {
                const { name, value } = data;
                if (data.name === 'amount') {
                    if ((!isNaN(parseFloat(value)) && isFinite(value) && value !== ' ') || value === '') {}
                    else return;
                }
                this.setState(() => ({
                    transactionData: Object.assign({}, this.state.transactionData, {
                        [name]: value
                    })
                }));
            }
        }
        else return false;
    };
    
    getFilterInputValue = data => {
        if (data) {
            const { name, value } = data;
            this.setState(() => ({
                selectActions: Object.assign({}, this.state.selectActions, {
                    [name]: value
                })
            }));
        }
        else return false;
    };
    
    changeInputResetState = () => {
        const inputResetState = this.state.selectActions.selectInputResetState;
        this.setState(() => ({
            selectActions: Object.assign({}, this.state.selectActions, {
                selectInputResetState: !inputResetState
            })
        }));
    };
    
    setActiveCategory = value => {
        if (value) {
            const { amountStatus } = this.state.transactionData;
            if (amountStatus !== value) {
                this.setState(() => ({
                    transactionData: Object.assign({}, this.state.transactionData, {
                        categoryImage: '',
                        categoryName: '',
                        categoryType: value,
                    }),
                    selectActions: Object.assign({}, this.state.selectActions, {
                        amountStatus: value
                    })
                }));
            }
        }
    };
    
    setTransactionData = () => {
        const { amount, hashTag, categoryName, date } = this.state.transactionData;
        const data = { amount, hashTag, categoryName, date };
        this.props.getTransaction(data);
        this.setState(() => ({
            isOpenModal: false,
            transactionData: Object.assign({}, this.state.transactionData, {
                categoryImage: '',
                categoryName: '',
                categoryType: 'expenses',
                amount: '',
                hashTag: ''
            }),
            selectActions: Object.assign({}, this.state.selectActions, {
                amountStatus: 'expenses'
            })
        }));
    };
    
    render() {
        const { isOpenModal, isOpenSelect } = this.state;
        const { selectCategories } = this.props;
        const {
            selectFilterValue,
            selectInputResetState,
            selectCategoriesControls,
            amountStatus
        } = this.state.selectActions;
        const {
            date,
            hashTag,
            amount,
            categoryImage,
            categoryName,
            categoryType
        } = this.state.transactionData;
        const activeOption = { categoryImage, categoryName };
        const isFilledTransactionData = checkObjectOnFilled(this.state.transactionData, ['hashTag']);
        const currentAmountValue =
            categoryType === 'expenses'
                ?
                valueToNegativeAmount(amount)
                :
                categoryType === 'incomes'
                    ?
                    valueToPositiveAmount(amount)
                    :
                    amount
        ;
        return (
            <Wrapper>
                {!isOpenModal
                    ?
                    <Button
                        incomingClickHandler={this.toggleOpen}
                        indicator={{type: 'text', data: '+'}}
                        text={'Add transaction'}
                        primary
                    />
                    :
                    <form autoComplete={'off'}>
                        <Button
                            incomingClickHandler={this.toggleOpen}
                            indicator={{type: 'text', data: '×'}}
                            text={'Close'}
                            close
                        />
                        <Modal onClickFunc={this.closeSelect}>
                            <InputsWrapper>
                                <Select
                                    options={selectCategories}
                                    categoriesFilters={selectCategoriesControls}
                                    activeCategory={amountStatus}
                                    activeOption={activeOption}
                                    isOpen={isOpenSelect}
                                    openSelect={this.openSelect}
                                    getActiveItem={this.setCategoryItem}
                                    toggleOpenSelect={this.toggleSelectOpen}
                                    filterInputChange={this.getFilterInputValue}
                                    selectFilterValue={selectFilterValue}
                                    changeInputResetState={this.changeInputResetState}
                                    selectInputResetState={selectInputResetState}
                                    setActiveCategory={this.setActiveCategory}
                                />
                                <Input
                                    value={date}
                                    label={'Date'}
                                    name={'date'}
                                    textColor={'#324c5b'}
                                    dateValidation
                                    onChangeFunc={this.inputOnChange}
                                    onBlurFunc={this.inputOnChange}
                                />
                                <Input
                                    value={hashTag}
                                    placeholder={'Write note or #hashtag'}
                                    label={'Note (optional)'}
                                    name={'hashTag'}
                                    onChangeFunc={this.inputOnChange}
                                />
                                <Input
                                    value={currentAmountValue}
                                    placeholder={(categoryType === 'expenses') ? '-0.00' : '0.00'}
                                    label={'Price'}
                                    name={'amount'}
                                    onChangeFunc={this.inputOnChange}
                                    textPosition={'right'}
                                    weight={'700'}
                                    amount
                                    amountState={categoryType}
                                />
                            </InputsWrapper>
                            <FooterContent>
                                <Button
                                    incomingClickHandler={this.setTransactionData}
                                    text={'Add transaction'}
                                    btnDisabled={!isFilledTransactionData}
                                    primary={isFilledTransactionData}
                                />
                            </FooterContent>
                        </Modal>
                        <Overlay incomingClickHandler={this.toggleOpen}/>
                    </form>
                }
            </Wrapper>
        );
    }
}

export default AddTransaction;
