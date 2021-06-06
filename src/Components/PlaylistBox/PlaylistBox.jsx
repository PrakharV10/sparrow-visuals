import React from 'react';
import './PlaylistBox.css';

import PlaylistCard from '../PlaylistCard/PlaylistCard';
import { useVideo } from '../../Context/VideoContext';

function PlaylistBox({ current }) {
	const { dispatch } = useVideo();

	return (
		<div className="playlist-box">
			<h2 className="playlist-box-head">
				{current.name}
				<svg
					onClick={() => dispatch({ type: 'DELETE_PLAYLIST', payload: current })}
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
				>
					<path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
				</svg>
			</h2>
			{current.id.length === 0 && (
				<div
					style={{
						padding: '2rem 0',
						color: 'rgba(255,255,255,0.75)',
					}}
				>
					This Playlist is Empty!!
				</div>
			)}
			{current.id.length !== 0 && (
				<div className="grid-box">
					{current.id.map((one) => {
						return (
							<div key={one}>
								<PlaylistCard current={one} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default PlaylistBox;
