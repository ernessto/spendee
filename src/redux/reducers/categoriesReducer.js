const initialState = [];

function categoriesReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return state;
        case 'GET_CATEGORIES_SUCCESS':
            return [...state, ...action.payload];
        default:
            return state
    }
}

export default categoriesReducer