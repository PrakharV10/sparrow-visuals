import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import LibraryPage from './Pages/LibraryPage/LibraryPage';
import CoursePage from './Pages/CoursePage/CoursePage';
import VideoPlayPage from './Pages/VideoPlayPage/VideoPlayPage';
import NotFoundPage from './Pages/404Page/404Page';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import HomePage from './Pages/HomePage/HomePage.jsx';
import LogInPage from './Pages/LoginPage/LogInPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import PrivateRoute from './PrivateRoute';
import { useAuth } from './Context/Video-Context';
import AccountPage from './Pages/AccountPage/AccountPage';

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const { dispatch } = useAuth();


  useEffect(() => {
    const memory = JSON.parse(localStorage.getItem("Login"))
    if (memory?.isUserLoggedIn === true) {
      dispatch({ type: "LOGIN_ON_STARTUP", payload: memory })
    }
  }, [dispatch])

  return (
    <div className="App">
      <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:courseUrl" element={<CoursePage />} />
          <Route path="/watch/:videoID" element={<VideoPlayPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <PrivateRoute path="/library" element={<LibraryPage />} />
          <PrivateRoute path="/account" element={<AccountPage />} />
        </Routes>
        <SideBar setShowMenu={setShowMenu} showMenu={showMenu} />
      </main>
    </div>
  );
}

export default App;
