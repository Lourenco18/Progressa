import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Index() {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const { isAuthenticated, loading } = useAuth();

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
      fontSize: 16,
    },
  });

  if (!loading && !isAuthenticated) {
    return <Redirect href="/auth" />;
  }

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{t('editScreen')}</Text>
    </View>
  );
}
