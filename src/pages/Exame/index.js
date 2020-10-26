import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

export default function Exame()
{
const history = useHistory();
// import './styles.css';
    
    return(
        <div className = "logon-container">
            <section className = "form">  
                <button className = "button">Fulano de tal</button>

                    <Link className = "back-link" to = '/profile'>
                        <FiLogIn size = {16} color = "purple"/>
                        Voltar
                    </Link>

            </section>

        </div>
    );
}

