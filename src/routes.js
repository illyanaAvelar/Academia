import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewProperty from './pages/NewProperty'
import ChooseLogon from './pages/ChooseLogon'
import Secretaria from './pages/Secretaria'
import Professora from './pages/Professora'
import Medica from './pages/Medica'
import Planos from './pages/Planos'
import Cadastro from './pages/Cadastro'
import TrocarModalidade from './pages/TrocarModalidade'
import Modalidade from './pages/Modalidade'
import CadastrarCartao from './pages/CadastrarCartao'
import Situacao from './pages/Situacao'
import Treino from './pages/Treino'
import Exame from './pages/Exame'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Logon} />
                <Route path = "/register"  component = {Register} />
                <Route path = "/profile"  component = {Profile} />
                <Route path = "/property/new"  component = {NewProperty} />
                <Route path = "/chooselogon"  component = {ChooseLogon} />
                <Route path = "/secretaria"  component = {Secretaria} />
                <Route path = "/professora"  component = {Professora} />
                <Route path = "/medica"  component = {Medica} />
                <Route path = "/planos"  component = {Planos} />
                <Route path = "/cadastro"  component = {Cadastro} />
                <Route path = "/modalidade"  component = {TrocarModalidade} />
                <Route path = "/modalidades"  component = {Modalidade} />
                <Route path = "/cadastrarcartao"  component = {CadastrarCartao} />
                <Route path = "/imc/aluno1"  component = {Situacao} />
                <Route path = "/treino/aluno1"  component = {Treino} />
                <Route path = "/exame/aluno1"  component = {Exame} />
            </Switch>
        </BrowserRouter>
    )
}