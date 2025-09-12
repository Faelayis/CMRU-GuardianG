import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EditProfileScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.push("/(tabs)/profile")} style={styles.backButton}>
					<Ionicons name="arrow-back" size={24} color="#333" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>โปรไฟล์</Text>
				<View style={{ width: 40 }} />
			</View>

			<View style={styles.content}>
				<View style={styles.profileImageContainer}>
					<View style={styles.profileImage}>
						<Text style={styles.profileEmoji}>👨‍💼</Text>
					</View>
				</View>

				<View style={styles.formContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>ชื่อ</Text>
						<View style={styles.inputContainer}>
							<Text style={styles.inputText}>นายประยุทธ คมยุง</Text>
							<TouchableOpacity style={styles.editButton}>
								<Text style={styles.editButtonText}>แก้ไข</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>เบอร์โทร</Text>
						<View style={styles.inputContainer}>
							<Text style={styles.inputText}>1234567890</Text>
							<TouchableOpacity style={styles.editButton}>
								<Text style={styles.editButtonText}>แก้ไข</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>ที่อยู่</Text>
						<View style={styles.inputContainer}>
							<Text style={styles.inputText}>เลขที่ 1 ศรีภูมิ</Text>
							<TouchableOpacity style={styles.editButton}>
								<Text style={styles.editButtonText}>แก้ไข</Text>
							</TouchableOpacity>
						</View>
					</View>

					<TouchableOpacity style={styles.saveButton} onPress={() => router.push("/(tabs)/profile")}>
						<Text style={styles.saveButtonText}>บันทึก</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FF8FA3",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	backButton: {
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
	},
	content: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 20,
	},
	profileImageContainer: {
		marginVertical: 30,
	},
	profileImage: {
		width: 120,
		height: 120,
		backgroundColor: "#FFB6C1",
		borderRadius: 60,
		alignItems: "center",
		justifyContent: "center",
	},
	profileEmoji: {
		fontSize: 60,
	},
	formContainer: {
		width: "100%",
		backgroundColor: "#FF8FA3",
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	inputGroup: {
		marginBottom: 25,
	},
	label: {
		fontSize: 16,
		color: "white",
		marginBottom: 10,
		fontWeight: "500",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 25,
		paddingHorizontal: 20,
		paddingVertical: 15,
		justifyContent: "space-between",
	},
	inputText: {
		fontSize: 16,
		color: "#333",
		flex: 1,
	},
	editButton: {
		backgroundColor: "#FFB6C1",
		paddingHorizontal: 15,
		paddingVertical: 8,
		borderRadius: 15,
	},
	editButtonText: {
		color: "white",
		fontSize: 14,
		fontWeight: "600",
	},
	saveButton: {
		backgroundColor: "white",
		borderRadius: 25,
		paddingVertical: 15,
		alignItems: "center",
		marginTop: 20,
	},
	saveButtonText: {
		color: "#FF8FA3",
		fontSize: 18,
		fontWeight: "600",
	},
});
