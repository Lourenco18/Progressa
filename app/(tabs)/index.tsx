import { StyleSheet, Text, View } from "react-native";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Index() {
  const { colors } = useTheme();
  const { t } = useLanguage();

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

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{t('editScreen')}</Text>
    </View>
  );
}
