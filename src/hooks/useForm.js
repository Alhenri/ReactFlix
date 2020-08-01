import { useState } from 'react'

function useForm(valoresIniciais){
    // essa const abaixo guarda os valores das variaveis
    const [values, setValues] = useState(valoresIniciais);
    // O useState retorna a string colocada e uma função, ele
    // ta sendo usado como alteração dinâmica da informação
  
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
  
    function clearForm(){
      setValues(valoresIniciais)
    }
  
    return {
      values,
      handleChange,
      clearForm,
    };
  
}

export default useForm;