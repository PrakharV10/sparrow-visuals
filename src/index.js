import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CoursePageProvider } from './Context/Video-Context';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CoursePageProvider>
        <App />
      </CoursePageProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
