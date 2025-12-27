import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="auth" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
