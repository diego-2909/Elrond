import React, { useState } from 'react';
import "./Navbar.css";
import photo from "../../media/elrond_logo.png";
import Prix from '../prix/Prix';
import { Link } from 'react-router-dom';

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

    if (window.innerWidth > 960) {
        console.log('salut');
    }


    return (
        <div className='navbar'>

            <div className="navbar-left">
                <Link to="/"><img className="logo-elrond" src={photo} alt="logo_elrond" /></Link>

            </div>

            <div className='navbar-right'>
                <ul>
                    <li className='link'> <Link to="/EGLD" className='lien'>Qu'est ce que EGLD ?</Link></li>
                    <li className='link'> <Link to="/Charts" className='lien'>Chart</Link></li>
                    <li className='link lien'><a href='https://elrond.com/' className='lien'>Site Officiel</a></li>
                    <li className='prix-egld'>EGLD &nbsp;<Prix /> </li>



                </ul>

            </div>

            <div className='burger-menu' onClick={updateMenu} >
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>

            <div className={menu_class}>
                <ul className="categories-navbar-vertical">

                    <li className='li-vertical'> <Link to="/" className=' link lien-navbar' >Accueil</Link></li>
                    <li className='li-vertical' > <Link to="/EGLD" className=' link lien-navbar' >Qu'est ce que EGLD ?</Link></li>
                    <li className='li-vertical'> <Link to="/Charts" className='link lien-navbar'>Chart</Link></li>
                    <li className='li-vertical'><a href='https://elrond.com/' className=' link lien-navbar'>Site Officiel</a></li>

                </ul>

            </div>



        </div>
    );
};

export default Navbar;