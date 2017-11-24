import { takeEvery, put } from 'redux-saga/effects'
import api from '../../../api'

function* getTransactions () {
    try {
        const actualData = yield api.Data.of( "UserTransactions" ).find()
            .then(data => data)
            .catch(e => e.message);
        yield put({ type: 'GET_TRANSACTIONS_SUCCESS', payload: actualData })
    } catch (e) {
        console.log(e.message)
    }
}

export default function* getTransactionsSaga () {
    console.log('get-transactions-saga is running');
    yield takeEvery('GET_TRANSACTIONS', getTransactions);
}
