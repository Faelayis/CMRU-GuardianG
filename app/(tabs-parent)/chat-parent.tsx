import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ChatItemProps {
	name: string;
	lastMessage: string;
	time: string;
	avatar: string;
	isOnline?: boolean;
	unreadCount?: number;
}

const ChatItem: React.FC<ChatItemProps> = ({ name, lastMessage, time, avatar, isOnline = false, unreadCount = 0 }) => (
	<TouchableOpacity style={styles.chatItem}>
		<View style={styles.avatarContainer}>
			<View style={styles.avatar}>
				<Text style={styles.avatarText}>{avatar}</Text>
			</View>
			{isOnline && <View style={styles.onlineIndicator} />}
		</View>

		<View style={styles.chatContent}>
			<View style={styles.chatHeader}>
				<Text style={styles.chatName}>{name}</Text>
				<Text style={styles.chatTime}>{time}</Text>
			</View>
			<Text style={styles.lastMessage}>{lastMessage}</Text>
		</View>

		{unreadCount > 0 && (
			<View style={styles.unreadBadge}>
				<Text style={styles.unreadText}>{unreadCount}</Text>
			</View>
		)}
	</TouchableOpacity>
);

export default function ChatScreen() {
	const chats = [
		{
			name: "คุณครูแอน",
			lastMessage: "น้องๆ ปลอดภัยดีครับ",
			time: "10:30",
			avatar: "👩‍🏫",
			isOnline: true,
			unreadCount: 2,
		},
		{
			name: "ผู้ปกครองห้อง 1/1",
			lastMessage: "ขอบคุณค่ะ",
			time: "10:15",
			avatar: "👥",
			isOnline: false,
			unreadCount: 0,
		},
		{
			name: "Faelayis",
			lastMessage: "กำลังไปรับน้องๆ ครับ",
			time: "09:45",
			avatar: "👨‍✈️",
			isOnline: true,
			unreadCount: 2,
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>แชท</Text>
			</View>

			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
				{chats.map((chat, index) => (
					<ChatItem
						key={index}
						name={chat.name}
						lastMessage={chat.lastMessage}
						time={chat.time}
						avatar={chat.avatar}
						isOnline={chat.isOnline}
						unreadCount={chat.unreadCount}
					/>
				))}
			</ScrollView>
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
	searchButton: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	scrollContainer: {
		flex: 1,
	},
	chatItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
		backgroundColor: "white",
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
	chatContent: {
		flex: 1,
	},
	chatHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 4,
	},
	chatName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
	},
	chatTime: {
		fontSize: 12,
		color: "#666",
	},
	lastMessage: {
		fontSize: 14,
		color: "#666",
	},
	unreadBadge: {
		backgroundColor: "#FF4444",
		borderRadius: 10,
		minWidth: 20,
		height: 20,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 6,
	},
	unreadText: {
		color: "white",
		fontSize: 12,
		fontWeight: "bold",
	},
});
