import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import TodoContainer from "./classBased/components/TodoContainer"
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>, document.getElementById('root'),
);
