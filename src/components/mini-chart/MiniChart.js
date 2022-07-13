import React, { PureComponent } from 'react';
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import "./MiniChart.css"

import axios from 'axios';







const MiniChart = () => {

    const [apiData, setApiData] = useState(null)

    // useEffect runs when component mouths and sets the state when request completes
    useEffect(() => {
        axios("https://api.coingecko.com/api/v3/coins/elrond-erd-2/market_chart?vs_currency=usd&days=31&interval=daily")
            .then(data => setApiData(data.data.prices))
    }, [])

    let apiPrix = [];

    for (let i in apiData) {
        apiPrix.push(apiData[i][1])
    }


    let apiTemps = [];

    for (let i in apiData) {
        apiTemps.push(apiData[i][0])
    }

    for (let i in apiTemps) {
        let unixTimestamp = apiTemps[i];
        let dateObject = new Date(unixTimestamp);
        let objet = dateObject.toLocaleString("en-US", { day: "numeric" }) + " " + dateObject.toLocaleString("fr-FR", { month: "long" });
        apiTemps[i] = objet
    }


    const data2 = {
        labels: apiTemps,
        datasets: [
            {
                label: "Prix de EGLD en $",
                data: apiData,
                color: "#1B46C2",
                backgroundColor: "#1B46C2",
                borderColor: "#1B46C2",
                maintainAspectRatio: "false"
            },
        ],
    };



    return (

        <div className="minichart">
            <h2> Évolution du prix de l'EGLD ces 30 derniers jours</h2>

            <div className="cadres-graphique">
                <Line className="cadre-graphique" data={data2} />
            </div>

        </div>

    );
}
export default MiniChart;