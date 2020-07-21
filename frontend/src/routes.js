import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import ListarLivro from './pages/ListarLivro';
import CadastroLivro from './pages/CadastroLivro';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={CadastroUsuario} />
                <Route path="/list" component={ListarLivro} />
                <Route path="/library/new" component={CadastroLivro} />
            </Switch>
        </BrowserRouter>
    );
}