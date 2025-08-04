import './App.css';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from './components/core/PortfolioPage';
import NavBar from './components/core/NavBar';
import UpArrow from './components/core/UpArrow';
import Footer from './components/core/Footer';
import { MessageProvider } from './components/message/context/MessageContext.context';
import DarkMode from './components/core/DarkMode';
import { useState } from 'react';

function App() {

   const [ isDarkMode, setIsDarkMode ] = useState(true); 
  
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
