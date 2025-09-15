import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#FF8FA3",
				tabBarInactiveTintColor: "#999",
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: {
					backgroundColor: "#FF8FA3",
					borderTopWidth: 0,
					height: 60,
					paddingBottom: 8,
					paddingTop: 8,
					...Platform.select({
						ios: {
							position: "absolute",
						},
						default: {},
					}),
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "",
					tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color="white" />,
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "",
					tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "car-sport" : "car-sport-outline"} size={24} color="white" />,
				}}
			/>
			<Tabs.Screen
				name="chat"
				options={{
					title: "",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? "chatbubbles" : "chatbubbles-outline"} size={24} color="white" />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "",
					tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color="white" />,
				}}
			/>
		</Tabs>
	);
}
