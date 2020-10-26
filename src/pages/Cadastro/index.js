import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

export default function Cadastro(){
    const history = useHistory();

    async function planos(e){
        history.push('/modalidade');
    }

    async function back(e){
        history.push('/secretaria');
    }

    async function cartao(e){
        history.push('/cadastrarcartao');
    }

    return(
        <div className = "cadastro-container">
            <section className = "form">  
                <form>
                    <h2>Cadastrar novo aluno</h2>
                    <button className = "button" onClick={planos}>Buscar avaliação médica</button>

                    <input placeholder = "Nome completo" />   
                    <input placeholder = "CPF" />   
                    <input placeholder = "Identidade" />   
                    <input type = "date" id = "nasc" value = "2020-10-28"/> 
                    <label for="nasc">Data de nascimento</label>
                    
                    <h2>Cartão</h2>
                    <textarea id = "texto" className = "texto" rows = "4" cols = "7">**** **** **** 1408</textarea>
                    <textarea id = "texto" className = "texto" rows = "4" cols = "7">MASTERCARD</textarea>
                    <textarea id = "texto" className = "texto" rows = "4" cols = "7">NOME IMPRESSO</textarea>
                    <button className = "button" onClick={cartao}>Cadastrar/Editar Cartão</button>
                    
                    <h2>Plano</h2>
                    <textarea id = "texto" className = "texto" rows = "4" cols = "7">Plano escolhido</textarea>
                    <button className = "button" onClick={planos}>Cadastrar/Editar Plano</button>
                    <button className = "button" onClick={back}>Salvar</button>
                </form>
                <Link className = "back-link" to = '/secretaria'>
                    <FiLogIn size = {16} color = "purple"/>
                    Voltar
                </Link>

            </section>

        </div>
    );
}