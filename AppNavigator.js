import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Icon } from "@rneui/themed";

import HomeScreen from "./screens/Home";
import VerifyOriginScreen from "./screens/VerifyOrigin";
import QRScannerScreen from "./screens/QRScanner";
import FailOriginScreen from "./screens/FailOrigin";
import LoginScreen from "./screens/Login";
import OTPVerificationScreen from "./screens/OTPVerification";
import WalletProfileScreen from "./screens/WalletProfile";
import AdmitPermissionScreen from "./screens/Permission";
import TrackingDeliveryScreen from "./screens/TrackingDelivery";
import OrderDetailScreen from "./screens/OrderDetail";
import HistoryScreen from "./screens/History";
import PayConfirmScreen from "./screens/PayConfirm";
import ItemInfoScreen from "./screens/ItemInfo";

import { useEffect, useState } from "react";
const Stack = createStackNavigator();

const AppNavigator = () => {
	const [token, setToken] = useState("");

	useEffect(() => {
		const retrieveToken = async () => {
			try {
				const storedToken = await AsyncStorage.getItem("token");
				if (storedToken !== null) {
					setToken(storedToken);
				}
			} catch (error) {
				console.error(
					"Error retrieving email from AsyncStorage:",
					error
				);
			}
		};

		retrieveToken();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={token ? "Home" : "Login"}
			>
				<Stack.Screen
					options={{ headerShown: false }}
					name="Home"
					component={HomeScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={LoginScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="OTPVerification"
					component={OTPVerificationScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="VerifyOrigin"
					component={VerifyOriginScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="QRScanner"
					component={QRScannerScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="FailOrigin"
					component={FailOriginScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="WalletProfile"
					component={WalletProfileScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="ItemInfo"
					component={ItemInfoScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="AdmitPermission"
					component={AdmitPermissionScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="PayConfirm"
					component={PayConfirmScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="TrackingDelivery"
					component={TrackingDeliveryScreen}
				/>
				<Stack.Screen
					options={({ navigation }) => ({
						headerShown: true,
						headerLeft: () => (
							<Icon
								onPress={() => {
									navigation.goBack();
								}}
								style={{ marginLeft: 15 }}
								name="arrow-back"
								size={25}
								color="#000"
							/>
						),
						headerRight: () => (
							<Icon
								style={{ marginRight: 20 }}
								name="menu"
								size={25}
								color="#000"
							/>
						),
					})}
					name="History"
					component={HistoryScreen}
				/>
				<Stack.Screen
					options={({ navigation }) => ({
						headerShown: true,
						headerLeft: () => (
							<Icon
								onPress={() => {
									navigation.goBack();
								}}
								style={{ marginLeft: 15 }}
								name="arrow-back"
								size={25}
								color="#000"
							/>
						),
						headerRight: () => (
							<Icon
								style={{ marginRight: 20 }}
								name="menu"
								size={25}
								color="#000"
							/>
						),
					})}
					name="Order Detail"
					component={OrderDetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
