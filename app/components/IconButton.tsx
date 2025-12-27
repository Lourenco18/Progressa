import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { ThemedIcon } from './ThemedIcon';

interface IconButtonProps {
    name: string;
    size?: number;
    variant?: 'default' | 'secondary' | 'active' | 'success' | 'warning' | 'error' | 'custom';
    library?: 'material' | 'feather' | 'antdesign' | 'ionicons';
    onPress?: () => void;
    disabled?: boolean;
}

export function IconButton({
    name,
    size = 24,
    variant = 'default',
    library = 'material',
    onPress,
    disabled = false,
}: IconButtonProps) {
    const { colors } = useTheme();

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: colors.card },
                pressed && !disabled && styles.pressed,
                disabled && styles.disabled,
            ]}
        >
            <ThemedIcon
                name={name}
                size={size}
                variant={variant}
                library={library}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
    disabled: {
        opacity: 0.5,
    },
});
