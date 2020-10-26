import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

export default function Situacao()
{
const history = useHistory();
// import './styles.css';
    
    return(
        <div className = "logon-container">
            <section className = "form">  
                    
                    <Link className = "back-link" to = '/medica'>
                        <FiLogIn size = {16} color = "purple"/>
                        Voltar
                    </Link>

            </section>

        </div>
    );
}

