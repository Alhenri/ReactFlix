import React, { useState } from 'react'
import PageDefault from '../../components/PageDefault'
import { Link } from 'react-router-dom'


function CadastroCategoria(){

    const [categorias, setCategorias] = useState(['teste'])
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Nova categoria') 
    // O useState retorna a string colocada e uma função, ele
    //ta sendo usado como alteração dinâmica da informação

    // Os [] na declaração da variável 'abre' o objeto retornado pelo useState


    return(
        <PageDefault>
            <h1>Cadastro de categoria: {nomeDaCategoria} </h1>

            <form>
                {/* State: Contém dados  */}
                <label>
                    Nome da Categoria:
                    <input 
                        type="text"
                        value={nomeDaCategoria}
                        onChange={ infoOnChange => {
                            //infoOnChange é um objeto que retornar informações sobre a chamada da função
                            //target é o alvo da ação
                            setNomeDaCategoria(infoOnChange.target.value)
                            // O valor não é renderizado normalmente porque o react reescreve a pagina
                            //com o valor inicial
                        }}
                        onClick={ infoOnClick =>{
                            infoOnClick.target.value = ''
                        }}
                    />
                </label>

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria) =>{
                    return(
                        <li>
                            {categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir pra home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;