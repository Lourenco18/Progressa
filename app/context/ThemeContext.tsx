import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export type Theme = 'light' | 'dark';

interface Colors {
    background: string;
    text: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    border: string;
    card: string;
    icon: string;
    iconSecondary: string;
    iconActive: string;
    success: string;
    warning: string;
    error: string;
}

interface ThemeContextType {
    theme: Theme;
    colors: Colors;
    toggleTheme: () => void;
}

const lightColors: Colors = {
    background: '#FFFFFF',
    text: '#000000',
    tint: '#FF7F50', // coral
    tabIconDefault: '#AAAAAA',
    tabIconSelected: '#FF7F50',
    border: '#E5E5E5',
    card: '#F5F5F5',
    icon: '#4A4A4A',
    iconSecondary: '#999999',
    iconActive: '#FF7F50',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
};

const darkColors: Colors = {
    background: '#1A1A1A',
    text: '#FFFFFF',
    tint: '#FF9966',
    tabIconDefault: '#888888',
    tabIconSelected: '#FF9966',
    border: '#333333',
    card: '#2A2A2A',
    icon: '#E5E5E5',
    iconSecondary: '#AAAAAA',
    iconActive: '#FF9966',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<Theme>((systemColorScheme as Theme) || 'light');

    useEffect(() => {
        if (systemColorScheme) {
            setTheme(systemColorScheme as Theme);
        }
    }, [systemColorScheme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const colors = theme === 'light' ? lightColors : darkColors;

    return (
        <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
