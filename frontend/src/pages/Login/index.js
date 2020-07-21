import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 
import libraryImg from '../../assets/library.png';

import api from '../../service/api';
import './styles.css';

export default function Login() {
    const [id, setId] = useState('')

    return (
        <div className="login-container">
            <section className="form">
                {/* <img src={logoImg} alt="LogoImg" /> */}
                <form>
                    <h1>Faça seu Login</h1>
                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={libraryImg} alt="LibraryImg" />
        </div>        
    );
}