/* eslint-disable linebreak-style */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm'


function CadastroCategoria() {
  
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  
  const { handleChange, values, clearForm } = useForm(valoresIniciais)

  // Essa const guarda todos os objetos criados em cada submit
  const [categorias, setCategorias] = useState([]);

  // Os [] na declaração da variável 'abre' o objeto retornado pelo useState

  // Essa função recebe como primeiro paramtro uma função
  // No segundo parametro ela recebe em quais condições ela devera executar
  // no [] vazio ela so executa quando carrega
  useEffect(() => {
    // Muda o backend dependendo de onde tiver rodando
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://reactflix-ahssf.herokuapp.com/categorias';

    // Pode fazer esses passos de baixo usando async e await
    fetch(URL).then(
      (resposta) => resposta.json()).then(
      (respostaJson) => {
        setCategorias([
          ...respostaJson,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infoOnSubmit) {
        infoOnSubmit.preventDefault(); // Tira o reload automático da pagina
        setCategorias([
          ...categorias, // ...: Coloca tudo que ele ja pegou e manda continuar salvo
          values,
        ]);

        console.log(values)
        clearForm(valoresIniciais);
      }}
      >
        {/* State: Contém dados  */}

        <FormField
          label="Nome da categoria: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

      </form>

      <ul>
        {categorias.map((categoria) => // Essa função tem o primeiro parametro que é
        // o conteudo da lista e o segundo que é o indice
          (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ),
          // Precisa do parametro key pra fazer o li
        )}
      </ul>

      <Link to="/">
        Ir pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
