import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { VideoProvider } from './Context/Video-Context';

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider >
      <Router>
        <App />
      </Router>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
