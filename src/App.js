import { useState } from 'react';
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

function App() {
	const [showMenu, setShowMenu] = useState(false);

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
