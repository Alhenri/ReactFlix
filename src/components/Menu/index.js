import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom' //É um componente que atualiza somente o conteudo da page
// Link é usado em aplicações SPA e na aplicação troca o 'href' do HTML por 'to'

function Menu() {
    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="HenriFlix" />
            </Link>

            <Button as={Link} to="/Cadastro/Video">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;