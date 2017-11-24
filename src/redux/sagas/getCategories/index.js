import { takeEvery, put } from 'redux-saga/effects'
import api from '../../../api'

function* getCategories () {
    try {
        console.log('Getting data from api');
        const response = yield api.Data.of( "TestTable" ).find()
            .then(data => data)
            .catch(e => e.message);
        console.log(response);
        yield put({ type: 'GET_CATEGORIES_SUCCESS', payload: response })
    } catch (e) {
        console.log(e.message)
    }
}

export default function* getCategoriesSaga () {
    console.log('get-saga is running')
    yield takeEvery('GET_CATEGORIES', getCategories)
}
