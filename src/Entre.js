import React, { useState } from 'react'
import AuthContext from './context/auth.js';
import UserContext from './context/userConnect.js';
import App from './App.js';
import {hasAuthenticated, hasAuthenticate} from './services/apiRequest'

const Entre = () => {
    const [auth, setAuth] = useState(hasAuthenticated());
    const [isUser, setIsUser] = useState(hasAuthenticate());

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
        <UserContext.Provider value={{ isUser, setIsUser }}>
            <App />
        </UserContext.Provider>
        </AuthContext.Provider>
    )
}

export default Entre