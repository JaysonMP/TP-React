import React, { useState } from 'react';
import './styles2.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialisation de useNavigate

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Logique pour la connexion

        try {
            // Charger les données d'utilisateurs à partir de la base de données JSON
            const response = await fetch('http://localhost:3030/users'); // Assure-toi que l'URL est correcte
            const usersData = await response.json();

            // Vérifier si l'utilisateur existe dans la base de données
            const user = usersData.find(user => user.email === email && user.password === password);

            if (user) {
                // Redirection vers la page AccountSettings après soumission du formulaire
                navigate('/AccountSettings');
            } else {
                // Afficher un message d'erreur si les informations de connexion sont incorrectes
                setError('Email ou mot de passe incorrect');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="container">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <input className="input" type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
                <input className="input" type="password" value={password} onChange={handlePasswordChange} placeholder="Mot de passe" required />
                <button className="button" type="submit">Se connecter</button>
            </form>
            {error && <p>{error}</p>} {/* Afficher le message d'erreur s'il y en a */}
        </div>
    );
}

export default Login;
