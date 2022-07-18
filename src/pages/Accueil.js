import React from 'react';
import Cadres from '../components/cadres/Cadres';
import Etiquettes from '../components/etiquettes/Etiquettes';
import Footer from '../components/footer/Footer';
import MiniChart from '../components/mini-chart/MiniChart';
import Navbar from '../components/navbar/Navbar';
import Presentation from '../components/presentation/Presentation';
import PriceChange from '../components/priceChange/PriceChange';


const Accueil = () => {
    return (
        <div>

            <Navbar />
            <Presentation />
            <Etiquettes />
            <PriceChange />
            <Cadres />
            <MiniChart />
            <Footer />

        </div>
    );
};

export default Accueil;