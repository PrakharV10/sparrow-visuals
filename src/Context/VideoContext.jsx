import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { videoDispatchFunction, initialState } from '../Reducer/videoReducer';
import { SERVERURL } from '../utils/api';
import { serverCallHandler, serverCallWithAuthorizationHeaders } from '../utils/serverCallFunction';
import { useAuth, useLoading } from './index.js';

const VideoContext = createContext();

export function VideoProvider({ children }) {
	const [videoState, videoDispatch] = useReducer(videoDispatchFunction, initialState);
	const { authState, authDispatch } = useAuth();
	const { setIsLoading } = useLoading();

	// getting all the videos from server
	useEffect(() => {
		(async () => {
			const { response } = await serverCallHandler('GET', `${SERVERURL}/videos`);
			if (response.success) {
				videoDispatch({
					type: 'SAVE_ALL_VIDEOS',
					payload: { videoData: response.data },
				});
			}
		})();
	}, []);

	const getUserDetails = async () => {
		const { response } = await serverCallWithAuthorizationHeaders(
			'GET',
			`${SERVERURL}/users`,
			authState.authToken
		);
		if (response.success) {
			authDispatch({
				type: 'SAVE_USER_DETAILS_FROM_SERVER',
				payload: { username: response.data.username, email: response.data.email },
			});
		}
	};

	const getUserAssosiatedNotes = async () => {
		const { response } = await serverCallWithAuthorizationHeaders(
			'GET',
			`${SERVERURL}/notes`,
			authState.authToken
		);
		if (response.success) {
			videoDispatch({ type: 'SAVE_NOTES_FROM_SERVER', payload: { notes: response.data } });
		}
	};

	const getUserPlaylists = async () => {
		const { response } = await serverCallWithAuthorizationHeaders(
			'GET',
			`${SERVERURL}/playlist`,
			authState.authToken
		);
		if (response.success) {
			videoDispatch({
				type: 'SAVE_PLAYLIST_FROM_SERVER',
				payload: { playlistData: response.data },
			});
		}
	};

	const getUserPopulatedLikedVideos = async () => {
		const { response } = await serverCallWithAuthorizationHeaders(
			'GET',
			`${SERVERURL}/liked`,
			authState.authToken
		);
		if (response.success) {
			videoDispatch({
				type: 'SAVE_LIKED_VIDEOS_FROM_SERVER',
				payload: { likedVideoData: response.data },
			});
		}
	};

	useEffect(() => {
		(async function () {
			if (authState.isUserLoggedIn) {
				await getUserDetails();
				await getUserAssosiatedNotes();
				await getUserPlaylists();
				await getUserPopulatedLikedVideos();
				setIsLoading(false);
			}
		})();
	}, [authState.isUserLoggedIn]);

	return (
		<VideoContext.Provider value={{ videoState, videoDispatch }}>
			{children}
		</VideoContext.Provider>
	);
}

export function useVideo() {
	return useContext(VideoContext);
}
