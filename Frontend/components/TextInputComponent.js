import { StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';

function TextInputComponent(props) {
	return <TextInput style={styles.textInput} {...props} />;
}

const styles = StyleSheet.create({
	textInput: {
		padding: 16,
		width: '80%',
		borderRadius: 50,
		fontSize: 16,
		backgroundColor: Colors.white,
		shadowColor: Colors.shadowBlack,
		shadowRadius: 2,
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 0.25,
		elevation: 2,
	},
});

export default TextInputComponent;
