import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProductItem({ item }) {
	const navigation = useNavigation();

	const { imageLink, title } = item;

	function pressHandler() {
		navigation.navigate('formScreen', { item });
	}

	return (
		<View style={styles.itemOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.itemContainer, styles.pressed]
						: styles.itemContainer
				}
				android_ripple={{ color: Colors.whiteHover }}
				onPress={pressHandler}
			>
				<Image style={styles.image} source={{ uri: imageLink }} />
				<Text style={styles.itemText}>{title}</Text>
				<Text style={styles.icon}>
					<FontAwesome name='wpforms' size={24} color='black' />
				</Text>
			</Pressable>
		</View>
	);
}

export default ProductItem;

const styles = StyleSheet.create({
	itemOuterContainer: {},
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 20,
		paddingVertical: 4,
		paddingHorizontal: 4,
		marginHorizontal: 8,
		marginBottom: 16,
		shadowRadius: 1,
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 0.2,
		elevation: 2,
	},
	image: {
		borderRadius: 18,
		width: 64,
		height: 64,
		borderWidth: 2,
		borderColor: Colors.accent500,
	},
	itemText: {
		marginHorizontal: 16,
		flex: 1,
		textAlign: 'left',
		fontSize: 16,
	},
	icon: {
		width: 64,
		fontSize: 24,
		lineHeight: 64,
		textAlign: 'center',
	},
	pressed: { backgroundColor: Colors.whiteHover },
});
