import React from 'react';
import "./Navbar.css";
import photo from "../../media/elrond_logo.png";
import Prix from '../prix/Prix';

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className="navbar-left">
                <img className="logo-elrond" src={photo} alt="logo_elrond" />

            </div>

            <div className='navbar-right'>
                <ul>
                    <li> Qu'est ce que EGLD ?</li>
                    <li> Chart </li>
                    <li> Site Officiel</li>
                    <li className='prix-egld'>EGLD &nbsp;<Prix /> </li>

                </ul>

            </div>



        </div>
    );
};

export default Navbar;