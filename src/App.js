import { useState } from 'react';
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

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/courses/:courseUrl" element={<CoursePage />} />
          <Route path="/watch" element={<VideoPlayPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path = "*" element={<NotFoundPage />} />
        </Routes>
        <SideBar setShowMenu={setShowMenu} showMenu={showMenu} />
      </main>
    </div>
  );
}

export default App;
