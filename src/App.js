import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <SearchPage />
      </main>
    </div>
  );
}

export default App;
