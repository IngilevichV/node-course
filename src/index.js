import React from 'react';
import ReactDOM from 'react-dom';
const data =require('./testData.json');

import App from './components/App';

console.log(data);

ReactDOM.render(
    <App contests={data.contests}/>,
    document.getElementById('root'),
);
