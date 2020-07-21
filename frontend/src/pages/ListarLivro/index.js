import React from 'react';
import { Link } from 'react-router-dom'; 
import { FiPower
 } from 'react-icons/fi';
import { FcEmptyTrash } from "react-icons/fc";
import './styles.css';

export default function ListarLivro() {
    return (
        <div className="profile-container">
            <header>
                <span>Bem Vindo, Usuário</span>

                <Link className="button" to="/library/new">Cadastrar novo livro</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Livros cadastrados</h1>
            
            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Livro Test</p>

                    <strong>Genero:</strong>
                    <p>Genero Test</p>

                    <strong>Status:</strong>
                    <p>Disponivel</p>

                    <button type="button" tootip="Excluir">
                        <FcEmptyTrash size={20} color="#A8A8B3" /> 
                    </button>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Livro Test</p>

                    <strong>Genero:</strong>
                    <p>Genero Test</p>

                    <strong>Status:</strong>
                    <p>Disponivel</p>

                    <button type="button" tootip="Excluir">
                        <FcEmptyTrash size={20} color="#A8A8B3" /> 
                    </button>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Livro Test</p>

                    <strong>Genero:</strong>
                    <p>Genero Test</p>

                    <strong>Status:</strong>
                    <p>Disponivel</p>

                    <button type="button" tootip="Excluir">
                        <FcEmptyTrash size={20} color="#A8A8B3" /> 
                    </button>
                </li>
            </ul>
        </div>        
    );
}