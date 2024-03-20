import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

function MenuPanel({ onLogout }) {
	const navigation = useNavigation();

	function productsButtonHandler() {
		navigation.navigate('favouriteProducts');
	}

	function addButtonHandler() {
		navigation.navigate('AddProductsScreen');
	}

	return (
		<View style={styles.menu}>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.option, styles.pressed] : styles.option
				}
				onPress={productsButtonHandler}
			>
				<Text style={styles.optionText}>Products</Text>
			</Pressable>

			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.option, styles.pressed] : styles.option
				}
				onPress={onLogout}
			>
				<Text style={styles.optionText}>Log out</Text>
			</Pressable>
		</View>
	);
}

export default MenuPanel;

const styles = StyleSheet.create({
	menu: {
		width: '85%',
		height: 60,
		marginBottom: Platform.OS === 'ios' ? 0 : 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		paddingHorizontal: 16,
		paddingVertical: 16,
		backgroundColor: Colors.white,
		borderRadius: 24,
		shadowColor: Colors.shadowBlack,
		shadowRadius: 3,
		shadowOffset: { height: 2, width: 0 },
		shadowOpacity: 0.25,
		elevation: 5,
	},
	option: { flex: 1, alignItems: 'center' },
	optionText: {
		fontSize: 16,
	},
	pressed: { opacity: 0.7 },
});
