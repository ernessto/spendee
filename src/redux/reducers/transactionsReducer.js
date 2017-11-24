const initialState = [];

function transactionsReducer (state = initialState, action) {
    switch (action.type) {
        case 'POST_TRANSACTION':
            return state;
        case 'POST_TRANSACTION_SUCCESS':
            return [...state, action.payload];
        case 'GET_TRANSACTIONS_SUCCESS':
            return [...state, ...action.payload];
        default:
            return state
    }
}

export default transactionsReducer