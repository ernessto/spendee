import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './styles';

const CategoriesContainer = styled.div`${ styles.categoriesContainer }`;
const CategoriesList = styled.ul`${ styles.categoriesList }`;
const ListItem = styled.li`${ styles.listItem }`;
const CategoryImage = styled.img`${ styles.categoryImage }`;


const Categories = props => {
    
    const getItemValue = e => {
        let item = e.target;
        if (!item.getAttribute('data-category-value')) {
            while(!item.getAttribute('data-category-value')) {
                item = item.parentNode;
            }
        }
        const value = item.getAttribute('data-category-value');
        props.getActiveItem(value);
    };
    
    const categories = props.options.map((item, idx) => {
        if (item.type === props.activeCategory && !props.filter) {
            return (
                <ListItem key={idx} data-category-value={item.value} onClick={getItemValue}>
                    {item.url && <CategoryImage src={item.url} alt={item.value}/>}
                    {item.value && <span>{item.value}</span>}
                </ListItem>
            )
        }
        else if (props.filter) {
            if (item.value.toLowerCase().includes(props.filter.toLowerCase())) {
                return (
                    <ListItem key={idx} data-category-value={item.value} onClick={getItemValue}>
                        {item.url && <CategoryImage src={item.url} alt={item.value}/>}
                        {item.value && <span>{item.value}</span>}
                    </ListItem>
                )
            }
            else return null;
        }
        else return null;
    });
    return (
        <CategoriesContainer>
            {props.children}
            {(props.options && props.activeCategory) &&
                <CategoriesList
                    onMouseEnter={props.changeInputResetState}
                    onMouseLeave={props.changeInputResetState}
                >
                    {categories}
                </CategoriesList>
            }
        </CategoriesContainer>
    );
};

Categories.propTypes = {
    options: PropTypes.array,
    filter: PropTypes.string,
    activeCategory: PropTypes.string,
    getActiveItem: PropTypes.func,
    changeInputResetState: PropTypes.func,
    inputResetState: PropTypes.bool
};

export default Categories;
