import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Etiquettes = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=elrond-erd-2&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y").then((res) => setData(res.data[0]))
    });

    let marketcap = numberWithCommas(data.market_cap) + " $";
    let volume = numberWithCommas(data.total_volume) + " $";
    let circulating = numberWithCommas(data.circulating_supply);
    let total_supply = numberWithCommas(data.total_supply);

    let pricechange24h = data.price_change_percentage_24h_in_currency.toFixed(2) + " %";
    let pricechange7j = data.price_change_percentage_7d_in_currency.toFixed(2) + " %";
    let pricechange30j = data.price_change_percentage_30d_in_currency.toFixed(2) + " %";
    let pricechange1y = data.price_change_percentage_1y_in_currency.toFixed(2) + " %";

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
    }


    return (
        <div>
            {marketcap}<br />
            {volume}<br />
            {circulating}<br />
            {total_supply}<br />
            {pricechange7j}<br />

        </div>

    )
};

export default Etiquettes;