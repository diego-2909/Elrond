import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./PriceChange.css"

const PriceChange = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=elrond-erd-2&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y").then((res) => setData(res.data[0]))
    });

    let pricechange24h = parseFloat(data.price_change_percentage_24h_in_currency).toFixed(2);
    let pricechange7j = parseFloat(data.price_change_percentage_7d_in_currency).toFixed(2);
    let pricechange30j = parseFloat(data.price_change_percentage_30d_in_currency).toFixed(2);
    let pricechange1y = parseFloat(data.price_change_percentage_1y_in_currency).toFixed(2);
    let total_supply = parseInt(data.total_supply);



    function isPositif(x) {
        if (x < 0) {
            return false;
        }
        else {
            return true
        }
    }



    return (
        <div className='Pricechange'>

            <div className="liste_price_change">

                <div className="left-price">

                    <div className="bouton_price" style={isPositif(pricechange24h) ? { background: "green " } : { background: "#ea3943" }}>
                        <div className="triangle-code" style={isPositif(pricechange24h) ? { display: 'none' } : {}}></div>
                        <div className="triangle-code-up" style={isPositif(pricechange24h) ? {} : { display: 'none' }}></div>
                        <div className="pourcentage">
                            <h5>{pricechange24h}%</h5>
                            <p>24h</p>
                        </div>

                    </div>
                    <div className="bouton_price" style={isPositif(pricechange7j) ? { background: "green " } : { background: "#ea3943" }}>
                        <div className="triangle-code" style={isPositif(pricechange7j) ? { display: 'none' } : {}}></div>
                        <div className="triangle-code-up" style={isPositif(pricechange7j) ? {} : { display: 'none' }}></div>
                        <div className="pourcentage">
                            <h5>{pricechange7j}%</h5>
                            <p>7j</p>
                        </div>

                    </div>


                </div>

                <div className="right-price">

                    <div className="bouton_price" style={isPositif(pricechange30j) ? { background: "green " } : { background: "#ea3943" }}>
                        <div className="triangle-code" style={isPositif(pricechange30j) ? { display: 'none' } : {}}></div>
                        <div className="triangle-code-up" style={isPositif(pricechange30j) ? {} : { display: 'none' }}></div>
                        <div className="pourcentage">
                            <h5>{pricechange30j}%</h5>
                            <p>30j</p>
                        </div>

                    </div>


                    <div className="bouton_price" style={isPositif(pricechange1y) ? { background: "green " } : { background: "#ea3943" }}>
                        <div className="triangle-code" style={isPositif(pricechange1y) ? { display: 'none' } : {}}></div>
                        <div className="triangle-code-up" style={isPositif(pricechange1y) ? {} : { display: 'none' }}></div>
                        <div className="pourcentage">
                            <h5>{pricechange1y}%</h5>
                            <p>1y</p>
                        </div>

                    </div>



                </div>






            </div>




        </div >
    );
};

export default PriceChange;