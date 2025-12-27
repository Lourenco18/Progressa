import { Tabs } from "expo-router";
import React from 'react';
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import { ThemedIcon } from "../components/ThemedIcon";
import { useTheme } from "../context/ThemeContext";

export default function TabsLayout() {
  const { colors } = useTheme();


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
        headerRight: () => <ThemeToggleButton />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
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
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
}


