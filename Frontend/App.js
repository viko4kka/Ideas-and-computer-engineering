import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Colors from './constants/colors';
import LoginScreen from './screens/LoginScreen';
import MenuPanel from './components/MenuPanel';
import AddProductsScreen from './screens/AddProductsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FavProductsScreen from './screens/FavProductsScreen';
import FormScreen from './screens/FormScreen';

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
								headerTintColor: Colors.white,
								headerStyle: {
									backgroundColor: Colors.accent500,
									borderBottomColor: Colors.white,
									borderBottomWidth: 1,
								},
							}}
						>
							<Stack.Screen
								options={{
									headerShown: false,
								}}
								name='AddProductsScreen'
								component={AddProductsScreen}
							/>
							<Stack.Screen
								options={{
									title: 'Your forms',
									headerTitleAlign: 'center',
								}}
								name='favouriteProducts'
								component={FavProductsScreen}
							/>
							<Stack.Screen
								options={{
									title: 'form',
									headerTitleAlign: 'center',
								}}
								name='formScreen'
								component={FormScreen}
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
		flex: 1,
		backgroundColor: Colors.accent500,
	},
});
