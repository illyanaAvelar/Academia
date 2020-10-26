import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './styles.css';

export default function TrocarModalidade(){
    const musculacao = [
        'Mensal - 7 dias/semana - R$125,00', 'Semestral - 7 dias/semana - 6xR$112,50', 'Anual - 7 dias/semana - 12xR$106,25'
    ];

    const spinning = [
        'Mensal - 2 dias/semana - R$215,00', 'Mensal - 3 dias/semana - R$229,00', 'Semestral - 2 dias/semana - 6xR$193,50', 'Semestral - 3 dias/semana - 6xR$206,10', 'Anual - 2 dias/semana - 12xR$182,75', 'Anual - 3 dias/semana - 12xR$189,00'
    ];
    
    const crossfit = [
        'Mensal - 3 dias/semana - R$155,00', 'Semestral - 3 dias/semana - 6xR$139,00', 'Anual - 3 dias/semana - 12xR$130,00'
    ];

    const history = useHistory();
    async function modalidade(e){
        history.push('/cadastro');
    }
    
    return(
        <div className = "modalidades-container">
            <section className = "form">    
                <h2>Modalidades e planos</h2>
                <form>
                    <input className="caixa" type="checkbox" id="checkbox1" value="on"/>Musculação
                    <input className="caixa" type="checkbox" id="checkbox1" value="on"/>Spinning 12:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Spinning 16:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Crossfit 12:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Crossfit 18:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Crossfit 20:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Ritmos 17:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Ritmos 18:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Ritmos 19:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Natação 17:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Natação 19:00
                    <input className="caixa" type="checkbox" id="checkbox" value="on"/>Natação 20:00
                    <div className="group">
                        Plano spinning
                        <Dropdown className="group" options={spinning} value={spinning[0]} placeholder="Select an option" />
                    </div>
                    <div className="group">
                        Plano musculação
                        <Dropdown className="group" options={musculacao} value={musculacao[0]} placeholder="Select an option" />
                    </div>
                    <div className="group">
                        Plano natação/crossfit/Ritmos
                        <Dropdown className="group" options={crossfit} value={crossfit[0]} placeholder="Select an option" />
                    </div>
                </form>    
                <button className = "button" onClick={modalidade}>Salvar</button>
                <Link className = "back-link" to = '/cadastro'>
                    <FiLogIn size = {16} color = "purple"/>
                    Voltar
                </Link>
            </section>

        </div>
    );
}

