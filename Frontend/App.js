import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Colors from './constants/colors';
import LoginScreen from './screens/LoginScreen';
import MenuPanel from './components/MenuPanel';
import AddProductsScreen from './screens/AddProductsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FavProductsScreen from './screens/FavProductsScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
	const [userPhoneNumber, setUserPhoneNumber] = useState();
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const Stack = createStackNavigator();

	function logoutHandle() {
		setUserPhoneNumber('');
		setIsAuthenticated(false);
	}

	return (
		<SafeAreaView style={styles.screen}>
			{isAuthenticated ? (
				<>
					<NavigationContainer>
						<Stack.Navigator
							screenOptions={{
								cardStyle: { backgroundColor: Colors.accent500 },
								headerTintColor: Colors.shadowBlack,

								headerStyle: {
									backgroundColor: Colors.accent500,
									borderBottomColor: Colors.border,
									borderBottomWidth: 1,
								},
							}}
						>
							<Stack.Screen
								options={{ title: 'Add new Product' }}
								name='AddProductsScreen'
								component={AddProductsScreen}
							/>
							<Stack.Screen
								options={{ title: 'Your products' }}
								name='favouriteProducts'
								component={FavProductsScreen}
							/>
						</Stack.Navigator>
						<MenuPanel onLogout={logoutHandle} />
					</NavigationContainer>
				</>
			) : (
				<LoginScreen
					userPhoneNumber={userPhoneNumber}
					setUserPhoneNumber={setUserPhoneNumber}
					setIsAuthenticated={setIsAuthenticated}
				/>
			)}
			<StatusBar style='dark' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		position: 'relative',
		flex: 1,
		backgroundColor: Colors.accent500,
	},
});
