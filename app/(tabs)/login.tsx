import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function LoginScreen() {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: colors.text,
            fontSize: 18,
            fontWeight: "600",
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login page</Text>
        </View>
    );
}