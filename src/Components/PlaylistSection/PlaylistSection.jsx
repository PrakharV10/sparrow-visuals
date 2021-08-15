import React from 'react';
import { useVideo } from '../../Context/VideoContext';
import PlaylistBox from '../PlaylistBox/PlaylistBox';
import './PlaylistSection.css';

function PlaylistSection() {
	const { videoState } = useVideo();

	return (
		<div>
			<h1 className="section-heading">PLAYLISTS</h1>
			<div className="playlist-container">
				{videoState.playlists.map((item) => {
					return (
						<div key={item._id}>
							<PlaylistBox currentPlaylist={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default PlaylistSection;
