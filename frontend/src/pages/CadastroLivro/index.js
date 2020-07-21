import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api';
import './styles.css';

export default function CadastroLivro() {
    const [nomeLivro, setNomeLivro] = useState('');
    const [genero, setGenero] = useState('');
    const [numeroSerie, setNumeroSerie] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('');

    const history = useHistory();

    async function handleCadastroLivro(event) {
        event.preventDefault();

        const data = {
            nomeLivro,
            genero,
            numeroSerie,
            autor,
            descricao,
            status,
        };

        try {
            const response = await api.post('users', data);
            alert(`Seu ID de Acesso: ${response.data.id}`);

            history.push("/list");
        } catch (error){
            alert("Erro!");
        }
    }

    return (
        <div className="book-container">
            <div className="content">
                <section>
                    <h1>Cadastre um Livro</h1>
                    <p>Texto Informativo</p>

                    <Link className="back-link" to="/list">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar a lista
                    </Link>
                </section>
                <form onSubmit={handleCadastroLivro}>
                    <input 
                        placeholder="Titulo"
                        value={nomeLivro}
                        onChange={event => setNomeLivro(event.target.value)}
                    />
                    <input 
                        placeholder="Genero"
                        value={genero}
                        onChange={event => setGenero(event.target.value)}
                    />
                    <input 
                        placeholder="Autor"
                        value={autor}
                        onChange={event => setAutor(event.target.value)}
                    />
                    <input 
                        placeholder="Número de Serie"
                        value={numeroSerie}
                        onChange={event => setNumeroSerie(event.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição (Resumo)"
                        value={descricao}
                        onChange={event => setDescricao(event.target.value)}
                    />
                    <input 
                        placeholder="Leitura"
                        value={status}
                        onChange={event => setStatus(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}