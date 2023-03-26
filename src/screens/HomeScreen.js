import { View, Text } from "react-native";
import React from "react";
import Trending from "../components/Trending";
import Clothes from "../components/Clothes";
import Categories from "../components/Categories";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
	return (
		<>
			<ScrollView>
				<Trending />
				<Clothes />
				<Categories />
			</ScrollView>
		</>
	);
};

export default HomeScreen;
