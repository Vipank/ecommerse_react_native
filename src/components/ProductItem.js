import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProductItem = ({ item, index }) => {
	return (
        <>
        
		<View
			style={{
				width: 200,
				height: 250,
				borderRadius: 12,
				backgroundColor: "#fff",
				marginRight: 10,
			}}
		>
			<Image
				style={{ width: 200, height: 150, borderTopLeftRadius: 12,borderTopRightRadius : 12 }}
				source={{ uri: `${item.image}` }}
			/>
			<Text
				style={{ marginLeft: 10, marginTop: 12, fontSize: 18, fontWeight: 700 }}
			>
				{item.name}
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 4,
                    padding : 12,
                    alignItems : "center"
				}}
			>
				<Text
					style={{
						mrginTop: 10,
						fontSize: 24,
						fontWeight: 700,
					}}
				>
					{"₹ "+item.price}
				</Text>
                <TouchableOpacity style = {{borderRadius : 12,borderWidth : 1,padding : 8}}><Text>Add to Cart</Text></TouchableOpacity>
			</View>
		</View>
        </>
	);
};

export default ProductItem;
