import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root/root';
import {BrowserRouter as  Router} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Root/>
   </Router> 
 
);


