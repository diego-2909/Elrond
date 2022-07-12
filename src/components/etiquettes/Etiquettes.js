import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Etiquettes.css"

const Etiquettes = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=elrond-erd-2&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y").then((res) => setData(res.data[0]))
    });

    let marketcap = numberWithCommas(parseInt(data.market_cap)) + "$";
    let volume = numberWithCommas(parseInt(data.total_volume)) + "$";
    let circulating = numberWithCommas(parseInt(data.circulating_supply));
    let total_supply = numberWithCommas(parseInt(data.total_supply));


    function numberWithCommas(x) {
        return x.toString().replace(/.(?=(?:.{3})+$)/g, '$& ');
    }


    return (
        <div className='etiquettes'>
            <div className="liste-cadres">
                <div className='left-cadre'>
                    <div className='etiquette'>
                        <h3>{marketcap}</h3>
                        <h4>Market Cap</h4>

                    </div>
                    <div className='etiquette'>
                        <h3>{volume}</h3>
                        <h4>Volume(24h)</h4>

                    </div>

                </div>

                <div className="right-cadre">

                    <div className='etiquette'>
                        <h3>{circulating}</h3>
                        <h4>En circulation</h4>

                    </div>
                    <div className='etiquette'>
                        <h3>{total_supply}</h3>
                        <h4>Total</h4>

                    </div>


                </div>



            </div>


        </div>


    )
};

export default Etiquettes;