import React from 'react';
import Footer from '../components/footer/Footer';
import MiniChart from '../components/mini-chart/MiniChart';
import Navbar from '../components/navbar/Navbar';
import reactTradingviewWidget from 'react-tradingview-widget';
import TradingViewWidget from 'react-tradingview-widget';
import "../components/prix/Prix.css"

const Chart = () => {
    return (
        <div>
            <Navbar />
            <div className="dark">
                <TradingViewWidget
                    autosize

                    symbol="EGLDUSDT"
                    locale="fr"
                    theme='DARK'
                />

            </div>

        </div>
    );
};

export default Chart;