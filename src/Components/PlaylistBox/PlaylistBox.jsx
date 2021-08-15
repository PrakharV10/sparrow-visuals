import React from 'react';
import './PlaylistBox.css';

import PlaylistCard from '../PlaylistCard/PlaylistCard';
import { useVideo } from '../../Context/VideoContext';
import { serverCallWithAuthorizationHeaders } from '../../utils/serverCallFunction';
import { SERVERURL } from '../../utils/api';
import { useAuth } from '../../Context';

function PlaylistBox({ currentPlaylist }) {
	const { videoDispatch } = useVideo();
	const { authState } = useAuth();

	async function serverDeletePlaylist() {
		const { response } = await serverCallWithAuthorizationHeaders(
			'DELETE',
			`${SERVERURL}/playlist`,
			authState.authToken,
			{
				playlistId: currentPlaylist._id,
			}
		);

		if (response.success) {
			videoDispatch({ type: 'DELETE_PLAYLIST', payload: { playlist: currentPlaylist } });
		}
	}

	return (
		<div className="playlist-box">
			<h2 className="playlist-box-head">
				{currentPlaylist.playlistName}
				<svg
					onClick={() => serverDeletePlaylist()}
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
				>
					<path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
				</svg>
			</h2>
			{currentPlaylist.videos.length === 0 && (
				<div
					style={{
						padding: '2rem 0',
						color: 'rgba(255,255,255,0.75)',
					}}
				>
					This Playlist is Empty!!
				</div>
			)}
			{currentPlaylist.videos.length !== 0 && (
				<div className="grid-box">
					{currentPlaylist.videos.map((one) => {
						return (
							<div key={one._id}>
								<PlaylistCard currentVideo={one} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default PlaylistBox;
