import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useModeNavigation } from "@/hooks/useModeNavigation";

export default function ExploreScreen() {
	const { switchMode } = useModeNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.titleSection}>
					<Text style={styles.title}>ติดตามรถบัส</Text>
					<Text style={styles.subtitle}>GuardianG</Text>
				</View>
				<View style={styles.profileContainer}>
					<View style={styles.profileImage}>
						<Text style={styles.profileEmoji} onPress={switchMode}>
							👤
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.liveContainer}>
				<View style={styles.liveIndicator}>
					<Text style={styles.liveText}>LIVE</Text>
				</View>
				<View style={styles.timeContainer}>
					<Ionicons name="time" size={20} color="#333" />
					<Text style={styles.timeText}>5 นาที</Text>
				</View>
			</View>

			<View style={styles.mapContainer}>
				<Image source={require("@/assets/images/preview/drive_map.png")} style={styles.mapImage} resizeMode="cover" />
			</View>

			<View style={styles.actionsContainer}>
				<View style={styles.actionButton}>
					<Ionicons name="location" size={20} color="white" />
					<Text style={styles.actionText}>ถึงที่หมาย</Text>
				</View>
				<View style={styles.actionButton}>
					<Ionicons name="home" size={20} color="white" />
					<Text style={styles.actionText}>บ้านต่อไป</Text>
				</View>
			</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
		backgroundColor: "white",
	},
	titleSection: {
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#333",
	},
	subtitle: {
		fontSize: 14,
		color: "#666",
	},
	profileContainer: {
		alignItems: "center",
	},
	profileImage: {
		width: 40,
		height: 40,
		backgroundColor: "#FF8FA3",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	profileEmoji: {
		fontSize: 20,
	},
	liveContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
		gap: 15,
	},
	liveIndicator: {
		backgroundColor: "#FFD700",
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 12,
	},
	liveText: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#333",
	},
	timeContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	timeText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
	},
	mapContainer: {
		flex: 1,
		margin: 20,
		borderRadius: 15,
		overflow: "hidden",
		position: "relative",
	},
	mapImage: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	mapPlaceholder: {
		flex: 1,
		backgroundColor: "#e8f4f8",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	mapText: {
		fontSize: 24,
		marginBottom: 10,
		textAlign: "center",
	},
	mapSubtext: {
		fontSize: 14,
		color: "#666",
		textAlign: "center",
		lineHeight: 20,
	},
	mapOverlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	busContainer: {
		position: "absolute",
		left: "18%",
		top: "50%",
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	busIcon: {
		fontSize: 24,
	},
	destinationMarker: {
		position: "absolute",
		right: "15%",
		top: "20%",
		width: 40,
		height: 50,
		backgroundColor: "#FF4444",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	cityLabel: {
		position: "absolute",
		left: "30%",
		bottom: "30%",
		fontSize: 14,
		color: "#666",
		fontWeight: "500",
	},
	actionsContainer: {
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 15,
		gap: 15,
	},
	actionButton: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FF8FA3",
		paddingVertical: 12,
		borderRadius: 25,
		gap: 8,
	},
	actionText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
	emergencyContainer: {
		position: "absolute",
		bottom: 100,
		alignSelf: "center",
	},
	emergencyButton: {
		width: 70,
		height: 70,
		backgroundColor: "#FF8FA3",
		borderRadius: 35,
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
		elevation: 5,
	},
	emergencyIconContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	emergencyIcon: {
		fontSize: 30,
	},
});
