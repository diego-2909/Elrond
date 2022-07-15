import React from 'react';
import world from "../../media/world_night.png";
import "./Presentation.css"
import Bloomberg from "../../media/Bloomberg.svg"
import forbes from "../../media/Forbes.svg"
import Inc from "../../media/Inc.svg"
import Lebloc from "../../media/Lebloc.svg"
import Yahoo from "../../media/YahooFinance.svg"



const Presentation = () => {
    return (
        <div className='presentation'>


            <div className="image-presentation">
                <img className="logo-world" src={world} alt="monde" unselectable="on" />
                <h1 className="titre-presentation"> Elrond Network</h1>
                <p className='p-presentation'><br />( Site non officiel )</p>


            </div>



            <div className="presse">
                <ul>
                    <li><img className="image-presse logo-margin" src={Inc} alt="inc logo" ></img></li>
                    <li><img className="image-presse logo-margin" src={forbes} alt="forbes logo"></img></li>
                    <li ><img className="image-presse " src={Bloomberg} alt="Bloomberg logo" ></img></li>
                    <li><img className="image-presse logo-LeBloc" src={Lebloc} alt="lebloc logo"></img></li>
                    <li><img className="image-presse logo-Yahoo" src={Yahoo} alt="lebloc logo"></img></li>



                </ul>

            </div>




        </div >
    );
};

export default Presentation;