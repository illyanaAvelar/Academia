import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './styles.css';

export default function Professora(){
    const history = useHistory();
    
    const options = [
        'Aluno1', 'Aluno2', 'Aluno3'
    ];
      
    const defaultOption = options[0];
    
    const optionsGM = [
        'Trícep', 'Peitoral', 'Bícepes', 'Oblíquos', 'Recto Abdominal', 'Quadrícep', 'Peitoral', 'Dorsal', 'Glúteo', 'Gémeos', 'Isquiotibial'
    ];
      
    const defaultOptionGM = optionsGM[0];

    async function aluno(e){
        history.push(`/profile/aluno${1}`);
    }

    return(
        <div className = "professora-container">
            <section className = "form">  
            <form>

            <h2>Formulário de cadastro de ficha</h2>
                <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                <div className="group">
                    Grupo muscular
                    <Dropdown id="group" options={optionsGM} value={defaultOptionGM} placeholder="Select an option" />
                </div>
                <button className = "button">Adicionar grupo muscular</button>
                <input placeholder = "Exercícios/Repetições" />   
                <button className = "button">Adicionar exercícios</button>
                <Link className = "back-link" to = '/chooselogon'>
                    <FiLogIn size = {16} color = "purple"/>
                    Voltar
                </Link>
            </form>
            </section>
        </div>
    );
}