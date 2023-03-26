import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

const Clothes = () => {
	const [clothes, setClothes] = useState([]);

	useEffect(() => {
		setClothes([
			{
				id: 1,
				src: require("../images/clothes3.jpeg"),
			},
			{
				id: 2,
				src: require("../images/clothes4.jpeg"),
			},
			{
				id: 3,
				src: require("../images/clothes5.jpeg"),
			},
			{
				id: 4,
				src: require("../images/clothes6.jpeg"),
			},
            {
				id: 5,
				src: require("../images/clothes2.jpeg"),
			},
		]);
	}, []);

	const renderItem = item => {
		console.log(item);
		return (
			<Image
				key={item.id}
				source={item.src}
				style={{ width: 130, height: 150, borderRadius: 12, marginRight: 12 }}
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
				Most Purchased
			</Text>
			<ScrollView
				horizontal={true}
				scrollEventThrottle={16}
				showsHorizontalScrollIndicator={false}
			>
				{clothes.length > 0 && clothes.map(d => renderItem(d))}
			</ScrollView>
		</View>
	);
};

export default Clothes;
