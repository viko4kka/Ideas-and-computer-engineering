import {
	FlatList,
	Keyboard,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import ProductItem from '../components/ProductItem';
import { useEffect, useState } from 'react';
import Colors from '../constants/colors';

const products = [
	{ id: 1, title: 'Smartwatch' },
	{ id: 2, title: 'Desk Chair' },
	{ id: 3, title: 'Bluetooth Speaker' },
	{ id: 4, title: 'Backpack' },
	{ id: 5, title: 'Coffee Maker' },
	{ id: 6, title: 'Yoga Mat' },
	{ id: 7, title: 'Running Shoes' },
	{ id: 8, title: 'Sunglasses' },
	{ id: 9, title: 'Portable Charger' },
	{ id: 10, title: 'Digital Camera' },
	{ id: 11, title: 'Headphones' },
	{ id: 12, title: 'Dumbbell Set' },
	{ id: 13, title: 'Travel Mug' },
	{ id: 14, title: 'Gaming Console' },
	{ id: 15, title: 'Kindle E-reader' },
	{ id: 16, title: 'Drone' },
	{ id: 17, title: 'External Hard Drive' },
	{ id: 18, title: 'Graphic Tablet' },
	{ id: 19, title: 'Portable Projector' },
	{ id: 20, title: 'Instant Pot' },
];

function AddProductsScreen() {
	const [inputData, setInputData] = useState('');
	const [choosenProducts, setChoosenProducts] = useState(products);

	useEffect(() => {
		const filtredProducts = products.filter((product) =>
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
						<ProductItem title={item.title}></ProductItem>
					)}
					keyExtractor={(item) => item.id}
					style={styles.flatstyle}
					contentContainerStyle={{ paddingBottom: 20 }}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}

export default AddProductsScreen;

const styles = StyleSheet.create({
	root: { flex: 1 },
	productsContainer: {
		flex: 1,
		alignItems: 'center',
	},
	menuTopContainer: {
		position: 'absolute',
		alignItems: 'center',
		width: '100%',
		marginTop: 30,
	},
	inputStyle: {
		backgroundColor: Colors.white,
		padding: 10,
		fontSize: 16,
		width: '80%',
		borderRadius: 16,
		elevation: 2,
		shadowRadius: 1,
		shadowOffset: { height: 1, width: 0 },
		shadowOpacity: 0.2,
		elevation: 2,
	},

	flatListStyle: {
		flex: 1,
		marginTop: 70,
		marginHorizontal: 'auto',
		width: '80%',
		zIndex: -1,
	},
	flatstyle: {
		paddingVertical: 16,
		zIndex: 1,
		paddingBottom: 10,
	},
});
