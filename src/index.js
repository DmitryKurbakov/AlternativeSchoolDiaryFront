import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './StudentView/student.css';

<<<<<<< HEAD
import Router from './StudentView/Router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route,Switch } from 'react-router-dom';



ReactDOM.render((
  <BrowserRouter>

    <Router/>
    
  </BrowserRouter>
), document.getElementById('root'))


registerServiceWorker();
=======
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<MarksTable />, document.getElementById('container'));
ReactDOM.render(<StudentInfoComponent />, document.getElementById('top-bar'));
>>>>>>> b04f20778eb769bcc503f61921b7051b16a139db
