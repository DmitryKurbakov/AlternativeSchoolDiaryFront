import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './StudentView/student.css';

import Router from './StudentView/Router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route,Switch } from 'react-router-dom';



ReactDOM.render((
  <BrowserRouter>

    <Router/>
    
  </BrowserRouter>
), document.getElementById('root'))


registerServiceWorker();
