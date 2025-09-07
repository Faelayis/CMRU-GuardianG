import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SplashScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.logoContainer}>
					<View style={styles.logoBackground}>
						<Text style={styles.busIcon}>🚌</Text>
						<Text style={styles.phoneIcon}>📱</Text>
					</View>
				</View>

				<Text style={styles.appName}>GuardianG</Text>
				<Text style={styles.subtitle}>มั่นใจทุกการเดินทาง{"\n"}ของลูกคุณ</Text>
				<TouchableOpacity style={styles.startButton} onPress={() => router.push("/login" as any)}>
					<View style={styles.buttonContent}>
						<Text style={styles.busEmoji}>🚌</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FF8FA3",
	},
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	logoContainer: {
		marginBottom: 40,
	},
	logoBackground: {
		width: 120,
		height: 120,
		backgroundColor: "#2D4A4E",
		borderRadius: 60,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	busIcon: {
		fontSize: 40,
		position: "absolute",
		left: 20,
	},
	phoneIcon: {
		fontSize: 30,
		position: "absolute",
		right: 15,
		backgroundColor: "white",
		borderRadius: 8,
		padding: 5,
	},
	appName: {
		fontSize: 48,
		fontWeight: "bold",
		color: "#2D4A4E",
		marginBottom: 20,
	},
	subtitle: {
		fontSize: 18,
		color: "#FFFFFF",
		textAlign: "center",
		lineHeight: 24,
		marginBottom: 80,
	},
	startButton: {
		width: 200,
		height: 60,
		backgroundColor: "#FFD700",
		borderRadius: 30,
		borderWidth: 3,
		borderColor: "#D4A574",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	busEmoji: {
		fontSize: 24,
	},
});
