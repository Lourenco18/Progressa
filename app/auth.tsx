import { account } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Models } from "react-native-appwrite";
import { ThemedIcon } from "./components/ThemedIcon";
import { useAuth } from "./context/AuthContext";
import { useLanguage } from "./context/LanguageContext";
import { useTheme } from "./context/ThemeContext";

export default function AuthScreen() {
  const [loggedInUser, setLoggedInUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { colors, theme } = useTheme();
  const { t } = useLanguage();
  const { refresh } = useAuth();
  const router = useRouter();

  async function login(email: string, password: string) {
    try {
      // TODO: Implementar login com Appwrite
      // await account.createEmailPasswordSession(email, password);
      await refresh();
      router.replace('/(tabs)');
    } catch (e) {
      // manter na tela de auth em caso de erro
    }
  }

  async function register(email: string, password: string, name: string) {
    try {

      await refresh();
      router.replace('/(tabs)');
    } catch (e) {
      // manter na tela de auth em caso de erro
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 24,
    },
    header: {
      alignItems: 'center',
      marginBottom: 48,
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 20,
      backgroundColor: colors.tint,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
      shadowColor: colors.tint,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.iconSecondary,
    },
    form: {
      marginBottom: 24,
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 8,
      marginLeft: 4,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: 12,
      borderWidth: 1.5,
      borderColor: colors.border,
      paddingHorizontal: 16,
    },
    inputWrapperFocused: {
      borderColor: colors.tint,
      shadowColor: colors.tint,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    input: {
      flex: 1,
      height: 52,
      fontSize: 16,
      color: colors.text,
    },
    eyeButton: {
      padding: 4,
    },
    primaryButton: {
      backgroundColor: colors.tint,
      borderRadius: 12,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
      shadowColor: colors.tint,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    primaryButtonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 32,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: colors.border,
    },
    dividerText: {
      marginHorizontal: 16,
      fontSize: 14,
      color: colors.iconSecondary,
    },
    secondaryButton: {
      borderWidth: 1.5,
      borderColor: colors.border,
      backgroundColor: colors.card,
      borderRadius: 12,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondaryButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },
    footer: {
      marginTop: 24,
      alignItems: 'center',
    },
    footerText: {
      fontSize: 14,
      color: colors.iconSecondary,
    },
    logoutButton: {
      marginTop: 16,
      padding: 12,
    },
    logoutButtonText: {
      fontSize: 14,
      color: colors.error,
      fontWeight: '600',
    },
    welcomeText: {
      fontSize: 18,
      color: colors.text,
      fontWeight: '600',
      marginBottom: 8,
    },
  });

  if (loggedInUser) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <View style={styles.logo}>
              <ThemedIcon name="check-circle" size={40} variant="custom" library="feather" color="#FFFFFF" />
            </View>
            <Text style={styles.welcomeText}>{t('welcome')}</Text>
            <Text style={styles.subtitle}>{loggedInUser.name}</Text>
            <Text style={styles.footerText}>{loggedInUser.email}</Text>
          </View>

          <TouchableOpacity
            style={[styles.primaryButton, { backgroundColor: colors.error }]}
            onPress={async () => {
              await account.deleteSession({ sessionId: 'current' });
              setLoggedInUser(null);
            }}
          >
            <Text style={styles.primaryButtonText}>{t('logout')}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <View style={styles.logo}>
            <ThemedIcon name="trending-up" size={40} variant="custom" library="feather" color="#FFFFFF" />
          </View>
          <Text style={styles.title}>{t('appName')}</Text>
          <Text style={styles.subtitle}>
            {isLogin ? t('signIn') : t('signUp')}
          </Text>
        </View>

        <View style={styles.form}>
          {!isLogin && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t('name')}</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder={t('fullName')}
                  placeholderTextColor={colors.iconSecondary}
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                />
              </View>
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{t('email')}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={t('emailPlaceholder')}
                placeholderTextColor={colors.iconSecondary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{t('password')}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={t('passwordPlaceholder')}
                placeholderTextColor={colors.iconSecondary}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                <ThemedIcon
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  variant="secondary"
                  library="feather"
                />
              </Pressable>
            </View>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => isLogin ? login(email, password) : register(email, password, name)}
          >
            <Text style={styles.primaryButtonText}>
              {isLogin ? t('signInButton') : t('signUpButton')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>{t('or')}</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text style={styles.secondaryButtonText}>
            {isLogin ? t('createAccount') : t('haveAccount')}
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {isLogin ? t('newUser') : t('existingUser')}
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
