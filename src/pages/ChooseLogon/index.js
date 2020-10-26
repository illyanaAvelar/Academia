import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import './styles.css';

export default function ChooseLogon(){
    const[id, setId] = useState('');
    const history = useHistory();

    async function medica(e){
        history.push('/medica');
    }
    async function professora(e){
        history.push('/professora');
    }
    async function secrertaria(e){
        history.push('/secretaria');
    }

    return(
        <div className = "logon-container">
            <div className = "logo-logon"> 
                <img src = {logoImg} alt = "Cadimia" />
            </div>
            <section className = "form">  
                    <button className = "button" onClick={medica}>Médica</button>
                    <button className = "button" onClick={professora}>Professora</button>
                    <button className = "button" onClick={secrertaria}>Secretária</button>

                    <Link className = "back-link" to = '/'>
                        <FiLogIn size = {16} color = "purple"/>
                        Voltar
                    </Link>

            </section>

        </div>
    );
}