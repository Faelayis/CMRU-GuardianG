import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useMode } from "@/contexts/ModeContext";
import { useModeNavigation } from "@/hooks/useModeNavigation";

export default function ProfileTab() {
	const { mode } = useMode();
	const { switchMode } = useModeNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>โปรไฟล์ - โหมดคนขับ</Text>
				<View style={styles.modeIndicator}>
					<Text style={styles.modeText}>DRIVER</Text>
				</View>
			</View>

			<View style={styles.content}>
				<View style={styles.profileImageContainer}>
					<View style={styles.profileImage}>
						<Text style={styles.profileEmoji} onPress={switchMode}>
							👨‍💼
						</Text>
					</View>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.name}>นายประยุทธ คมยุง</Text>
					<Text style={styles.phone}>123-456-7890</Text>
					<Text style={styles.address}>เลขที่ 1 ศรีภูมิ</Text>
					<Text style={styles.mode}>โหมด: {mode === "drive" ? "คนขับ" : "ผู้ปกครอง"}</Text>
				</View>

				<View style={styles.menuContainer}>
					<TouchableOpacity style={styles.menuItem} onPress={() => router.push("/edit-profile")}>
						<View style={styles.menuIcon}>
							<Ionicons name="person" size={20} color="#FF8FA3" />
						</View>
						<Text style={styles.menuText}>แก้ไขโปรไฟล์</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.menuItem} onPress={() => router.push("/login")}>
						<View style={styles.menuIcon}>
							<Ionicons name="log-out" size={20} color="#FF4444" />
						</View>
						<Text style={[styles.menuText, { color: "#FF4444" }]}>ออกจากระบบ</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>
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
	headerTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#333",
	},
	modeIndicator: {
		backgroundColor: "#FF8FA3",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 12,
	},
	modeText: {
		color: "white",
		fontSize: 12,
		fontWeight: "bold",
	},
	settingsButton: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
	profileImageContainer: {
		alignItems: "center",
		marginVertical: 30,
	},
	profileImage: {
		width: 100,
		height: 100,
		backgroundColor: "#FF8FA3",
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	profileEmoji: {
		fontSize: 50,
	},
	infoContainer: {
		alignItems: "center",
		marginBottom: 30,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 5,
	},
	phone: {
		fontSize: 16,
		color: "#666",
		marginBottom: 3,
	},
	address: {
		fontSize: 16,
		color: "#666",
		marginBottom: 3,
	},
	mode: {
		fontSize: 14,
		color: "#FF8FA3",
		fontWeight: "bold",
	},
	menuContainer: {
		backgroundColor: "white",
		borderRadius: 12,
		paddingVertical: 8,
	},
	menuItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	menuIcon: {
		width: 30,
		alignItems: "center",
		marginRight: 15,
	},
	menuText: {
		flex: 1,
		fontSize: 16,
		color: "#333",
	},
});
