import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi';

import ficha from '../../assets/ficha.jpg';

import './styles.css';

export default function Profile(){
    
    async function treino(e){
        history.push('/medica');
    }
    
    async function exame(e){
        history.push('/medica');
    }
    
    async function handleLogout(e){
        history.push('/');
    }

    const[id, setId] = useState('');
    const history = useHistory();

    return(
        <div className = "profile-container">
            <header>
                <span>Illyana </span>

                <button onClick = {handleLogout} type = "button">
                    <FiPower size = {18} color = "purple" />
                </button>
            </header>
            <h2>Ficha de treino</h2>  
            <img src = {ficha} alt = "ficha" />
            <h2>Avaliação física</h2>
            <img src = {ficha} alt = "ficha" />
           
        </div>
    );

}