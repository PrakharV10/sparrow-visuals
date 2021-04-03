import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import HomePage from './Pages/HomePage/HomePage';
import CoursePage from './Pages/CoursePage/CoursePage';
import VideoPlayPage from './Pages/VideoPlayPage/VideoPlayPage';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<HomePage />} />
          <Route path="/courses/:courseUrl" element={<CoursePage />} />
          <Route path="/watch" element={<VideoPlayPage />} />
        </Routes>
        <SideBar showMenu={showMenu} />
      </main>
    </div>
  );
}

export default App;
