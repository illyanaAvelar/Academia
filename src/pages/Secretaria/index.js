import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import tabela from '../../assets/tabelahorarios.png';
import natacao from '../../assets/natacao.png';
import spinning from '../../assets/spinning.png';
import musculacao from '../../assets/musculacao.png';

import './styles.css';

export default function Secretaria(){
    const history = useHistory();

    async function planos(e){
        history.push('/planos');
    }
    async function cadastro(e){
        history.push('/cadastro');
    }

    return(
        <div className = "secretaria-container">
            <div className = "header">
                <button className = "button" onClick={cadastro}>Cadastrar aluno</button>
                <Link className = "back-link" to = '/chooselogon'>
                    <FiLogIn size = {16} color = "purple"/>
                    Voltar
                </Link>
            </div>
            <div className = "tables">
                <h2>Tabela de horários</h2>
                <img src = {tabela} alt = "tabela" />
                <img src = {natacao} alt = "natacao" />
                <img src = {spinning} alt = "spinning" />
                <img src = {musculacao} alt = "musculacao" />
            </div>
         </div>
    );
}