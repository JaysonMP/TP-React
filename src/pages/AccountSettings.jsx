import React, { useState, useEffect } from 'react';
import './styles3.css';

function AccountSettings({ userId }) {
    const [userData, setUserData] = useState({});
    const [newUserData, setNewUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:3030/users/${userId}`);
            if (response.ok) {
                const userData = await response.json();
                setUserData(userData);
            } else {
                console.error('Failed to fetch user data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        // Ajouter ici la logique de mise à jour des données dans la base de données
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        // Ajouter ici la logique de suppression du compte dans la base de données
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUserData({ ...newUserData, [name]: value });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h2>Paramètres du compte</h2>

            {/* Tableau pour les informations actuelles */}
            <table className="info-table">
                <caption>Informations actuelles</caption>
                <tbody>
                    <tr>
                        <td>Nom:</td>
                        <td><input type="text" name="lastName" value={userData.lastName || ''} onChange={handleInputChange} placeholder="Nom" /></td>
                    </tr>
                    <tr>
                        <td>Prénom:</td>
                        <td><input type="text" name="firstName" value={userData.firstName || ''} onChange={handleInputChange} placeholder="Prénom" /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" name="email" value={userData.email || ''} onChange={handleInputChange} placeholder="Email" /></td>
                    </tr>
                    <tr>
                        <td>Mot de passe:</td>
                        <td><input type="password" name="password" value="********" onChange={handleInputChange} placeholder="Mot de passe" /></td>
                    </tr>
                </tbody>
            </table>

            {/* Tableau pour les nouvelles informations */}
            <form onSubmit={handleUpdate}>
                <table className="info-table">
                    <caption>Nouvelles informations</caption>
                    <tbody>
                        <tr>
                            <td>Nouveau prénom:</td>
                            <td><input type="text" name="firstName" value={newUserData.firstName || ''} onChange={handleInputChange} placeholder="Nouveau prénom" /></td>
                        </tr>
                        <tr>
                            <td>Nouveau nom:</td>
                            <td><input type="text" name="lastName" value={newUserData.lastName || ''} onChange={handleInputChange} placeholder="Nouveau nom" /></td>
                        </tr>
                        <tr>
                            <td>Nouvel email:</td>
                            <td><input type="email" name="email" value={newUserData.email || ''} onChange={handleInputChange} placeholder="Nouvel email" /></td>
                        </tr>
                        <tr>
                            <td>Nouveau mot de passe:</td>
                            <td><input type="password" name="password" value={newUserData.password || ''} onChange={handleInputChange} placeholder="Nouveau mot de passe" /></td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit">Mettre à jour</button>
            </form>

            <form onSubmit={handleDelete}>
                <button type="submit">Supprimer le compte</button>
            </form>
        </div>
    );
}

export default AccountSettings;
