import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggleButton() {
    const { theme, colors, toggleTheme } = useTheme();

    return (
        <Pressable
            onPress={toggleTheme}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: colors.card },
                pressed && styles.pressed,
            ]}
        >
            <MaterialCommunityIcons
                name={theme === 'light' ? 'moon' : 'white-balance-sunny'}
                size={24}
                color={colors.tint}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 8,
        marginRight: 12,
    },
    pressed: {
        opacity: 0.7,
    },
});
