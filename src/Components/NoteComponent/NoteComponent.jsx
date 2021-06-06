import React, { useState } from 'react';
import { useAuth, useVideo } from '../../Context';
import ReactMarkdown from 'react-markdown';

import './NoteComponent.css';
import LoginModal from '../LoginModal/LoginModal';
import { serverCallWithAuthorizationHeaders } from '../../utils/serverCallFunction';
import { SERVERURL } from '../../utils/api';
import { searchMyNotes } from '../../utils/util';

function NoteComponent({ currentVideo }) {
	const { videoState, videoDispatch } = useVideo();
	const [input, setInput] = useState('');
	const [loginModal, setLoginModal] = useState(false);
	const {
		authState: { isUserLoggedIn, authToken },
	} = useAuth();

	async function serverAddNewNote(note) {
		const { response } = await serverCallWithAuthorizationHeaders(
			'POST',
			`${SERVERURL}/notes`,
			authToken,
			{
				note,
				videoId: currentVideo._id,
			}
		);

		if (response.success) {
			if (searchMyNotes(videoState.myNotes, response.data)) {
				videoDispatch({ type: 'ADD_NOTE_TO_OBJECT', payload: { note: response.data } });
			} else
				videoDispatch({ type: 'CREATE_NEW_NOTE_OBJECT', payload: { note: response.data } });
			setInput('');
		} else {
			alert('ERROR ADDING NOTE. Try again');
		}
	}

	function submitHandler(e) {
		e.preventDefault();
		if (isUserLoggedIn) {
			if (input.trim().length === 0) return;
			serverAddNewNote(input);
		} else {
			setLoginModal(true);
		}
	}

	const currentNote = videoState.myNotes.find((item) => item.videoId === currentVideo._id);

	return (
		<div className="notes-container">
			<div className="note-header">Take a Note!</div>
			{currentNote && (
				<div className="note-display">
					{currentNote.texts.map((note, index) => {
						return (
							<div className="one-note" key={index}>
								<ReactMarkdown source={note} />
							</div>
						);
					})}
				</div>
			)}

			<form onSubmit={(e) => submitHandler(e)} className="note-input">
				<input
					placeholder="Type here.."
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button style={{ display: 'none' }} type="submit"></button>
				<LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
			</form>
		</div>
	);
}

export default NoteComponent;
