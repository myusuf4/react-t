import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Count from './Count'
import Input from './Input';
import Select from './select';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    <Count/>
    <Input />
    <Select/>
  </div>
 
);


