import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

export default function CadastrarCartao(){
    const history = useHistory();

    async function voltar(e){
        history.push('/cadastro');
    }

    return(
        <div className = "cartao-container">
            <section className = "form">
                <form>    
                    <input className = "entrada"
                        placeholder = "Número"
                        // value = {id}
                        // onChange = {e => setId(e.target.value)}
                    />
                    <input 
                        placeholder = "Bandeira"
                    />   
                    <input 
                        placeholder = "Nome impresso no cartão"
                    />   
                    
                    <button className = "button" onClick={voltar}>Cadastrar</button>               
                    <Link className = "back-link" to = '/cadastro'>
                        <FiLogIn size = {16} color = "purple"/>
                        Voltar
                    </Link>
                </form>
            </section>

        </div>
    );
}

