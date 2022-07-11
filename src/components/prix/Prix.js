import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Prix = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/elrond-erd-2/market_chart?vs_currency=USD&days=1&interval=daily").then((res) => setData(res.data.prices[1][1]))
    });

    let prix = parseFloat(data).toFixed(2);

    return (
        <div> {prix}$ </div>

    )

}

export default Prix;

