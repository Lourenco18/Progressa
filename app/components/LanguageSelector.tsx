import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language } from '../i18n/translations';

export function LanguageSelector() {
    const { colors } = useTheme();
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; name: string; flag: string }[] = [
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    ];

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: colors.card,
            borderRadius: 8,
            padding: 4,
            marginRight: 12,
            gap: 4,
        },
        button: {
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 6,
        },
        buttonActive: {
            backgroundColor: colors.tint,
        },
        buttonText: {
            fontSize: 12,
            fontWeight: '600',
        },
        buttonTextActive: {
            color: '#FFFFFF',
        },
        buttonTextInactive: {
            color: colors.iconSecondary,
        },
    });

    return (
        <View style={styles.container}>
            {languages.map((lang) => (
                <Pressable
                    key={lang.code}
                    onPress={() => setLanguage(lang.code)}
                    style={[
                        styles.button,
                        language === lang.code && styles.buttonActive,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            language === lang.code
                                ? styles.buttonTextActive
                                : styles.buttonTextInactive,
                        ]}
                    >
                        {lang.flag}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}
