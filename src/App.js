import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import {
	PageNotFound,
	Account,
	Course,
	Explore,
	Home,
	Library,
	LogIn,
	Signup,
	VideoPlay,
} from './Pages';
import PrivateRoute from './PrivateRoute';
import { useAuth, useLoading, useVideo } from './Context';
import { serverCallHandler, serverCallWithAuthorizationHeaders } from './utils/serverCallFunction';
import { SERVERURL } from './utils/api';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const { authState, authDispatch } = useAuth();
	const { videoDispatch } = useVideo();
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

	useEffect(() => {
		const memory = JSON.parse(localStorage.getItem('Login'));
		if (memory?.isUserLoggedIn === true) {
			authDispatch({ type: 'LOGIN_ON_STARTUP', payload: memory });
		}
	}, [authDispatch]);

	const getUserDetails = async () => {
		const { response } = await serverCallWithAuthorizationHeaders(
			'GET',
			`${SERVERURL}/users`,
			authState.authToken
		);
		console.log('User detials : ', response);
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
		<div className="App">
			<NavBar setShowMenu={setShowMenu} showMenu={showMenu} />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/courses/:courseUrl" element={<Course />} />
					<Route path="/watch/:videoID" element={<VideoPlay />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<Signup />} />
					<PrivateRoute path="/library" element={<Library />} />
					<PrivateRoute path="/account" element={<Account />} />
				</Routes>
				<SideBar setShowMenu={setShowMenu} showMenu={showMenu} />
			</main>
		</div>
	);
}

export default App;
