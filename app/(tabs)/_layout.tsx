import { Tabs } from "expo-router";
import React from 'react';
import { ThemedIcon } from "../components/ThemedIcon";
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
      <Tabs.Screen
        name="login"
        options={{
          title: t('login'),
          tabBarIcon: ({ color }) => (
            <ThemedIcon
              name="log-in"
              size={24}
              color={color}
              library="feather"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('settings'),
          tabBarIcon: ({ color }) => (
            <ThemedIcon
              name="settings"
              size={24}
              color={color}
              library="feather"
            />
          ),
        }}
      />
    </Tabs>
  );
}


