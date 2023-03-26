import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const Header = () => {
	return (
		<View style={styles.container}>
			<TextInput placeholderTextColor="#000" style={styles.input} placeholder="search categories" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 80,
		width: "100%",
		alignItems: "center",
		backgroundColor: "#fff",
        justifyContent:"center"
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 30,
		padding: 10,
        paddingLeft : 30,
        fontSize : 15,
		width: "80%",
        backgroundColor : "#e0ebeb",
        color : "#000"
	},
	search: {
        position : "absolute",
		height: 24,
		width: 24,
        top : 30,tintColor : "#000"
    },
});

export default Header;
