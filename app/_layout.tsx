import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ModeProvider } from "@/contexts/ModeContext";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}

	const screenOptions = { headerShown: false, statusBarHidden: true };

	return (
		<ModeProvider>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack screenOptions={screenOptions}>
					<Stack.Screen name="splash" options={screenOptions} />
					<Stack.Screen name="login" options={screenOptions} />
					<Stack.Screen name="signup" options={screenOptions} />
					<Stack.Screen name="(tabs-drive)" options={screenOptions} />
					<Stack.Screen name="(tabs-parent)" options={screenOptions} />
					<Stack.Screen name="notifications" options={screenOptions} />
					<Stack.Screen name="edit-profile" options={screenOptions} />
					<Stack.Screen name="+not-found" options={screenOptions} />
				</Stack>
				<StatusBar style="auto" />
			</ThemeProvider>
		</ModeProvider>
	);
}
