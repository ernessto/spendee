import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #f4f7fa;
        font-family: 'Open Sans', Arial, sans-serif;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
