import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Count from './components/Count'
import Input from './components/Input';
import Select from './components/select';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    <Count/>
    <Input />
    <Select/>
  </div>
 
);


