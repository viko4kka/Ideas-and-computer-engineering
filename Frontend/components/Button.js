import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
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
				android_ripple={{ color: Colors.whiteHover }}
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
		borderRadius: 50,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		backgroundColor: 'white',
		shadowColor: Colors.shadowBlack,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	button: {
		borderRadius: 50,
		paddingHorizontal: 32,
		paddingVertical: 16,
		backgroundColor: Colors.white,
	},
	pressed: {
		opacity: 0.5,
	},
	buttonText: { fontSize: 16 },
});
