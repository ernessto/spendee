import { all } from 'redux-saga/effects'

import getCategoriesSaga from './getCategories'
import postTransactionSaga from './userTransactions'
import getTransactionsSaga from './getTransactions'

export default function* rootSaga () {
    yield all([
        getCategoriesSaga(),
        postTransactionSaga(),
        getTransactionsSaga()
    ])
}