import { takeEvery, put } from 'redux-saga/effects'
import api from '../../../api'

function* postTransaction (action) {
    try {
        console.log('Posting data on server');
        const postData = yield api.Data.of( "UserTransactions" ).save(action.payload)
            .then(data => data)
            .catch(e => e.message);
        console.log(postData);
        const actualData = yield api.Data.of( "UserTransactions" ).find()
            .then(data => data)
            .catch(e => e.message);
        yield put({ type: 'POST_TRANSACTION_SUCCESS', payload: actualData })
    } catch (e) {
        console.log(e.message)
    }
}

export default function* postTransactionSaga () {
    console.log('post-saga is running');
    yield takeEvery('POST_TRANSACTION', postTransaction)
}