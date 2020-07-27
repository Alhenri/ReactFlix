import React from 'react';

function ButtonLink(props){
    // props é um objeto que serve de parametros ao codigo
    // ele vem com uma propriedade a mais chamada "children"
    // que fala que elemento chamou ele
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;

//npm install styled-components -> intala um lib ai
//npm i -> instala tudo do package-lock