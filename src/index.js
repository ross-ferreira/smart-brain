import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// react portal allows you to transfer props between react Apps