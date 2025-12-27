import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function Index() {
  const { colors } = useTheme();

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
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
