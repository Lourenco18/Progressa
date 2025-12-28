import { account } from '@/lib/appwrite';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
    refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const checkAuth = useCallback(async () => {
        try {
            const user = await account.get();
            setIsAuthenticated(!!user);
        } catch (e) {
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const refresh = async () => {
        setLoading(true);
        await checkAuth();
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, refresh }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
