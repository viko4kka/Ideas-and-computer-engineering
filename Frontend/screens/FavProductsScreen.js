import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
	FlatList,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import Colors from '../constants/colors';
import ProductItem from '../components/ProductItem';

const favProducts = [
	{
		id: 1,
		title: 'Smartwatch',
		imageLink: 'https://source.unsplash.com/600x400/?smartwatch',
		readyIn: 1,
	},
	{
		id: 2,
		title: 'Desk Chair',
		imageLink: 'https://source.unsplash.com/600x400/?desk-chair',
		readyIn: 0,
	},
	{
		id: 3,
		title: 'Bluetooth Speaker',
		imageLink: 'https://source.unsplash.com/600x400/?bluetooth-speaker',
		readyIn: 3,
	},
];

function FavProductsScreen({ setCurrentRoute }) {
	const route = useRoute();

	useEffect(() => {
		setCurrentRoute(route.name);
	}, [route.name]);

	const [inputData, setInputData] = useState('');
	const [choosenProducts, setChoosenProducts] = useState(
		favProducts.sort((a, b) => a.readyIn - b.readyIn)
	);

	useEffect(() => {
		const filtredProducts = favProducts.filter((product) =>
			product.title.toLowerCase().includes(inputData.toLowerCase())
		);
		setChoosenProducts(filtredProducts);
	}, [inputData]);

	return (
		<View style={styles.productsContainer}>
			<View style={styles.menuTopContainer}>
				<TextInput
					style={styles.inputStyle}
					onChangeText={setInputData}
					placeholder='Search'
				/>
			</View>
			<View style={styles.flatListStyle}>
				<FlatList
					data={choosenProducts}
					renderItem={({ item }) => (
						<ProductItem item={item} readyIn={item.readyIn}></ProductItem>
					)}
					ListEmptyComponent={
						<Text style={{ textAlign: 'center' }}>No items found</Text>
					}
					keyExtractor={(item) => item.id}
					style={styles.flatstyle}
					contentContainerStyle={{ paddingBottom: 24 }}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}

export default FavProductsScreen;

const styles = StyleSheet.create({
	root: { flex: 1 },
	productsContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: Platform.OS === 'android' && 25,
	},
	menuTopContainer: {
		position: 'absolute',
		alignItems: 'center',
		width: '100%',
	},
	inputStyle: {
		backgroundColor: Colors.white,
		padding: 10,
		fontSize: 16,
		width: '80%',
		borderRadius: 16,
		shadowRadius: 1,
		shadowOffset: { height: 1, width: 0 },
		shadowOpacity: 0.2,
		elevation: 2,
	},

	flatListStyle: {
		flex: 1,
		marginTop: 40,
		marginHorizontal: 'auto',
		width: '80%',
		zIndex: -1,
	},
	flatstyle: {
		paddingVertical: 24,
		zIndex: 1,
	},
});
