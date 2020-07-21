import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api';
import './styles.css';

export default function CadastroUsuario () {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [contato, setContato] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleCadastroUsuario(event) {
        event.preventDefault();

        const data = {
            nomeUsuario,
            cpf,
            endereco,
            contato,
            email,
        };

        try {
            const response = await api.post('users', data);
            alert(`Seu ID de Acesso: ${response.data.id}`);

            history.push("/");
        } catch (error){
            alert("Erro!");
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Texto Informativo</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar ao login
                    </Link>
                </section>
                <form onSubmit={ handleCadastroUsuario } >
                    <input 
                        placeholder="Nome do Usuário"
                        value={nomeUsuario}
                        onChange={event => setNomeUsuario(event.target.value)} 
                    />
                    <input
                        type="cpf" 
                        placeholder="CPF" 
                        value={cpf}
                        onChange={event => setCpf(event.target.value)} 
                    />
                    <input 
                        placeholder="Endereço"
                        value={endereco}
                        onChange={event => setEndereco(event.target.value)}  
                    />
                    <input 
                        placeholder="Contato" 
                        value={contato}
                        onChange={event => setContato(event.target.value)} 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}  
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}