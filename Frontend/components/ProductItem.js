import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

function ProductItem({ title }) {
	return (
		<View style={styles.itemContainer}>
			<Image
				style={styles.image}
				source={require('../assets/images/kanapka.png')}
			/>
			<Text style={styles.itemText}>{title}</Text>
			<Text style={styles.plusText}>+</Text>
		</View>
	);
}

export default ProductItem;

const styles = StyleSheet.create({
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
	plusText: {
		width: 64,
		fontSize: 24,
		lineHeight: 64,
		textAlign: 'center',
	},
});
