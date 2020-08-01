import React from 'react'
import Menu from '../Menu/index'
import Footer from '../Footer/index'
import styled, { css } from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right:5%;

    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`

// s argumentos passados entre {} equivale ao props.argumento, é como uma abertura do objeto
function PageDefault({ children, paddingAll }){
    return(
        <>
            <Menu />
                <Main paddingAll={paddingAll}>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault;