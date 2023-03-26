import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import Cart from "./Cart";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import Search from "./Search";
import Wishlist from "./Wishlist";

const Home = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const selectTab = index => {
		if (index >= 0) {
			setSelectedTab(index);
		}
	 };

   

	return (
		<View style={{ flex: 1 }}>
      <Header/>
      {selectedTab == 0 && <HomeScreen/>}
      {selectedTab == 1 && <Search/>}
      {selectedTab == 2 && <Cart/>}
      {selectedTab == 3 && <Wishlist/>}
      {selectedTab == 4 && <Profile/>}
			<View
				style={{
					width: "100%",
					bottom: 0,
					height: 70,
					position: "absolute",
					backgroundColor: "#fff",
					flexDirection: "row",
					alignItems: "center",
					// borderRadius: 35,
				}}
			>
				<TouchableOpacity
					style={{
						height: "100%",
						width: "20%",
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={() => selectTab(0)}
				>
					<Image
						source={require("../images/home.png")}
						style={{ height: 24, width: 24 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						height: "100%",
						width: "20%",
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={() => selectTab(1)}
				>
					<Image
						source={require("../images/search.png")}
						style={{ height: 24, width: 24 }}
					/>
				</TouchableOpacity>
				<View
					style={{
						width: "20%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						style={{
							height: 46,
							width: 46,
							backgroundColor: "#000",
							borderRadius: 23,
							justifyContent: "center",
							alignItems: "center",
						}}
						onPress={() => selectTab(2)}
					>
						<Image
							source={require("../images/bag.png")}
							style={{ height: 24, width: 24, tintColor: "white" }}
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{
						height: "100%",
						width: "20%",
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={() => selectTab(3)}
				>
					<Image
						source={require("../images/heart.png")}
						style={{ height: 24, width: 24 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						height: "100%",
						width: "20%",
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={() => selectTab(4)}
				>
					<Image
						source={require("../images/user.png")}
						style={{ height: 24, width: 24 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Home;
