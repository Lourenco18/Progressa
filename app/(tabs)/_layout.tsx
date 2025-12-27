import { Tabs } from "expo-router";
import React from 'react';
import { View } from 'react-native';
import { LanguageSelector } from "../components/LanguageSelector";
import { ThemedIcon } from "../components/ThemedIcon";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function TabsLayout() {
  const { colors } = useTheme();
  const { t } = useLanguage();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarInactiveTintColor: colors.tabIconDefault,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: colors.text,
        },
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LanguageSelector />
            <ThemeToggleButton />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('home'),
          tabBarIcon: ({ color }) => (
            <ThemedIcon
              name="home"
              size={24}
              color={color}
              library="feather"
            />
          ),
        }}
      />
      <Tabs.Screen name="login" options={{ title: t('login') }} />
    </Tabs>
  );
}


