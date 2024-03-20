import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { Children } from 'react';

function Button({ children, onPress }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.pressed, styles.button] : styles.button
				}
				onPress={onPress}
				android_ripple={{ color: Colors.white }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default Button;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
		zIndex: 10,
	},
	button: {
		zIndex: 10,
		padding: 16,
		paddingHorizontal: 32,
		backgroundColor: Colors.white,
		borderRadius: 50,
		shadowColor: Colors.shadowBlack,
		shadowRadius: 1,
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 0.2,
		elevation: 2,
	},
	pressed: {
		opacity: 0.8,
	},
	buttonText: { fontSize: 16 },
});
