import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedIcon } from "../components/ThemedIcon";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { Language } from "../i18n/translations";

export default function SettingsScreen() {
    const { colors, theme, toggleTheme } = useTheme();
    const { t, language, setLanguage } = useLanguage();

    const languages: { code: Language; name: string; flag: string }[] = [
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scrollContent: {
            padding: 24,
        },
        section: {
            marginBottom: 32,
        },
        sectionTitle: {
            fontSize: 14,
            fontWeight: '700',
            color: colors.iconSecondary,
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 16,
            marginLeft: 4,
        },
        card: {
            backgroundColor: colors.card,
            borderRadius: 16,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: colors.border,
        },
        option: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
        },
        optionLast: {
            borderBottomWidth: 0,
        },
        optionContent: {
            flex: 1,
            marginLeft: 16,
        },
        optionTitle: {
            fontSize: 16,
            fontWeight: '600',
            color: colors.text,
            marginBottom: 2,
        },
        optionSubtitle: {
            fontSize: 14,
            color: colors.iconSecondary,
        },
        optionRight: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        themeButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            backgroundColor: colors.tint,
        },
        themeButtonText: {
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: '600',
            marginLeft: 8,
        },
        languageGrid: {
            padding: 12,
        },
        languageButton: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            borderWidth: 2,
            borderColor: colors.border,
            backgroundColor: colors.background,
        },
        languageButtonActive: {
            borderColor: colors.tint,
            backgroundColor: colors.card,
        },
        languageFlag: {
            fontSize: 28,
            marginRight: 16,
        },
        languageName: {
            fontSize: 16,
            fontWeight: '600',
            color: colors.text,
        },
        checkIcon: {
            marginLeft: 'auto',
        },
    });

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{t('theme')}</Text>
                <View style={styles.card}>
                    <View style={[styles.option, styles.optionLast]}>
                        <ThemedIcon name="moon" size={24} variant="active" library="feather" />
                        <View style={styles.optionContent}>
                            <Text style={styles.optionTitle}>{t('selectTheme')}</Text>
                            <Text style={styles.optionSubtitle}>
                                {theme === 'light' ? t('lightTheme') : t('darkTheme')}
                            </Text>
                        </View>
                        <Pressable
                            style={styles.themeButton}
                            onPress={toggleTheme}
                        >
                            <ThemedIcon
                                name={theme === 'light' ? 'moon' : 'sun'}
                                size={18}
                                library="feather"
                                color="#FFFFFF"
                            />
                            <Text style={styles.themeButtonText}>
                                {theme === 'light' ? t('darkTheme') : t('lightTheme')}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{t('language')}</Text>
                <View style={styles.card}>
                    <View style={styles.languageGrid}>
                        {languages.map((lang, index) => (
                            <Pressable
                                key={lang.code}
                                style={[
                                    styles.languageButton,
                                    language === lang.code && styles.languageButtonActive,
                                ]}
                                onPress={() => setLanguage(lang.code)}
                            >
                                <Text style={styles.languageFlag}>{lang.flag}</Text>
                                <Text style={styles.languageName}>{lang.name}</Text>
                                {language === lang.code && (
                                    <View style={styles.checkIcon}>
                                        <ThemedIcon name="check" size={24} variant="active" library="feather" />
                                    </View>
                                )}
                            </Pressable>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
