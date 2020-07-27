import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="HenriFlix" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;