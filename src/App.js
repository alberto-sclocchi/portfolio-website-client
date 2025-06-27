import './App.css';
import { Route, Routes } from 'react-router-dom';
import PortfolioPage from './components/core/PortfolioPage';
import NavBar from './components/core/NavBar';
import UpArrow from './components/core/UpArrow';
import Footer from './components/core/Footer';
import { MessageProvider } from './components/message/context/MessageContext.context';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MessageProvider>
        <Routes>
          <Route  exact path="*" element={<PortfolioPage />}/>
        </Routes>
      </MessageProvider>
      <Footer />
      <UpArrow />
    </div>
  );
}

export default App;
