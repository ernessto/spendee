import { all } from 'redux-saga/effects'

import getCategoriesSaga from './getCategories'
import postTransactionSaga from './userTransactions'

export default function* rootSaga () {
    yield all([
        getCategoriesSaga(),
        postTransactionSaga()
    ])
}