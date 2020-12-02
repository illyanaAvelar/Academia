import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles.css';

export default function Medica(){
    const [goBack, setGoBack] = useState(false);
    const history = useHistory();
   
    const options = [
        'Habilitado', 'Não habilitado'
    ];
      
    const defaultOption = options[0];
    


    function componentDidMount() {
        setTimeout(() => {
            setGoBack(true);
        }, 2000)
    }

    async function handleSubmit () {
        await componentDidMount();
        if(goBack)
        history.push('/chooselogon');     
    }

    return(
        <div className = "medica-container">
            <section className = "form"> 
            <form>
            <h2>Formulário de Avaliação médica</h2>
                <input placeholder = "Nome completo" />   
                <input placeholder = "Peso em kg" />   
                <input placeholder = "Altura em metros" />   
                <input placeholder = "Pressão arterial" />   
                <input placeholder = "Percentual de gordura corporal" />   
                <input placeholder = "Perrcentual de massa magra" />   
                <input placeholder = "IMC" />
                <div className="situacao">
                    Situação do paciente
                    <Dropdown options={options} value={defaultOption} placeholder="situação do paciente" />
                </div>
                <button className = "button" onClick={handleSubmit}>Cadastrar ficha</button>


                <Link className = "back-link" to = '/chooselogon'>
                    <FiLogIn size = {16} color = "purple"/>
                    Voltar
                </Link>
            </form> 

            </section>

        </div>
    );
}