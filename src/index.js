import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App>Some text to be Displayed </App>, document.getElementById('root'));
registerServiceWorker();
