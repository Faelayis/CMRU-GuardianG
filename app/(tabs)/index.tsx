import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
	const [searchText, setSearchText] = useState("");

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

			<View style={styles.searchContainer}>
				<View style={styles.searchBar}>
					<Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
					<TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChangeText={setSearchText} />
				</View>
				<TouchableOpacity style={styles.filterButton}>
					<Ionicons name="options" size={20} color="white" />
				</TouchableOpacity>
			</View>

			<View style={styles.mapContainer}>
				<Image source={require("@/assets/images/preview/home_map.png")} style={styles.mapImage} resizeMode="cover" />
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
	mapImage: {
		flex: 1,
		width: "100%",
		height: "100%",
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
	searchContainer: {
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 15,
		gap: 10,
	},
	searchBar: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 25,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	searchIcon: {
		marginRight: 10,
	},
	searchInput: {
		flex: 1,
		fontSize: 16,
	},
	filterButton: {
		width: 50,
		height: 50,
		backgroundColor: "#FF8FA3",
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
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
