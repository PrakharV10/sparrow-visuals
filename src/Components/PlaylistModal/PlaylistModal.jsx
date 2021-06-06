import React, { useState } from 'react';
import { useVideo } from '../../Context/VideoContext';
import { searchPlaylistsForID } from '../../utils/funcs';
import Toast from '../Toast/Toast';
import './PlaylistModal.css';

function PlaylistModal({ course, showModal, setShowModal }) {
	const [modalInput, setModalInput] = useState('');
	const [toast, setToast] = useState(false);
	const { videoState, videoDispatch } = useVideo();

	function addPlaylist(e) {
		e.preventDefault();
		if (modalInput.trim().length === 0) return;
		videoDispatch({ type: 'ADD_NEW_PLAYLIST', payload: modalInput });
		setModalInput('');
	}

	function checkBoxHandler(item) {
		if (searchPlaylistsForID(item.id, course.id) === true) {
			videoDispatch({
				type: 'REMOVE_FROM_PLAYLIST',
				payload: { name: item.name, id: course.id },
			});
			setToast({ action: 'Remov', show: true });
			setTimeout(() => {
				setToast({ action: 'Remov', show: false });
			}, 2000);
		} else {
			videoDispatch({ type: 'ADD_TO_PLAYLIST', payload: { name: item.name, id: course.id } });
			setToast({ action: 'Add', show: true });
			setTimeout(() => {
				setToast({ action: 'Add', show: false });
			}, 2000);
		}
	}

	console.log(videoState.playlists);

	return (
		<div
			onClick={() => setShowModal(false)}
			className={showModal ? 'modal-bg' : 'modal-bg hide'}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="modal"
			>
				<div className="modal-heading">
					<div className="text">Add to Playlist</div>
					<svg
						onClick={() => setShowModal(false)}
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
					>
						<path
							d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
							fill="currentColor"
						></path>
					</svg>
				</div>
				<div className="modal-options">
					{videoState.playlists.map((item, index) => {
						return (
							<div key={index} className="checkbox">
								<label htmlFor={`checkBox${index}`}>
									<input
										onChange={() => checkBoxHandler(item)}
										type="checkbox"
										name="checkbox"
										id={`checkBox${index}`}
										checked={searchPlaylistsForID(item.id, course.id)}
									/>
									{item.name}
								</label>
							</div>
						);
					})}
				</div>
				<form onSubmit={(e) => addPlaylist(e)} className="modal-add">
					<input
						value={modalInput}
						onChange={(e) => setModalInput(e.target.value)}
						type="text"
						placeholder="New PlayList.."
					/>
					<button type="submit">ADD</button>
				</form>
			</div>
			<Toast toast={toast} setToast={setToast} />
		</div>
	);
}

export default PlaylistModal;
