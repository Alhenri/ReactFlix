import React from 'react'
import PageDefault from '../../../components/PageDefault/index'
import { Link } from 'react-router-dom'


function CadastroVideo(){
    return(
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <Link to='/Cadastro/Categoria'>
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;