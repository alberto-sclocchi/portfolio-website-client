import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from './components/core/PortfolioPage';
import NavBar from './components/core/NavBar';
import UpArrow from './components/core/UpArrow';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route  exact path="/" element={<PortfolioPage />}/>
      </Routes>
      <UpArrow />
    </div>
  );
}

export default App;
