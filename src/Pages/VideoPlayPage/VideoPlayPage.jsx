import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/LoaderSpinner/Loader';
import LoginModal from '../../Components/LoginModal/LoginModal';
import NoteComponent from '../../Components/NoteComponent/NoteComponent';
import PlaylistModal from '../../Components/PlaylistModal/PlaylistModal';
import { useAuth, useLoading, useVideo } from '../../Context';
import { SERVERURL } from '../../utils/api';
import { serverCallWithAuthorizationHeaders } from '../../utils/serverCallFunction';
import { searchLikes } from '../../utils/util';

import './VideoPlayPage.css';

function VideoPlayPage() {
	const { videoID } = useParams();
	const { videoState, videoDispatch } = useVideo();
	const { isLoading } = useLoading();
	const [showModal, setShowModal] = useState(false);
	const [loginModal, setLoginModal] = useState(false);
	const {
		authState: { isUserLoggedIn, authToken },
	} = useAuth();

	// Get the Current Video Object
	const currentVideo = videoState.videoData.find((one) => one._id === videoID);

	async function serverAddToLikedVideo() {
		const { response } = await serverCallWithAuthorizationHeaders(
			'POST',
			`${SERVERURL}/liked`,
			authToken,
			{
				videoId: currentVideo._id,
			}
		);
		if (response.success) {
			videoDispatch({ type: 'ADD_TO_LIKES', payload: { video: currentVideo } });
		} else {
			alert('ERROR OCCURED. Please Try Again!');
		}
	}

	async function serverDeleteFromLikedVideo() {
		const { response } = await serverCallWithAuthorizationHeaders(
			'DELETE',
			`${SERVERURL}/liked`,
			authToken,
			{
				videoId: currentVideo._id,
			}
		);
		if (response.success) {
			videoDispatch({ type: 'REMOVE_FROM_LIKES', payload: currentVideo });
		}
	}

	function handleLikes() {
		if (isUserLoggedIn) {
			if (searchLikes(videoState.likedVideo, currentVideo) === false) {
				serverAddToLikedVideo();
			} else {
				serverDeleteFromLikedVideo();
			}
		} else {
			setLoginModal(true);
		}
	}

	function handlePlaylistButton() {
		if (isUserLoggedIn) {
			setShowModal(true);
		} else {
			setLoginModal(true);
		}
	}

	return (
		<div className="video-play">
			{!isLoading && (
				<>
					<div className="left-flex">
						<div className="video-player">
							<ReactPlayer
								width="100%"
								height="100%"
								controls
								url={`https://www.youtube.com/watch?v=${currentVideo._id}`}
							/>
						</div>
						<div className="video-details">
							<div className="details-head">
								<div className="name">{currentVideo.title}</div>
								<div className="button-group">
									<button
										onClick={handleLikes}
										className={
											searchLikes(videoState.likedVideo, currentVideo) ===
											true
												? 'btn btn-trans clicked'
												: 'btn btn-trans'
										}
									>
										{searchLikes(videoState.likedVideo, currentVideo)
											? 'LIKED'
											: 'LIKE'}
									</button>
									<button
										onClick={handlePlaylistButton}
										className="btn btn-trans"
									>
										ADD TO PLAYLIST
									</button>
									<PlaylistModal
										currentVideo={currentVideo}
										showModal={showModal}
										setShowModal={setShowModal}
									/>
								</div>
								<LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
							</div>
							<div className="channel">
								<img
									src={currentVideo.channelImage}
									alt="avatar"
									className="avatar sm"
								/>
								{currentVideo.channelName}
							</div>
							<div className="caption">{currentVideo.description}</div>
						</div>
					</div>

					<div className="right-flex">
						<NoteComponent currentVideo={currentVideo} />
					</div>
				</>
			)}

			{isLoading && (
				<div
					style={{
						height: '80vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Loader />
				</div>
			)}
		</div>
	);
}

export default VideoPlayPage;
