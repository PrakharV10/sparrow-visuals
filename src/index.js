import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, VideoProvider } from './Context/Video-Context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider >
          <App />
        </VideoProvider>
      </AuthProvider> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
