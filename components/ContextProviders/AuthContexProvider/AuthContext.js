import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('/api/checkAuth');
            if (response.ok) {
                const data = await response.json();
                setIsAuthenticated(data.isAuthenticated);
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const login = async ({email, password}) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password}),
        });
        if (response.ok) {
            setIsAuthenticated(true);
            console.log("Authenticated");
        }
    };

    const logout = async () => {
        await fetch('/api/logout');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
