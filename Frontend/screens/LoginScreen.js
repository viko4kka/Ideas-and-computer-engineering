import { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../components/Button';
import TextInputComponent from '../components/TextInputComponent';
import Colors from '../constants/colors';

function LoginScreen({ userEmail, setUserEmail, setIsAuthenticated }) {
	const [email, setEmail] = useState();
	const [verificationCode, setVerificationCode] = useState();

	function confirmHandle() {
		setEmail('');
		setVerificationCode('');
		if (userEmail) {
			if (true) {
				///sprawdzenie czy kod z maila ok
				setIsAuthenticated(true);
			}
		} else {
			setUserEmail(email);
		}
	}

	return (
		<View style={styles.textInputContainer}>
			<View style={styles.logoContainer}>
				<Image
					source={require('../assets/images/LogoBlack.png')}
					style={styles.logoImage}
				/>
				<Text style={styles.logoText}>Satisfaction Checker</Text>
			</View>
			{!userEmail ? (
				<TextInputComponent
					placeholder='E-mail'
					autoCorrect={false}
					autoComplete='email'
					keyboardType='email-address'
					onChangeText={setEmail}
					value={email}
				/>
			) : (
				<TextInputComponent
					placeholder='Code'
					autoCorrect={false}
					keyboardType='number-pad'
				/>
			)}
			<Button onPress={confirmHandle}>Log in</Button>
		</View>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	textInputContainer: {
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
		shadowOffset: { height: 1, width: 1 },
		shadowRadius: 2,
		shadowOpacity: 0.25,
	},
	logoText: { textAlign: 'center', fontSize: 16 },
});
