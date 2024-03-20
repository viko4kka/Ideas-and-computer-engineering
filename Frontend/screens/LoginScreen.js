import { useState } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	Pressable,
	KeyboardAvoidingView,
	ScrollView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import Button from '../components/Button';
import TextInputComponent from '../components/TextInputComponent';
import Colors from '../constants/colors';

function LoginScreen({
	userPhoneNumber,
	setUserPhoneNumber,
	setIsAuthenticated,
}) {
	const [phoneNumber, setPhoneNumber] = useState();
	const [smsCode, setSmsCode] = useState();
	const [verificationCode, setVerificationCode] = useState();

	function confirmHandle() {
		setPhoneNumber('');
		setVerificationCode('');
		if (userPhoneNumber) {
			if (true) {
				///sprawdzenie czy kod z maila ok
				setIsAuthenticated(true);
			}
		} else {
			setUserPhoneNumber(phoneNumber);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.textInputContainer}>
				<View style={styles.logoContainer}>
					<Image
						source={require('../assets/images/LogoBlack.png')}
						style={styles.logoImage}
					/>
					<Text style={styles.logoText}>Satisfaction Checker</Text>
				</View>
				{!userPhoneNumber ? (
					<TextInputComponent
						placeholder='Phone Number'
						autoCorrect={false}
						inputMode='tel'
						onChangeText={setPhoneNumber}
						value={phoneNumber}
					/>
				) : (
					<>
						<TextInputComponent
							placeholder='Code'
							autoCorrect={false}
							keyboardType='number-pad'
						/>
						<Pressable>
							<Text style={styles.codeText}>Get code</Text>
						</Pressable>
					</>
				)}
				<Button onPress={confirmHandle}>Log in</Button>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	root: { flex: 1 },
	textInputContainer: {
		flex: 1,
		marginTop: 50,
		flexDirection: 'column',
		alignItems: 'center',
		gap: 32,
	},
	logoContainer: { marginBottom: 25 },

	logoImage: {
		width: 170,
		height: 170,
		shadowColor: Colors.shadowWhite,
		shadowOffset: { height: 2, width: 0 },
		shadowRadius: 2,
		shadowOpacity: 0.25,
	},
	logoText: { textAlign: 'center', fontSize: 16 },
	codeText: {
		fontSize: 16,
	},
});
