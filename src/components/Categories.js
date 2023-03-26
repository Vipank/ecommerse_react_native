import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../axios/apis";
import { FlatList } from "react-native-gesture-handler";
import ProductItem from "./ProductItem";

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [selected, setSelected] = useState(0);
	useEffect(() => {
		getCategoriesAsync();
	}, []);

    useEffect (()=>{
        console.log(categories[selected])
    },[selected])

	const getCategoriesAsync = async () => {
		const resp = await getCategories();
		setCategories(resp);
	};

	const renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				onPress={() => setSelected(index)}
				style={{
					padding: 10,
					borderWidth: 1,
					borderRadius: 20,
					marginLeft: 10,
                    marginRight: 10,
					backgroundColor: selected == index ? "#e0ebeb" : "#fff",
					marginTop: 5,
				}}
			>
				<Text>{item.category}</Text>
			</TouchableOpacity>
		);
	};

    const renderProduct = ({ item, index }) => {
        return <ProductItem item={item} index={index}/>
    }

	return (
        <>
		<View>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={categories}
				renderItem={renderItem}
			/>
		</View>
        <View style = {{marginTop : 14,padding : 12}}>
            <FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={categories && categories[selected] ? categories[selected].data : []}
				renderItem={renderProduct}
			/>
		</View>
        <View style = {{marginTop : 14,padding : 12}}>
            <FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={categories && categories[selected] ? categories[selected].data : []}
				renderItem={renderProduct}
			/>
		</View>
        <View style = {{marginBottom : 50,padding : 12}}></View>
        </>
	);
};

export default Categories;
