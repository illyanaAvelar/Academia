import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

export default function Modalidade() {
const history = useHistory();

async function modalidade(e){
    history.push('/modalidades');
}
    
    return(
        <div className = "modalidade-container">
            <section className = "form">  
                    <p>
                        <input type="checkbox" id="chkBike" value="on">I have a bike</input>
                    </p>
            <button className = "button" onClick={modalidade}>Modalidade X</button>
                    <Link className = "back-link" to = '/cadastro'>
                        <FiLogIn size = {16} color = "purple"/>
                        Voltar
                    </Link>

            </section>

        </div>
    );
}

