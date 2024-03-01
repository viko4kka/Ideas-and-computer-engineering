import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Colors from './constants/colors';
import LoginScreen from './screens/LoginScreen';
import MenuPanel from './components/MenuPanel';

export default function App() {
	const [userEmail, setUserEmail] = useState();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	function logoutHandle() {
		setUserEmail('');
		setIsAuthenticated(false);
	}

	return (
		<SafeAreaView style={styles.screen}>
			{isAuthenticated ? (
				<>
					<MenuPanel onLogout={logoutHandle} />
				</>
			) : (
				<LoginScreen
					userEmail={userEmail}
					setUserEmail={setUserEmail}
					setIsAuthenticated={setIsAuthenticated}
				/>
			)}
			<StatusBar style='dark' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.accent500,
	},
});
