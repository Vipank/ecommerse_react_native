import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

const Trending = () => {
	const [trending, setTrending] = useState([]);
	useEffect(() => {
		console.log(trending);
		setTrending([
			{
				id: 1,
				src: require("../images/banner.jpg"),
			},
			{
				id: 2,
				src: require("../images/banner2.png"),
			},
		]);
	}, []);

	const renderItem = item => {
		console.log(item);
		return (
			<Image
				key={item.id}
				source={item.src}
				style={{ width: 300, height: 130, borderRadius: 12, marginRight: 12 }}
			/>
		);
	};
	return (
		<View style={{ minHeight: 150, width: "100%", padding: 10 }}>
			<Text
				style={{
					fontSize: 20,
					fontWeight: 700,
					color: "#000",
					marginBottom: 10,
					marginLeft: 8,
				}}
			>
				Offers for You
			</Text>
			<ScrollView horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator = {false}>
				{trending.length > 0 && trending.map(d => renderItem(d))}
			</ScrollView>
		</View>
	);
};

export default Trending;
