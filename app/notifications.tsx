import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NotificationItemProps {
	name: string;
	time: string;
	avatar: string;
	isOnline?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ name, time, avatar, isOnline = false }) => (
	<View style={styles.notificationItem}>
		<View style={styles.avatarContainer}>
			<View style={styles.avatar}>
				<Text style={styles.avatarText}>{avatar}</Text>
			</View>
			{isOnline && <View style={styles.onlineIndicator} />}
		</View>

		<View style={styles.notificationContent}>
			<Text style={styles.notificationName}>{name}</Text>
			<Text style={styles.notificationTime}>{time}</Text>
		</View>

		<View style={styles.statusIndicator} />
	</View>
);

export default function NotificationsScreen() {
	const notifications = [
		{ name: "น้องอุก กะยู", time: "09:30 น.", avatar: "👦", isOnline: false },
		{ name: "น้องกนก มีนะ", time: "09:25 น.", avatar: "👧", isOnline: false },
		{ name: "น้องหน่อย", time: "09:20 น.", avatar: "👶", isOnline: false },
		{ name: "น้องอพอลโล", time: "09:15 น.", avatar: "🧒", isOnline: false },
		{ name: "น้องมิน มิน", time: "09:10 น.", avatar: "👧", isOnline: true },
		{ name: "น้องอพอลโล", time: "09:05 น.", avatar: "🧒", isOnline: false },
		{ name: "น้องหน่อย", time: "09:00 น.", avatar: "👶", isOnline: true },
		{ name: "น้องอุก กะยู", time: "08:55 น.", avatar: "👦", isOnline: false },
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
					<Ionicons name="arrow-back" size={24} color="#333" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>แจ้งเตือน</Text>
				<TouchableOpacity style={styles.searchButton}>
					<Ionicons name="search" size={24} color="#333" />
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
				{notifications.map((notification, index) => (
					<NotificationItem
						key={index}
						name={notification.name}
						time={notification.time}
						avatar={notification.avatar}
						isOnline={notification.isOnline}
					/>
				))}
			</ScrollView>

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
	searchButton: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	scrollContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	notificationItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	avatarContainer: {
		position: "relative",
		marginRight: 15,
	},
	avatar: {
		width: 50,
		height: 50,
		backgroundColor: "#FF8FA3",
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	avatarText: {
		fontSize: 20,
	},
	onlineIndicator: {
		position: "absolute",
		bottom: 2,
		right: 2,
		width: 12,
		height: 12,
		backgroundColor: "#4CAF50",
		borderRadius: 6,
		borderWidth: 2,
		borderColor: "white",
	},
	notificationContent: {
		flex: 1,
	},
	notificationName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
		marginBottom: 2,
	},
	notificationTime: {
		fontSize: 14,
		color: "#666",
	},
	statusIndicator: {
		width: 8,
		height: 8,
		backgroundColor: "#4CAF50",
		borderRadius: 4,
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
