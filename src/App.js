import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from './components/core/PortfolioPage';
import NavBar from './components/core/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route  exact path="/" element={<PortfolioPage />}/>
      </Routes>
    </div>
  );
}

export default App;
