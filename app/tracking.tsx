import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TrackingScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.titleSection}>
					<Text style={styles.title}>ผู้ปกครองอุ่นใจ</Text>
					<Text style={styles.subtitle}>GuardianG</Text>
				</View>
				<View style={styles.profileContainer}>
					<View style={styles.profileImage}>
						<Text style={styles.profileEmoji}>👤</Text>
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
				<View style={styles.mapPlaceholder}>
					<View style={styles.routeLine} />

					<View style={styles.busContainer}>
						<Text style={styles.busIcon}>🚌</Text>
					</View>

					<View style={styles.destinationMarker}>
						<Ionicons name="home" size={24} color="white" />
					</View>

					<Text style={styles.cityLabel}>OLD CITY</Text>
				</View>
			</View>

			<View style={styles.emergencyContainer}>
				<TouchableOpacity style={styles.emergencyButton}>
					<View style={styles.emergencyIconContainer}>
						<Text style={styles.emergencyIcon}>🚨</Text>
					</View>
				</TouchableOpacity>
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
	},
	mapPlaceholder: {
		flex: 1,
		backgroundColor: "#e8f4f8",
		position: "relative",
	},
	routeLine: {
		position: "absolute",
		left: "20%",
		top: "60%",
		bottom: "20%",
		width: 4,
		backgroundColor: "#4CAF50",
		borderRadius: 2,
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
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
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
