import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";

function RootGuard({ children }: { children: React.ReactNode }) {
  const isAuth = false;
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth");
    }
  });

  return <>{children}</>;

}

export default function RootLayout() {
  return (



    <ThemeProvider>
      <RootGuard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShadowVisible: false }} />
        </Stack>
      </RootGuard>
    </ThemeProvider>

  );
}
