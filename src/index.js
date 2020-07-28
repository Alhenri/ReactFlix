import React from 'react'; //Usada pra fazer os componentes
import ReactDOM from 'react-dom'; //Usada pra fazer a renderização da página
import './index.css';
import Home from './Pages/Home';
import CadastroVideo from './Pages/cadastro/Video'
import CadastroCategoria from './Pages/cadastro/Categoria'
// npm i react-router-dom -> é responsável por fazer a administração das rotas
// tirando a necessidade de haver um reload nas paginas (single-page-aplication)

import { BrowserRouter, Switch, Route } from 'react-router-dom'
// BrowserRouter: Indica que a pagina terá um sistema de rotas
// Switch: Irá fazer o papel de um if pra verificar qual pagina o usuário está solicitando
// Route: É como irá declarar cada uma das páginas

function NotFound(){
  return(
    <div>
      <h1>Page not found</h1>
      <h3>Error 404!</h3>
    </div>
  )
}

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/Cadastro/Video' component={CadastroVideo} />
      <Route path='/Cadastro/Categoria' component={CadastroCategoria} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// exact: Serve para infromar ao route que so irá renderizar a
// pagina se for exatamente aquela rota.

// Quando não se adiciona o componente 'path' então ele funcionará como um 'else'