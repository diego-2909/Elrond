import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <h5> Catégories :</h5>
            <ul className="categories-footer">

                <li className='link'> <Link to="/" className='lien-footer' >Accueil</Link></li>
                <li className='link'> <Link to="/EGLD" className='lien-footer' >Qu'est ce que EGLD ?</Link></li>
                <li className='link'> <Link to="/Charts" className='lien-footer'>Chart</Link></li>
                <li className='link'><a href='https://elrond.com/' className='lien-footer'>Site Officiel</a></li>

            </ul>

            <div className="trait-separation"></div>
            <p className='information'>Site <span className='underline'> non officiel</span> et projet <span className='underline'> non affilié</span>  à Elrond Network.<br /> <br /> Projet réalisé par Diego Cortès. </p>
        </div>
    );
};

export default Footer;