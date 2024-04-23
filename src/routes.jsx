import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './pages/banner';
import AccountSettings from './pages/AccountSettings'; // Vérifie que le chemin est correct
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import { Link } from 'react-router-dom';

function AppRouter() {
    return(
        <Router>
            <Routes>
                {/* Définis la route vers CreateAccount en tant que page d'accueil */}
                <Route path='/' element={<CreateAccount />} />
                <Route path='/AccountSettings' element={<AccountSettings />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
