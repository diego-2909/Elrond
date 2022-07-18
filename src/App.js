import logo from './logo.svg';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Presentation from './components/presentation/Presentation';
import Prix from './components/prix/Prix';
import Cadres from './components/cadres/Cadres';
import Etiquettes from './components/etiquettes/Etiquettes';
import PriceChange from './components/priceChange/PriceChange';
import MiniChart from './components/mini-chart/MiniChart';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Accueil from './pages/Accueil';
import Chart from './pages/Chart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/EGLD" element={<About />} />
        <Route path="/Charts" element={<Chart />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
