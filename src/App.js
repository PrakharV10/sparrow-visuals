import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import { useRoute } from './Context/Video-Context';
import SearchPage from './Pages/SearchPage/SearchPage';
import VideoPlayPage from './Pages/VideoPlayPage/VideoPlayPage';

function App() {

  const { route } = useRoute();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <NavBar setShowMenu={setShowMenu} showMenu={showMenu} />

      <main>
        {route === "Search" && < SearchPage />}
        {route === "VideoPlay" && <VideoPlayPage />}
        <SideBar showMenu={showMenu} />
      </main>
    </div>
  );
}

export default App;
