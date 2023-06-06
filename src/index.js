import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Input from './Input';
import Students from './student';
// import Select from './select';
// import Count from './Count'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    {/* <Count/> */}
    <Input />
    <hr/>
    <Students/>
    {/* <Select/> */}
  </div>
 
);


