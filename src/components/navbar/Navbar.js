import React, { useState } from 'react';
import "./Navbar.css";
import photo from "../../media/elrond_logo.png";
import Prix from '../prix/Prix';

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
            setIsMenuClicked(true);
        }
        else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden")
            setIsMenuClicked(false);
        }

    }


    return (
        <div className='navbar'>

            <div className="navbar-left">
                <img className="logo-elrond" src={photo} alt="logo_elrond" />

            </div>

            <div className='navbar-right'>
                <ul>
                    <li className='link'> Qu'est ce que EGLD ?</li>
                    <li className='link'> Chart </li>
                    <li className='link'> Site Officiel</li>
                    <li className='prix-egld'>EGLD &nbsp;<Prix /> </li>



                </ul>

            </div>

            <div className='burger-menu' onClick={updateMenu} >
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>



        </div>
    );
};

export default Navbar;