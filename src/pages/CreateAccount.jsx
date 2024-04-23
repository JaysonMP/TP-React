import React, { useState } from 'react';
import './styles1.css';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3030/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                })
            });
            if (response.ok) {
                // Redirection vers la page Login après soumission du formulaire
                navigate('/login');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="container">
            <h2>Créer un compte</h2>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" value={firstName} onChange={handleFirstNameChange} placeholder="Prénom" required />
                <input className="input" type="text" value={lastName} onChange={handleLastNameChange} placeholder="Nom" required />
                <input className="input" type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
                <input className="input" type="password" value={password} onChange={handlePasswordChange} placeholder="Mot de passe" required />
                {/* Utilisation d'un bouton pour soumettre le formulaire */}
                <button className="button" type="submit">Créer</button>
            </form>
        </div>
    );
}

export default CreateAccount;
