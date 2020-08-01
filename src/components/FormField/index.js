/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types'; // Usado pra definir valores com typagem forte
import Styled, { css } from 'styled-components';

const FormFieldWrapper = Styled.div`
    position: relative;
    textarea {
    min-height: 150px;
    }
    input[type="color"] {
    padding-left: 56px;
    }
`;

const Label = Styled.label``;

Label.Text = Styled.span`

    color: #E5E5E5;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;

const Input = Styled.input`
    background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${function ({ hasValue }) {
      // Essa função injeta css dentro do componente que ele tá
      // valor1 && valor2: se o primeiro for falso retorna o segundo
      return hasValue && css`
      :not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
      }
      `;
  }}
}
`;

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = type === 'textarea' ? 'textarea' : 'input';
  // onChange é onde ele recebe a função de mudança
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length)

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'} //impede que venha cache de formulário
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />

        <Label.Text>
          {label}
        </Label.Text>

        {
          hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>

            {
              suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }

          </datalist>
          )
        }

      </Label>
    </FormFieldWrapper>
  );
}

// Quando o valor nao .isRequired então ele precisa de um default
FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
    suggestions: [],
};

// Definindo typagem forte para os dados que serão recebidos
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
