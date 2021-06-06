import React from 'react';
import './loader.css';

function Loader() {
	return (
		<div className="loader" id="container">
			<svg viewBox="0 0 100 100">
				<defs>
					<filter id="shadow">
						<feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#fc6767" />
					</filter>
				</defs>
				<circle
					id="spinner"
					style={{
						fill: 'transparent',
						stroke: '#FF56A2',
						strokeWidth: '7px',
						strokeLinecap: 'round',
						filter: 'url(#shadow)',
					}}
					cx="50"
					cy="50"
					r="45"
				/>
			</svg>
		</div>
	);
}

export default Loader;
