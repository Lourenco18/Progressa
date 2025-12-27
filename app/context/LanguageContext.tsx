import * as Localization from 'expo-localization';
import React, { createContext, useContext, useState } from 'react';
import { Language, TranslationKeys, translations } from '../i18n/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getSystemLanguage(): Language {
    const locales = Localization.getLocales();
    const systemLang = locales[0]?.languageCode?.toLowerCase();

    // Mapear idiomas do sistema para os suportados
    if (systemLang?.startsWith('pt')) return 'pt';
    if (systemLang?.startsWith('es')) return 'es';
    if (systemLang?.startsWith('fr')) return 'fr';
    if (systemLang?.startsWith('de')) return 'de';
    return 'en'; // Fallback para inglês
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => getSystemLanguage());

    const t = (key: TranslationKeys): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
