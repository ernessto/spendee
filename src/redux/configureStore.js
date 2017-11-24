import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import rootReducer from './reducers'

export default function configureStore () {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        composeEnchancers(
            applyMiddleware(...middleware)
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}