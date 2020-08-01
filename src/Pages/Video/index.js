import React, { useEffect, useState } from 'react'
import PageDefault from '../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import FormField from '../../components/FormField'
import Button from '../../components/Button'
import videosRepository from '../../repositories/videos'
import categoriasRepository from '../../repositories/categorias'

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({titulo}) => titulo)

    const { handleChange, values } = useForm({
        titulo: 'inutilismo',
        url: 'https://www.youtube.com/watch?v=_jqYXrv2Kdw',
        categoria: 'Front End',
    });

    useEffect(() => {
        categoriasRepository.getAll()
        .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        })
    }, [])



    return(
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault(); //nao att a pagina

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria
                })

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
                })
                .then(() => {
                    console.log("cadastrado com sucesso")
                    history.push('/')
                })//essa função leva a gente pra outro endereço
            }}
            >

            <FormField
                label="Titulo do video"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
            />

            <FormField
                label="URL"
                name="url"
                value={values.url}
                onChange={handleChange}
            />

            <FormField
                label="categoria"
                name="categoria"
                value={values.categoria}
                onChange={handleChange}
                suggestions={categoryTitles}
            />

            <Button>Cadastrar</Button>
            
            </form>

            <Link to='/Cadastro/Categoria'>
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;