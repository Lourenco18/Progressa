import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

type IconLibrary = 'material' | 'feather' | 'antdesign' | 'ionicons';

type IconVariant = 'default' | 'secondary' | 'active' | 'success' | 'warning' | 'error' | 'custom';

interface ThemedIconProps {
    name: string;
    size?: number;
    variant?: IconVariant;
    library?: IconLibrary;
    color?: string;
}

export function ThemedIcon({
    name,
    size = 24,
    variant = 'default',
    library = 'material',
    color,
}: ThemedIconProps) {
    const { colors } = useTheme();

    const getColorByVariant = (): string => {
        if (color) return color;

        switch (variant) {
            case 'secondary':
                return colors.iconSecondary;
            case 'active':
                return colors.iconActive;
            case 'success':
                return colors.success;
            case 'warning':
                return colors.warning;
            case 'error':
                return colors.error;
            case 'custom':
                return colors.tint;
            default:
                return colors.icon;
        }
    };

    const iconColor = getColorByVariant();

    const IconComponent = {
        material: MaterialCommunityIcons,
        feather: Feather,
        antdesign: AntDesign,
        ionicons: Ionicons,
    }[library] as any;

    return (
        <IconComponent name={name} size={size} color={iconColor} />
    );
}
