import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

import Input from '../../common_components/Input';
import Indicator from '../../common_components/Indicator';
import Arrow from '../../common_components/Arrow';
import Categories from './Categories';

const SelectContainer = styled.div`${ styles.container }`;
const InputView = styled.div`${ styles.inputWrapper }`;
const InputOverlay = styled.div`${ styles.inputOverlay }`;
const InputOverlayText = styled.span`${ styles.inputOverlayText }`;
const ArrowWrapper = styled.div.attrs({
    'data-not_close_modal': true
})`${ styles.arrowWrapper }`;
const CategoryFilterContainer = styled.div`${ styles.categoryFilterContainer }`;
const CategoryFilter = styled.button.attrs({
    type: props => props.type || 'button'
})`${ styles.categoryFilter }`;

const Select = props => {
    
    const {
        isOpen,
        options,
        toggleOpenSelect,
        getActiveItem,
        openSelect,
        activeOption,
        categoriesFilters,
        filterInputChange,
        selectFilterValue,
        changeInputResetState,
        activeCategory,
        setActiveCategory
    } = props;
    
    const categoryFiltersHandler = e => {
        const value = e.target.getAttribute('data-active-category');
        if (value) {
            const isCurrentCategory = categoriesFilters.some(item => item.toLowerCase() === value);
            if (isCurrentCategory && activeCategory !== value) {
                setActiveCategory(value);
            }
        }
    };
    
    const createFilters = arr => {
        if (arr && arr instanceof Array && arr.length) {
            const controlsCollection = [];
            const { activeCategory } = props;
            arr.map((item, idx) => {
                const control =
                    <CategoryFilter
                        data-active-category={item.toLowerCase()}
                        data-not-close-select
                        onClick={categoryFiltersHandler}
                        key={idx}
                        isActive={item.toLowerCase() === activeCategory}
                    >
                        {item}
                    </CategoryFilter>;
                return controlsCollection.push(control);
            });
            return <CategoryFilterContainer>{controlsCollection}</CategoryFilterContainer>;
        }
        else return null;
    };
    
    return (
        <SelectContainer>
            <InputView>
                <Input
                    value={selectFilterValue}
                    label={'Category'}
                    name={'selectFilterValue'}
                    onChangeFunc={filterInputChange}
                    onFocusFunc={openSelect}
                    borderActiveColor={isOpen}
                    data-not_close_modal
                />
                {!selectFilterValue &&
                    <InputOverlay>
                        <Indicator
                            content={
                                (activeOption && activeOption.categoryImage)
                                    ?
                                    {type: 'image', data: activeOption.categoryImage, alt: activeOption.categoryName}
                                    :
                                    {type: 'text', data: '+'}
                            }
                            invertPrimary
                        />
                        <InputOverlayText>
                            {(activeOption && activeOption.categoryName) ? activeOption.categoryName : 'Select category...'}
                        </InputOverlayText>
                    </InputOverlay>
                }
                <ArrowWrapper onClick={toggleOpenSelect}>
                    <Arrow size={'6px'} arrowState={isOpen ? 'up' : 'down'}/>
                </ArrowWrapper>
            </InputView>
            {isOpen &&
                <Categories
                    options={options}
                    filter={selectFilterValue}
                    activeCategory={activeCategory}
                    getActiveItem={getActiveItem}
                    changeInputResetState={changeInputResetState}
                >
                    {(categoriesFilters && !selectFilterValue) && createFilters(categoriesFilters)}
                </Categories>
            }
        </SelectContainer>
    )
};

Select.propTypes = {
    options: PropTypes.array,
    categoriesFilters: PropTypes.array,
    activeCategory: PropTypes.string,
    isOpen: PropTypes.bool,
    toggleOpenSelect: PropTypes.func,
    openSelect: PropTypes.func,
    getActiveItem: PropTypes.func,
    activeOption: PropTypes.object,
    filterInputChange: PropTypes.func.isRequired,
    selectFilterValue: PropTypes.string.isRequired,
    selectInputResetState: PropTypes.bool,
    setActiveCategory: PropTypes.func,
    changeInputResetState: PropTypes.func
};

export default Select;
