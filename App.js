import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_Search_Result from "./pages/Page_Search_Result/Page_Search_Result.js";
import Page_Institute_Submit from "./pages/Page_Institute_Submit/Page_Institute_Submit.js";
import Page_Homepage from "./pages/Page_Homepage/Page_Homepage.js";
import Page_Get_Started from "./pages/Page_Get_Started/Page_Get_Started.js";
import Page_Institute_Details from "./pages/Page_Institute_Details/Page_Institute_Details.js";
import Page_Contact_Us from "./pages/Page_Contact_Us/Page_Contact_Us.js";
const Tab = createBottomTabNavigator();
const Page_Search_ResultStackNavigator = createStackNavigator();
const ScreenForPage_Search_Result = () => {
	return (
		<Page_Search_ResultStackNavigator.Navigator>
			<Page_Search_ResultStackNavigator.Screen
				name = "Page_Search_Result"
				component = {Page_Search_Result}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Search_ResultStackNavigator.Navigator>
	)
};
const Page_Institute_SubmitStackNavigator = createStackNavigator();
const ScreenForPage_Institute_Submit = () => {
	return (
		<Page_Institute_SubmitStackNavigator.Navigator>
			<Page_Institute_SubmitStackNavigator.Screen
				name = "Page_Institute_Submit"
				component = {Page_Institute_Submit}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Institute_SubmitStackNavigator.Navigator>
	)
};
const Page_HomepageStackNavigator = createStackNavigator();
const ScreenForPage_Homepage = () => {
	return (
		<Page_HomepageStackNavigator.Navigator>
			<Page_HomepageStackNavigator.Screen
				name = "Page_Homepage"
				component = {Page_Homepage}
				options = {{
					headerShown: false
				}}
			/>
		</Page_HomepageStackNavigator.Navigator>
	)
};
const Page_Get_StartedStackNavigator = createStackNavigator();
const ScreenForPage_Get_Started = () => {
	return (
		<Page_Get_StartedStackNavigator.Navigator>
			<Page_Get_StartedStackNavigator.Screen
				name = "Page_Get_Started"
				component = {Page_Get_Started}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Get_StartedStackNavigator.Navigator>
	)
};
const Page_Institute_DetailsStackNavigator = createStackNavigator();
const ScreenForPage_Institute_Details = () => {
	return (
		<Page_Institute_DetailsStackNavigator.Navigator>
			<Page_Institute_DetailsStackNavigator.Screen
				name = "Page_Institute_Details"
				component = {Page_Institute_Details}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Institute_DetailsStackNavigator.Navigator>
	)
};
const Page_Contact_UsStackNavigator = createStackNavigator();
const ScreenForPage_Contact_Us = () => {
	return (
		<Page_Contact_UsStackNavigator.Navigator>
			<Page_Contact_UsStackNavigator.Screen
				name = "Page_Contact_Us"
				component = {Page_Contact_Us}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Contact_UsStackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_Search_Result"
							component = {ScreenForPage_Search_Result}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Institute_Submit"
							component = {ScreenForPage_Institute_Submit}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Homepage"
							component = {ScreenForPage_Homepage}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Get_Started"
							component = {ScreenForPage_Get_Started}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Institute_Details"
							component = {ScreenForPage_Institute_Details}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Contact_Us"
							component = {ScreenForPage_Contact_Us}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

