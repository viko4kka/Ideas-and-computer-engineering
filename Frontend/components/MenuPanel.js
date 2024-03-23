import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

function MenuPanel({ onLogout }) {
	const sizeOfIcon = 18;
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
				<AntDesign name='form' size={sizeOfIcon} color={Colors.shadowBlack} />
				<Text style={styles.optionText}>Your Products</Text>
			</Pressable>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.option, styles.pressed] : styles.option
				}
				onPress={addButtonHandler}
			>
				<AntDesign name='plus' size={sizeOfIcon} color={Colors.shadowBlack} />
				<Text style={styles.optionText}>Add Product</Text>
			</Pressable>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.option, styles.pressed] : styles.option
				}
				onPress={onLogout}
			>
				<AntDesign name='logout' size={sizeOfIcon} color={Colors.shadowBlack} />
				<Text style={styles.optionText}>Log out</Text>
			</Pressable>
		</View>
	);
}

export default MenuPanel;

const styles = StyleSheet.create({
	menu: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		paddingHorizontal: 16,
		paddingVertical: 16,
		height: 60,
	},
	option: { flex: 1, alignItems: 'center' },
	optionText: {
		fontSize: 16,
	},
	pressed: { opacity: 0.7 },
});
