import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

function MenuPanel({ onLogout }) {
	return (
		<View style={styles.menu}>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.option, styles.pressed] : styles.option
				}
				onPress={() => console.log('Products button clicked')}
			>
				<Text style={styles.optionText}>Products</Text>
			</Pressable>

			<View style={styles.addOptionContainer}>
				<Pressable
					style={({ pressed }) =>
						pressed ? [styles.addOption, styles.addBtnPressed] : styles.addOption
					}
					onPress={() => console.log('Add button clicked')}
				>
					<Text style={styles.addOptionText}>+</Text>
				</Pressable>
			</View>
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
		position: 'absolute',
		bottom: '5%',
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignSelf: 'center',
		paddingHorizontal: 32,
		paddingVertical: 16,
		backgroundColor: Colors.white,
		borderRadius: 20,
		shadowColor: Colors.shadowBlack,
		shadowRadius: 1,
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 0.2,
		elevation: 2,
	},
	option: { flex: 1, alignItems: 'center' },
	optionText: {
		fontSize: 16,
	},
	addOptionContainer: { position: 'relative', flex: 1, alignItems: 'center' },
	addOption: {
		position: 'absolute',
		width: 64,
		height: 64,
		top: -60,
		backgroundColor: Colors.white,
		borderRadius: 100,
		shadowColor: Colors.shadowBlack,
		shadowRadius: 1,
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 0.2,
		elevation: 2,
	},
	addOptionText: { textAlign: 'center', lineHeight: 64, fontSize: 24 },
	addBtnPressed: { backgroundColor: '#f8f9fa' },
	pressed: { opacity: 0.7 },
});
