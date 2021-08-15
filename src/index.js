import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { VideoProvider } from './Context/VideoContext';
import { IsLoadingProvider } from './Context/IsLoadingContext';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<IsLoadingProvider>
				<AuthProvider>
					<VideoProvider>
						<App />
					</VideoProvider>
				</AuthProvider>
			</IsLoadingProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
