import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileTab() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>โปรไฟล์</Text>
				<TouchableOpacity style={styles.settingsButton}>
					<Ionicons name="settings" size={24} color="#333" />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<View style={styles.profileImageContainer}>
					<View style={styles.profileImage}>
						<Text style={styles.profileEmoji}>👨‍💼</Text>
					</View>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.name}>นายประยุทธ คมยุง</Text>
					<Text style={styles.phone}>123-456-7890</Text>
					<Text style={styles.address}>เลขที่ 1 ศรีภูมิ</Text>
				</View>

				<View style={styles.menuContainer}>
					<TouchableOpacity style={styles.menuItem}>
						<View style={styles.menuIcon}>
							<Ionicons name="person" size={20} color="#FF8FA3" />
						</View>
						<Text style={styles.menuText}>แก้ไขโปรไฟล์</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.menuItem}>
						<View style={styles.menuIcon}>
							<Ionicons name="notifications" size={20} color="#FF8FA3" />
						</View>
						<Text style={styles.menuText}>การแจ้งเตือน</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.menuItem}>
						<View style={styles.menuIcon}>
							<Ionicons name="shield-checkmark" size={20} color="#FF8FA3" />
						</View>
						<Text style={styles.menuText}>ความปลอดภัย</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.menuItem}>
						<View style={styles.menuIcon}>
							<Ionicons name="help-circle" size={20} color="#FF8FA3" />
						</View>
						<Text style={styles.menuText}>ความช่วยเหลือ</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.menuItem}>
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
