import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.png'

import './styles.css';

export default function Logon(){
    const[id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            // const response = await api.post('sessions', { id });

            // localStorage.setItem('Id', id);
            // localStorage.setItem('Name', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }
    async function handleChooseLogin(e){
        e.preventDefault();

        try {
            history.push('/chooselogon');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }
    return(
        <div className = "logon-container">
            <div className = "logo-logon"> 
                <img src = {logoImg} alt = "Cadimia" />
            </div>
            <section className = "form">
                <form onSubmit = {handleLogin}>
                    <h1>Bem vinda!</h1>
                    <h1>Faça seu login</h1>
                    <input 
                        placeholder = "Usuário"
                        value = {id}
                        onChange = {e => setId(e.target.value)}
                    />   
                    <input 
                        placeholder = "Senha"
                        value = {id}
                        onChange = {e => setId(e.target.value)}
                    />   
                    <button className = "button"type = "submit">Entrar</button>
                    <button className = "button" onClick={handleChooseLogin}>Login Funcionário</button>

                    <Link className = "back-link" to = '/register'>
                        <FiLogIn size = {16} color = "purple"/>
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

        </div>
    );
}