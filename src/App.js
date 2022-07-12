import logo from './logo.svg';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Presentation from './components/presentation/Presentation';
import Prix from './components/prix/Prix';
import Cadres from './components/cadres/Cadres';
import Etiquettes from './components/etiquettes/Etiquettes';

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Cadres />
      <Etiquettes />
    </div>

  );
}

export default App;
