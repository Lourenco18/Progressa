// Este arquivo contém exemplos de como usar os ícones temáticos na aplicação

import { View } from 'react-native';
import { IconButton } from './IconButton';
import { ThemedIcon } from './ThemedIcon';

// Exemplo 1: Ícone simples com tema padrão
export function ExampleDefaultIcon() {
    return (
        <ThemedIcon
            name="home"
            size={24}
            variant="default"
            library="feather"
        />
    );
}

// Exemplo 2: Ícone ativo (cor de destaque)
export function ExampleActiveIcon() {
    return (
        <ThemedIcon
            name="star"
            size={24}
            variant="active"
            library="material"
        />
    );
}

// Exemplo 3: Ícone de sucesso (verde)
export function ExampleSuccessIcon() {
    return (
        <ThemedIcon
            name="check-circle"
            size={24}
            variant="success"
            library="feather"
        />
    );
}

// Exemplo 4: Ícone de alerta (amarelo)
export function ExampleWarningIcon() {
    return (
        <ThemedIcon
            name="alert-circle"
            size={24}
            variant="warning"
            library="feather"
        />
    );
}

// Exemplo 5: Ícone de erro (vermelho)
export function ExampleErrorIcon() {
    return (
        <ThemedIcon
            name="x-circle"
            size={24}
            variant="error"
            library="feather"
        />
    );
}

// Exemplo 6: Botão com ícone
export function ExampleIconButton() {
    return (
        <IconButton
            name="plus"
            size={24}
            variant="active"
            library="feather"
            onPress={() => console.log('Botão pressionado')}
        />
    );
}

// Exemplo 7: Múltiplos ícones em uma linha
export function ExampleIconRow() {
    return (
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
            <ThemedIcon name="home" size={24} variant="default" library="feather" />
            <ThemedIcon name="user" size={24} variant="secondary" library="feather" />
            <ThemedIcon name="settings" size={24} variant="active" library="feather" />
            <ThemedIcon name="menu" size={24} variant="default" library="feather" />
        </View>
    );
}

// Variantes disponíveis:
// 'default' - cor padrão do ícone (cinza escuro no light, cinza claro no dark)
// 'secondary' - cor secundária (cinza médio)
// 'active' - cor de destaque (coral)
// 'success' - cor de sucesso (verde)
// 'warning' - cor de aviso (amarelo)
// 'error' - cor de erro (vermelho)
// 'custom' - cor do tint (coral)

// Bibliotecas de ícones disponíveis:
// 'material' - MaterialCommunityIcons (padrão)
// 'feather' - Feather
// 'antdesign' - AntDesign
// 'ionicons' - Ionicons
