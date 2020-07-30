/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function CadastroCategoria() {
  // Essa const guarda todos os objetos criados em cada submit
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  // essa const abaixo guarda os valores das variaveis
  const [values, setValues] = useState(valoresIniciais);
  // O useState retorna a string colocada e uma função, ele
  // ta sendo usado como alteração dinâmica da informação

  // Os [] na declaração da variável 'abre' o objeto retornado pelo useState

  function setValue(chave, valor) {
    // chave: nome, descrição e cor
    setValues({
      ...values,
      [chave]: valor, // recurso do js que deixa a chave dinamica
    });
  }

  // Essa função abaixo é responsável por mudar o valor das variaveis
  function handleChange(infoOnChange) {
    // infoOnChange é um objeto que retornar informações sobre a chamada da função
    // target é o alvo da ação
    // setNomeDaCategoria(infoOnChange.target.value)
    // O valor não é renderizado normalmente porque o react reescreve a pagina
    // com o valor inicial

    setValue(
      infoOnChange.target.getAttribute('name'),
      infoOnChange.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoOnSubmit) {
        infoOnSubmit.preventDefault(); // Tira o reload automático da pagina
        setCategorias([
          ...categorias, // ...: Coloca tudo que ele ja pegou e manda continuar salvo
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        {/* State: Contém dados  */}

        <FormField
          label="Nome da categoria: "
          type="text"
          name="nome"
          value={values.nome}
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
      </form>

      <ul>
        {categorias.map((categoria) => // Essa função tem o primeiro parametro que é
        // o conteudo da lista e o segundo que é o indice
          (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
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
