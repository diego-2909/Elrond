import React from 'react';
import "./Cadre.css"
import shield from "../../media/shield.svg"
import block from "../../media/block-top.svg"

const Cadres = () => {
    return (
        <div className="cadres">
            <div className="phrase-cadres">
                <p>Elrond est une blockchain publique à haut débit visant à fournir sécurité, efficacité, évolutivité et interopérabilité, au-delà de l'état de l'art actuel. Les deux caractéristiques les plus importantes qui distinguent Elrond sont l'Adaptive State Sharding et le mécanisme de consensus Secure Proof of Stake.</p>

            </div>

            <div className="bloc-cadre">

                <div className="cadre">
                    <div className="petitcadre" id="cadre1">
                        <div className="rond">
                            <img src={block} alt="block" />
                        </div>
                        <div className="contenu">
                            <h4 className='titre-cadre' id="titre1">Adaptive State Sharding</h4>
                            <h2>Hautement Scalable</h2>
                            <div className="trait-cadre" id="trait1"></div>
                            <p>Adaptive State Sharding apporte une amélioration de 1000 fois le débit par rapport aux itérations précédentes de la blockchain en permettant le traitement parallèle des transactions.</p>
                            <span className='bouton-cadre' id="bouton1"> En savoir plus <br /> (Site Officiel)</span>

                        </div>

                    </div>


                </div>

                <div className="cadre">
                    <div className="petitcadre" id="cadre2">
                        <div className="rond">
                            <img src={shield} alt="shield" />
                        </div>
                        <div className="contenu">
                            <h4 className='titre-cadre' id="titre2">Secure Proof of Stake</h4>
                            <h2>Sûr et eficace</h2>
                            <div className="trait-cadre" id="trait2"></div>
                            <p>Nous proposons une nouvelle approche consensuelle appelée Secure Proof of Stake qui est rapide et garantit une sécurité à long terme et une équité distribuée, tout en éliminant le besoin d'algorithmes PoW gourmands en énergie.</p>
                            <span className='bouton-cadre' id="bouton2"> En savoir plus <br /> (Site Officiel)</span>
                        </div>
                    </div>


                </div>


            </div>


        </div>

    );
};

export default Cadres;