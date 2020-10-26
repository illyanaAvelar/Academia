import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';    
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

export default function Register(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const history = useHistory();
    
    async function handleRegister(e){
        debugger;
        e.preventDefault();

        const data = {
            name,
            email,
        };
        
    try{
        const response = await api.post('aluno', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
    }catch(err){
        debugger;
        alert('Algo deu errado. Tente novamente');
    }
}

    return(
        <div className = "register-container">
            <div className = "content">
            <section>
                <h2>Cadastro</h2>

                <form onSubmit = {handleRegister}>
                    <input 
                        placeholder = "Nome Completo" 
                        value = {name}
                        onChange = {e => setName(e.target.value)}
                        />
                </form>

                <form className="form2" onSubmit = {handleRegister}>
                    <input
                        type = "email" 
                        placeholder = "E-mail" 
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                        />

                </form>

                <button className = "button" type = "submit">Cadastrar</button>

                <Link className = "back-link" to = '/'>
                    <FiArrowLeft size = {16} color = "purple"/>
                    Já possuo cadastro
                </Link> 
                            
            </section>
            </div>
        </div>
    )
}

