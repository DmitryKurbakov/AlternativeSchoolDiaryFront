import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MarksTable from './MarksTable';
import StudentInfoComponent from './StudentInfoComponent';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<MarksTable />, document.getElementById('container'));
ReactDOM.render(<StudentInfoComponent />, document.getElementById('top-bar'));
registerServiceWorker();
