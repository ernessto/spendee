import { takeEvery, put } from 'redux-saga/effects'
import api from '../../../api'

function* postTransaction (action) {
    try {
        console.log('Posting data on server');
        const postData = yield api.Data.of( "UserTransactions" ).save(action.payload)
            .then(data => data)
            .catch(e => e.message);
        console.log(postData);
        yield put({ type: 'POST_TRANSACTION_SUCCESS', payload: postData })
    } catch (e) {
        console.log(e.message)
    }
}

export default function* postTransactionSaga () {
    console.log('post-saga is running');
    yield takeEvery('POST_TRANSACTION', postTransaction);
}
