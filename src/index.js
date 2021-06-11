import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// default data
const DATA = [
  { id: "todo-0", name: "Add a Task", completed: true },
  { id: "todo-1", name: "Remove a Task", completed: false },
  { id: "todo-2", name: "Edit a Task", completed: false },
  { id: "todo-3", name: "Refresh Page", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
