import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './StudentView/student.css';

import Router from './StudentView/Router';
import { BrowserRouter,Route,Switch } from 'react-router-dom';



ReactDOM.render((
  <BrowserRouter>

    <Router/>
    
  </BrowserRouter>
), document.getElementById('root'))




