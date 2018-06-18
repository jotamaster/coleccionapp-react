import React from 'react';
import {render} from 'react-dom';
import './index.css'
import Header from './layouts/Header'
import App from './containers/App'

import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();