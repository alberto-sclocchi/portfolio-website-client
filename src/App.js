import './App.css';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from './components/core/PortfolioPage';
import NavBar from './components/core/NavBar';
import UpArrow from './components/core/UpArrow';
import Footer from './components/core/Footer';
import { MessageProvider } from './components/message/context/MessageContext.context';
import DarkMode from './components/core/DarkMode';
import { useEffect, useState } from 'react';

function App() {

    // Load from localStorage, default to true if not set
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('isDarkMode');
    return stored !== null ? JSON.parse(stored) : true;
  });

  // Save to localStorage whenever isDarkMode changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
  return (
    <div className="App">
      <NavBar isDarkMode={isDarkMode} />
      <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <MessageProvider>
        <Routes>
          <Route  exact path="*" element={<PortfolioPage isDarkMode={isDarkMode}/>}/>
        </Routes>
      </MessageProvider>
      <Footer isDarkMode={isDarkMode} />
      <UpArrow />
    </div>
  );
}

export default App;
