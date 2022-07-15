import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <h5> Catégories :</h5>
            <ul className="categories-footer">

                <li className='link'>Accueil</li>
                <li className='link'> Qu'est ce que EGLD ?</li>
                <li className='link'> Chart </li>
                <li className='link'> Site Officiel</li>

            </ul>
            <div className="trait-separation"></div>
            <p className='information'>Site <span className='underline'> non officiel </span>et projet <span className='underline'> non affilié</span>  à Elrond Network.<br /> <br /> Projet réalisé par Diego Cortès. </p>
        </div>
    );
};

export default Footer;