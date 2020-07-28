import React from 'react'
import PageDefault from '../../../components/PageDefault/index'
import { Link } from 'react-router-dom'


function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Cadastro de categoria</h1>

            <Link to='/'>
                Ir pra home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;