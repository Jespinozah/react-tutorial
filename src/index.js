import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Button label="Do"/>, document.getElementById('root'));
registerServiceWorker();
