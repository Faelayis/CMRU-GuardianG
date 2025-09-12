import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
					<Ionicons name="arrow-back" size={24} color="white" />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<View style={styles.logoSection}>
					<Text style={styles.title}>Login</Text>
					<View style={styles.logoContainer}>
						<View style={styles.logoBackground}>
							<Text style={styles.busIcon}>🚌</Text>
							<Text style={styles.phoneIcon}>📱</Text>
						</View>
					</View>
				</View>

				<View style={styles.formContainer}>
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Email</Text>
						<TextInput
							style={styles.input}
							value={email}
							onChangeText={setEmail}
							placeholder=""
							keyboardType="email-address"
							autoCapitalize="none"
						/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Password</Text>
						<View style={styles.passwordContainer}>
							<TextInput style={styles.passwordInput} value={password} onChangeText={setPassword} placeholder="" secureTextEntry />
							<Ionicons name="lock-closed" size={20} color="#999" style={styles.lockIcon} />
						</View>
					</View>

					<TouchableOpacity style={styles.option}>
						<Text style={styles.optionText}>ลืมรหัสผ่าน</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.option} onPress={() => router.push("/signup")}>
						<Text style={styles.optionText}>สมัครสมาชิก</Text>
						<Ionicons name="chevron-forward" size={20} color="#666" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.loginButton} onPress={() => router.push("/(tabs)")}>
						<Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
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
		paddingHorizontal: 20,
		paddingTop: 10,
	},
	backButton: {
		width: 40,
		height: 40,
		justifyContent: "center",
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
	logoSection: {
		alignItems: "center",
		marginTop: 20,
		marginBottom: 40,
	},
	title: {
		fontSize: 48,
		fontWeight: "bold",
		color: "white",
		marginBottom: 20,
	},
	logoContainer: {
		marginBottom: 20,
	},
	logoBackground: {
		width: 80,
		height: 80,
		backgroundColor: "#2D4A4E",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	busIcon: {
		fontSize: 30,
		position: "absolute",
		left: 15,
	},
	phoneIcon: {
		fontSize: 20,
		position: "absolute",
		right: 10,
		backgroundColor: "white",
		borderRadius: 6,
		padding: 3,
	},
	formContainer: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 30,
		flex: 1,
	},
	inputContainer: {
		marginBottom: 25,
	},
	inputLabel: {
		fontSize: 16,
		color: "#999",
		marginBottom: 8,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: "#E0E0E0",
		fontSize: 16,
		paddingVertical: 10,
		color: "#333",
	},
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#E0E0E0",
	},
	passwordInput: {
		flex: 1,
		fontSize: 16,
		paddingVertical: 10,
		color: "#333",
	},
	lockIcon: {
		marginLeft: 10,
	},
	option: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
	},
	optionText: {
		fontSize: 16,
		color: "#333",
	},
	loginButton: {
		backgroundColor: "#FF8FA3",
		borderRadius: 25,
		paddingVertical: 15,
		alignItems: "center",
		marginTop: 30,
	},
	loginButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "600",
	},
});
