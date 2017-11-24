import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux'
import App from './App';

import default_categories from './data/default_categories';
import LS from './local_storage';

import configureStore from './redux/configureStore'

const store = configureStore();

if (!LS.checkData('categories')) {
    LS.setData('categories', default_categories);
}

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        margin: 0;
        padding: 0;
    }
    :focus {
        outline: 0;
        border: 0;
    }
    body {
        background-color: #f4f7fa;
        font-family: Open Sans, Helvetica, Arial, sans-serif;
    }
`;


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
