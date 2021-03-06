import styled from "styled-components" //É usado pra criar componentes React com css

// Se quiser colocar o 'Link' como componente padrão invés de 'a' ou 'button'
// usasse 'styled(Link)' ao invés de 'styled.a'

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background-color: var(--black);

    &:hover,
    &:focus {
    opacity: .5;}

    @media (max-width: 800px) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
`;

export default Button;