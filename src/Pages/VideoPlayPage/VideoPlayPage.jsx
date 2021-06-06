import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import LoginModal from '../../Components/LoginModal/LoginModal';
import NoteComponent from '../../Components/NoteComponent/NoteComponent';
import PlaylistModal from '../../Components/PlaylistModal/PlaylistModal';
import { useAuth, useLoading, useVideo } from '../../Context';
import { data } from '../../Data/Data';
import { searchLikes } from '../../utils/funcs';

import './VideoPlayPage.css';

function VideoPlayPage() {
	const { videoID } = useParams();
	const { videoState, videoDispatch } = useVideo();
	const { isLoading } = useLoading();
	const [showModal, setShowModal] = useState(false);
	const [loginModal, setLoginModal] = useState(false);
	const {
		authState: { isUserLoggedIn },
	} = useAuth();

	const course = data.find((one) => one.id === videoID);

	function handleLikes() {
		if (isUserLoggedIn === true) {
			if (searchLikes(videoState, course) === false) {
				videoDispatch({ type: 'ADD_TO_LIKES', payload: course });
			} else {
				videoDispatch({ type: 'REMOVE_FROM_LIKES', payload: course });
			}
		} else {
			setLoginModal(true);
		}
	}

	function handlePlaylistButton() {
		if (isUserLoggedIn === true) {
			setShowModal(true);
		} else {
			setLoginModal(true);
		}
	}

	return (
		<div className="video-play">
			<div className="left-flex">
				<div className="video-player">
					<ReactPlayer
						width="100%"
						height="100%"
						controls
						url={`https://www.youtube.com/watch?v=${course.id}`}
					/>
				</div>
				<div className="video-details">
					<div className="details-head">
						<div className="name">{course.title}</div>
						<div className="button-group">
							<button
								onClick={handleLikes}
								className={
									searchLikes(videoState, course) === true
										? 'btn btn-trans clicked'
										: 'btn btn-trans'
								}
							>
								{searchLikes(videoState, course) ? 'LIKED' : 'LIKE'}
							</button>
							<button onClick={handlePlaylistButton} className="btn btn-trans">
								ADD TO PLAYLIST
							</button>
							<PlaylistModal
								course={course}
								showModal={showModal}
								setShowModal={setShowModal}
							/>
						</div>
						<LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
					</div>
					<div className="channel">
						<img src={course.channelImage} alt="avatar" className="avatar sm" />
						{course.channelName}
					</div>
					<div className="caption">{course.description}</div>
				</div>
			</div>

			<div className="right-flex">
				<NoteComponent course={course} />
			</div>
		</div>
	);
}

export default VideoPlayPage;
