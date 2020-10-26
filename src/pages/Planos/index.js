import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

// import './styles.css';

export default function Planos(){
    
    return(
        <div className = "logon-container">
            <section className = "form">  
                    <Link className = "back-link" to = '/secretaria'>
                        <FiLogIn size = {16} color = "purple"/>
                        Voltar
                    </Link>

            </section>

        </div>
    );
}

