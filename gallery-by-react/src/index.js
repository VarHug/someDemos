import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './common/style/main.styl';
import './common/style/icon-style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
