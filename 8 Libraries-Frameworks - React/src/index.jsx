import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import BasicComponent from './components/1 - BasicComponent';
import ParameterComponent from './components/2 - ParameterComponent';
import MultTagsComponent from './components/3 - MultTagsComponent';
import MultTagsComponent2 from './components/4 - MultTagsComponent';
import ChildComponent from './components/5 - ChildComponent';
import ParentComponent from './components/5 - ParentComponent';
import ParentComponent2 from './components/6 - ParentComponent';
import ClassComponent from './components/7 - ClassComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasicComponent />
    <ParameterComponent parameter="parameter" />
    <MultTagsComponent />
    <MultTagsComponent2 />
    <ParentComponent name="firstName" lastName="lastName" />
    <ParentComponent2 name="firstName" lastName="lastName">
      <ChildComponent name="nameless" />
      <ChildComponent name="nameless" />
    </ParentComponent2>
    <ClassComponent type="type" name="name" />
  </React.StrictMode>,
)
