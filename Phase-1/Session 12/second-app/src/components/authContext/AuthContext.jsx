import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = (userData) => {
        setUser(userData);
    }

    const logout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

export const useAuthContext = () => {
    return useContext(AuthContext);
}