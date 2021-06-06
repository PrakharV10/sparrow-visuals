import React from 'react';
import { useVideo } from '../../Context/VideoContext';
import PlaylistBox from '../PlaylistBox/PlaylistBox';
import './PlaylistSection.css';

function PlaylistSection() {
	const { state } = useVideo();

	return (
		<div>
			<h1 className="section-heading">PLAYLISTS</h1>
			<div className="playlist-container">
				{state.playlists.map((item) => {
					return (
						<div key={item.name}>
							<PlaylistBox current={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default PlaylistSection;
