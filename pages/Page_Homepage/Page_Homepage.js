import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
const Page_Homepage  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<View style = {noneModeStyles._signal_solid_1}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 11, width: 13}} viewBox = "0 0 13 11">
							<Path fill = {"black"}     d = "M4.21621 6.11124H3.16216C2.96804 6.11124 2.81081 6.26317 2.81081 6.45075V10.5249C2.81081 10.7125 2.96804 10.8644 3.16216 10.8644H4.21621C4.41034 10.8644 4.56757 10.7125 4.56757 10.5249V6.45075C4.56757 6.26317 4.41034 6.11124 4.21621 6.11124ZM1.4054 8.14832H0.351351C0.15723 8.14832 0 8.30025 0 8.48783V10.5249C0 10.7125 0.15723 10.8644 0.351351 10.8644H1.4054C1.59953 10.8644 1.75676 10.7125 1.75676 10.5249V8.48783C1.75676 8.30025 1.59953 8.14832 1.4054 8.14832ZM7.02702 4.07416H5.97297C5.77885 4.07416 5.62162 4.22609 5.62162 4.41367V10.5249C5.62162 10.7125 5.77885 10.8644 5.97297 10.8644H7.02702C7.22115 10.8644 7.37838 10.7125 7.37838 10.5249V4.41367C7.37838 4.22609 7.22115 4.07416 7.02702 4.07416ZM9.83783 2.03708H8.78378C8.58966 2.03708 8.43243 2.18901 8.43243 2.37659V10.5249C8.43243 10.7125 8.58966 10.8644 8.78378 10.8644H9.83783C10.032 10.8644 10.1892 10.7125 10.1892 10.5249V2.37659C10.1892 2.18901 10.032 2.03708 9.83783 2.03708ZM12.6486 0H11.5946C11.4005 0 11.2432 0.151932 11.2432 0.339513V10.5249C11.2432 10.7125 11.4005 10.8644 11.5946 10.8644H12.6486C12.8428 10.8644 13 10.7125 13 10.5249V0.339513C13 0.151932 12.8428 0 12.6486 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._battery_three_quarters_solid_1}    >
				<View style = {noneModeStyles.style5}    >
					<View style = {noneModeStyles.style6}   >
						<Svg style={{height: 12, width: 23}} viewBox = "0 0 23 12">
							<Path fill = {"black"}     d = "M19.55 2.3V4.6H20.7V6.9H19.55V9.2H2.3V2.3H19.55ZM20.125 0H1.725C0.772297 0 0 0.772297 0 1.725V9.775C0 10.7277 0.772297 11.5 1.725 11.5H20.125C21.0777 11.5 21.85 10.7277 21.85 9.775V9.2H22.1375C22.6139 9.2 23 8.81385 23 8.3375V3.1625C23 2.68615 22.6139 2.3 22.1375 2.3H21.85V1.725C21.85 0.772297 21.0777 0 20.125 0ZM14.95 3.45H3.45V8.05H14.95V3.45Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._wifi_solid_1}    >
				<View style = {noneModeStyles.style8}    >
					<View style = {noneModeStyles.style9}   >
						<Svg style={{height: 12, width: 17}} viewBox = "0 0 17 12">
							<Path fill = {"black"}     d = "M16.8648 3.264C12.1587 -1.0888 4.8394 -1.0872 0.135181 3.264C-0.0417258 3.42763 -0.0451789 3.70468 0.125884 3.87441L1.03538 4.77674C1.19848 4.93877 1.46092 4.94222 1.63039 4.78683C5.50639 1.23595 11.4931 1.23516 15.3699 4.78683C15.5393 4.94222 15.8018 4.93851 15.9649 4.77674L16.8744 3.87441C17.0452 3.70468 17.0417 3.42763 16.8648 3.264ZM8.49999 8.50001C7.561 8.50001 6.79998 9.26103 6.79998 10.2C6.79998 11.139 7.561 11.9 8.49999 11.9C9.43897 11.9 10.2 11.139 10.2 10.2C10.2 9.26103 9.43897 8.50001 8.49999 8.50001ZM13.8834 6.27965C10.8218 3.57213 6.1747 3.57505 3.11656 6.27965C2.93328 6.44168 2.92743 6.72298 3.10142 6.89457L4.01623 7.79743C4.17561 7.95468 4.4322 7.96531 4.60193 7.81868C6.83186 5.89104 10.1732 5.89529 12.3978 7.81868C12.5675 7.96531 12.8241 7.95495 12.9835 7.79743L13.8983 6.89457C14.0725 6.72298 14.0664 6.44141 13.8834 6.27965Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._3_45}   >
				3:45
			</Text>
			<View style = {noneModeStyles.style11}    >
				<View style = {noneModeStyles.style12}   >
					<Svg style={{height: 149, width: 149}} viewBox = "0 0 149 149">
						<Path fill = {"#40C7DA"}     d = "M149 74.5C149 115.645 115.645 149 74.5 149C33.3548 149 0 115.645 0 74.5C0 33.3548 33.3548 0 74.5 0C115.645 0 149 33.3548 149 74.5Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_1}    >
			</View>
			<View style = {noneModeStyles._undraw_education_f8ru_1}    >
				<View style = {noneModeStyles.style15}    >
					<View style = {noneModeStyles.style16}   >
						<Svg style={{height: 32, width: 95}} viewBox = "0 0 95 32">
							<Path fill = {"#F2F2F2"}     d = "M95 0V31.4249H16.2687C7.29838 31.4249 0 24.3761 0 15.7125C0 7.04881 7.29837 0 16.2687 0H95Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style17}    >
					<View style = {noneModeStyles.style18}   >
						<Svg style={{height: 33, width: 98}} viewBox = "0 0 98 33">
							<Path fill = {"#0C848E"}     d = "M98 31.7059C97.9999 32.0244 97.8733 32.3298 97.6481 32.555C97.4229 32.7802 97.1175 32.9067 96.799 32.9069H16.4534C12.0897 32.9069 7.90472 31.1734 4.8191 28.0878C1.73349 25.0022 0 20.8172 0 16.4534C0 12.0897 1.73349 7.90471 4.8191 4.8191C7.90472 1.73348 12.0897 0 16.4534 0H96.799C97.1175 0 97.423 0.126534 97.6482 0.351762C97.8735 0.576989 98 0.882461 98 1.20098C98 1.5195 97.8735 1.82497 97.6482 2.0502C97.423 2.27543 97.1175 2.40196 96.799 2.40196H16.4534C12.7267 2.40196 9.1527 3.88238 6.51754 6.51755C3.88238 9.15271 2.40196 12.7268 2.40196 16.4534C2.40196 20.1801 3.88238 23.7542 6.51754 26.3893C9.1527 29.0245 12.7267 30.5049 16.4534 30.5049H96.799C97.1175 30.505 97.4229 30.6316 97.6481 30.8568C97.8733 31.082 97.9999 31.3874 98 31.7059Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style19}    >
					<View style = {noneModeStyles.style20}   >
						<Svg style={{height: 1, width: 85}} viewBox = "0 0 85 1">
							<Path fill = {"#CCCCCC"}     d = "M84.7585 0.482955H0.241477C0.177433 0.482955 0.116016 0.45751 0.0707306 0.412224C0.0254448 0.366938 0 0.305521 0 0.241477C0 0.177434 0.0254448 0.116016 0.0707306 0.0707306C0.116016 0.0254448 0.177433 0 0.241477 0H84.7585C84.8226 0 84.884 0.0254448 84.9293 0.0707306C84.9746 0.116016 85 0.177434 85 0.241477C85 0.305521 84.9746 0.366938 84.9293 0.412224C84.884 0.45751 84.8226 0.482955 84.7585 0.482955Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style21}    >
					<View style = {noneModeStyles.style22}   >
						<Svg style={{height: 1, width: 85}} viewBox = "0 0 85 1">
							<Path fill = {"#CCCCCC"}     d = "M84.7585 0.482955H0.241477C0.177433 0.482955 0.116016 0.45751 0.0707306 0.412224C0.0254448 0.366938 0 0.305521 0 0.241477C0 0.177434 0.0254448 0.116016 0.0707306 0.0707306C0.116016 0.0254448 0.177433 0 0.241477 0H84.7585C84.8226 0 84.884 0.0254448 84.9293 0.0707306C84.9746 0.116016 85 0.177434 85 0.241477C85 0.305521 84.9746 0.366938 84.9293 0.412224C84.884 0.45751 84.8226 0.482955 84.7585 0.482955Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style23}    >
					<View style = {noneModeStyles.style24}   >
						<Svg style={{height: 1, width: 85}} viewBox = "0 0 85 1">
							<Path fill = {"#CCCCCC"}     d = "M84.7585 0.482955H0.241477C0.177433 0.482955 0.116016 0.45751 0.0707306 0.412224C0.0254448 0.366938 0 0.305521 0 0.241477C0 0.177434 0.0254448 0.116016 0.0707306 0.0707306C0.116016 0.0254448 0.177433 0 0.241477 0H84.7585C84.8226 0 84.884 0.0254448 84.9293 0.0707306C84.9746 0.116016 85 0.177434 85 0.241477C85 0.305521 84.9746 0.366938 84.9293 0.412224C84.884 0.45751 84.8226 0.482955 84.7585 0.482955Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style25}    >
					<View style = {noneModeStyles.style26}   >
						<Svg style={{height: 1, width: 85}} viewBox = "0 0 85 1">
							<Path fill = {"#CCCCCC"}     d = "M84.7585 0.482955H0.241477C0.177433 0.482955 0.116016 0.45751 0.0707306 0.412224C0.0254448 0.366938 0 0.305521 0 0.241477C0 0.177434 0.0254448 0.116016 0.0707306 0.0707306C0.116016 0.0254448 0.177433 0 0.241477 0H84.7585C84.8226 0 84.884 0.0254448 84.9293 0.0707306C84.9746 0.116016 85 0.177434 85 0.241477C85 0.305521 84.9746 0.366938 84.9293 0.412224C84.884 0.45751 84.8226 0.482955 84.7585 0.482955Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style27}    >
					<View style = {noneModeStyles.style28}   >
						<Svg style={{height: 77, width: 87}} viewBox = "0 0 87 77">
							<Path fill = {"#F2F2F2"}     d = "M86.5813 52.7065L67.0069 77L6.14261 27.9587C-0.792067 22.371 -2.04349 12.3757 3.35305 5.67819C8.7496 -1.01937 18.7824 -1.92243 25.717 3.66518L86.5813 52.7065Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style29}    >
					<View style = {noneModeStyles.style30}   >
						<Svg style={{height: 80, width: 90}} viewBox = "0 0 90 80">
							<Path fill = {"#CCCCCC"}     d = "M70.4339 79.5524C70.2339 79.8005 69.9435 79.959 69.6266 79.9931C69.3097 80.0272 68.9923 79.9341 68.744 79.7342L6.13475 29.2868C2.73433 26.547 0.561575 22.5685 0.0945052 18.2266C-0.372564 13.8847 0.904306 9.53517 3.6442 6.13475C6.38409 2.73432 10.3626 0.561575 14.7044 0.0945056C19.0463 -0.372564 23.3959 0.904299 26.7963 3.64419L89.4056 54.0916C89.5286 54.1905 89.6309 54.3128 89.7066 54.4513C89.7823 54.5899 89.83 54.742 89.847 54.899C89.8639 55.0559 89.8497 55.2147 89.8053 55.3662C89.7608 55.5177 89.687 55.659 89.5879 55.7819C89.4888 55.9049 89.3665 56.0071 89.2279 56.0827C89.0893 56.1584 88.9372 56.206 88.7802 56.2229C88.6232 56.2397 88.4645 56.2254 88.313 56.1809C88.1615 56.1364 88.0203 56.0624 87.8974 55.9633L25.2882 5.51592C23.8503 4.35645 22.1982 3.49163 20.426 2.97083C18.6539 2.45003 16.7965 2.28347 14.96 2.48067C13.1234 2.67786 11.3438 3.23495 9.72259 4.1201C8.10141 5.00525 6.67051 6.20113 5.51161 7.63942C4.35272 9.0777 3.48853 10.7302 2.96843 12.5026C2.44833 14.2749 2.28251 16.1323 2.48043 17.9688C2.67834 19.8052 3.23613 21.5847 4.12192 23.2055C5.00771 24.8264 6.20414 26.2568 7.64289 27.4151L70.2522 77.8625C70.5002 78.0625 70.6588 78.3529 70.6928 78.6698C70.7269 78.9867 70.6338 79.3041 70.4339 79.5524Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style31}    >
					<View style = {noneModeStyles.style32}   >
						<Svg style={{height: 54, width: 66}} viewBox = "0 0 66 54">
							<Path fill = {"#CCCCCC"}     d = "M65.6085 53.2194L0.089577 0.427602C0.0649939 0.407794 0.0445492 0.383331 0.0294176 0.355624C0.0142859 0.327916 0.00475395 0.2975 0.00137741 0.266111C-0.00199913 0.234722 0.000848443 0.20298 0.00974104 0.172688C0.0186336 0.142396 0.0333946 0.114148 0.0532026 0.089565C0.0730105 0.0649819 0.0974661 0.0445445 0.125174 0.0294129C0.152881 0.0142813 0.183305 0.00475662 0.214694 0.00138008C0.246083 -0.00199645 0.277825 0.000836435 0.308117 0.00972904C0.338409 0.0186216 0.366657 0.0333973 0.39124 0.0532052L65.9102 52.8451C65.9348 52.8648 65.9553 52.8893 65.9705 52.917C65.9856 52.9447 65.9952 52.9752 65.9986 53.0066C66.002 53.038 65.9992 53.0698 65.9903 53.1001C65.9814 53.1304 65.9666 53.1587 65.9468 53.1833C65.927 53.2079 65.9025 53.2283 65.8748 53.2435C65.847 53.2586 65.8166 53.2681 65.7852 53.2715C65.7538 53.2748 65.722 53.272 65.6917 53.263C65.6614 53.2541 65.6331 53.2393 65.6085 53.2194V53.2194Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 54, width: 66}} viewBox = "0 0 66 54">
							<Path fill = {"#CCCCCC"}     d = "M65.6085 53.2194L0.0893429 0.427407C0.0397866 0.387374 0.00813681 0.329304 0.00136305 0.265959C-0.00541072 0.202614 0.0132471 0.139174 0.0532177 0.0895667C0.0931884 0.0399598 0.151212 0.00825008 0.214548 0.00139617C0.277885 -0.00545775 0.341349 0.0131082 0.391007 0.0530161L65.9102 52.845C65.9348 52.8648 65.9553 52.8893 65.9705 52.917C65.9856 52.9447 65.9952 52.9752 65.9986 53.0066C66.002 53.038 65.9992 53.0698 65.9903 53.1001C65.9814 53.1304 65.9666 53.1587 65.9468 53.1833C65.927 53.2079 65.9025 53.2283 65.8748 53.2435C65.847 53.2586 65.8166 53.2681 65.7852 53.2715C65.7537 53.2748 65.722 53.272 65.6917 53.263C65.6614 53.2541 65.6331 53.2393 65.6085 53.2194Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style35}    >
					<View style = {noneModeStyles.style36}   >
						<Svg style={{height: 54, width: 66}} viewBox = "0 0 66 54">
							<Path fill = {"#CCCCCC"}     d = "M65.6088 53.2197L0.0895799 0.427604C0.0399317 0.3876 0.00819969 0.329513 0.00137999 0.266119C-0.00543971 0.202726 0.0132016 0.139221 0.0532053 0.0895726C0.093209 0.0399244 0.151304 0.00819969 0.214697 0.00137999C0.278091 -0.00543971 0.341596 0.0132016 0.391244 0.0532053L65.9104 52.8453C65.935 52.8651 65.9555 52.8895 65.9706 52.9172C65.9857 52.9449 65.9952 52.9753 65.9986 53.0067C66.002 53.0381 65.9992 53.0699 65.9903 53.1002C65.9814 53.1304 65.9666 53.1587 65.9468 53.1833C65.927 53.2079 65.9025 53.2283 65.8748 53.2434C65.8471 53.2586 65.8167 53.2681 65.7853 53.2715C65.7539 53.2748 65.7222 53.272 65.6919 53.2631C65.6616 53.2542 65.6334 53.2394 65.6088 53.2196V53.2197Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style37}    >
					<View style = {noneModeStyles.style38}   >
						<Svg style={{height: 54, width: 66}} viewBox = "0 0 66 54">
							<Path fill = {"#CCCCCC"}     d = "M65.6085 53.2194L0.089577 0.427595C0.0649939 0.407787 0.0445492 0.383331 0.0294176 0.355624C0.0142859 0.327916 0.00475395 0.2975 0.00137741 0.266111C-0.00199913 0.234722 0.000848441 0.20298 0.00974103 0.172688C0.0186336 0.142396 0.0334093 0.114148 0.0532172 0.089565C0.0730251 0.0649819 0.0974808 0.0445445 0.125188 0.0294129C0.152896 0.0142813 0.183305 0.00475662 0.214694 0.00138008C0.246083 -0.00199645 0.277825 0.000836438 0.308117 0.00972904C0.338409 0.0186216 0.366657 0.0333973 0.39124 0.0532052L65.9102 52.845C65.9348 52.8648 65.9553 52.8893 65.9705 52.917C65.9856 52.9447 65.9952 52.9751 65.9986 53.0066C66.002 53.038 65.9992 53.0697 65.9903 53.1001C65.9814 53.1304 65.9666 53.1587 65.9468 53.1833C65.927 53.2079 65.9025 53.2283 65.8748 53.2434C65.847 53.2586 65.8166 53.2681 65.7852 53.2715C65.7537 53.2748 65.722 53.272 65.6917 53.263C65.6614 53.2541 65.6331 53.2393 65.6085 53.2194Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style39}    >
					<View style = {noneModeStyles.style40}   >
						<Svg style={{height: 1, width: 179}} viewBox = "0 0 179 1">
							<Path fill = {"#CCCCCC"}     d = "M178.759 0.481183H0.240591C0.176783 0.481183 0.115587 0.455831 0.0704674 0.410712C0.0253478 0.365592 0 0.3044 0 0.240591C0 0.176783 0.0253478 0.115591 0.0704674 0.0704711C0.115587 0.0253514 0.176783 0 0.240591 0H178.759C178.823 0 178.884 0.0253514 178.93 0.0704711C178.975 0.115591 179 0.176783 179 0.240591C179 0.3044 178.975 0.365592 178.93 0.410712C178.884 0.455831 178.823 0.481183 178.759 0.481183Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style41}    >
					<View style = {noneModeStyles.style42}   >
						<Svg style={{height: 11, width: 5}} viewBox = "0 0 5 11">
							<Path fill = {"#FFB8B8"}     d = "M4.20797 11L1.35626 10.9998L0 0L4.20897 0.000502433L4.20797 11Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style43}    >
					<View style = {noneModeStyles.style44}   >
						<Svg style={{height: 4, width: 9}} viewBox = "0 0 9 4">
							<Path fill = {"#2F2E41"}     d = "M3.47727 0H9V3.47727H0C-6.57891e-07 3.02063 0.0899356 2.56846 0.264685 2.14658C0.439434 1.7247 0.695566 1.34136 1.01846 1.01847C1.34136 0.695573 1.72469 0.439442 2.14657 0.264692C2.56845 0.0899426 3.02063 0 3.47727 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style45}    >
					<View style = {noneModeStyles.style46}   >
						<Svg style={{height: 11, width: 5}} viewBox = "0 0 5 11">
							<Path fill = {"#FFB8B8"}     d = "M4.20797 11L1.35626 10.9998L0 0L4.20897 0.000502433L4.20797 11Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style47}    >
					<View style = {noneModeStyles.style48}   >
						<Svg style={{height: 4, width: 9}} viewBox = "0 0 9 4">
							<Path fill = {"#2F2E41"}     d = "M3.47727 0H9V3.47727H0C-6.5789e-07 3.02063 0.0899432 2.56846 0.264692 2.14658C0.439441 1.72469 0.695573 1.34136 1.01847 1.01847C1.34136 0.695572 1.72469 0.439441 2.14658 0.264692C2.56846 0.0899426 3.02063 0 3.47727 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style49}    >
					<View style = {noneModeStyles.style50}   >
						<Svg style={{height: 15, width: 16}} viewBox = "0 0 16 15">
							<Path fill = {"#2F2E41"}     d = "M0 9.23554V7.99586C0 5.87522 0.842417 3.84145 2.34193 2.34193C3.84144 0.842421 5.87522 0 7.99585 0H7.99586C10.1165 0 12.1503 0.842421 13.6498 2.34193C15.1493 3.84145 15.9917 5.87522 15.9917 7.99586V9.23554C15.9917 10.7644 15.3844 12.2306 14.3034 13.3116C13.2223 14.3927 11.7561 15 10.2273 15H5.76447C5.00747 15 4.25788 14.8509 3.55851 14.5612C2.85913 14.2715 2.22365 13.8469 1.68837 13.3116C1.15309 12.7764 0.728486 12.1409 0.438794 11.4415C0.149102 10.7421 0 9.99254 0 9.23554Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style51}    >
					<View style = {noneModeStyles.style52}   >
						<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
							<Path fill = {"#FFB8B8"}     d = "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style53}    >
					<View style = {noneModeStyles.style54}   >
						<Svg style={{height: 5, width: 11}} viewBox = "0 0 11 5">
							<Path fill = {"#FFB8B8"}     d = "M0.752024 0.641612C1.00191 0.405653 1.3005 0.227355 1.62675 0.119273C1.953 0.011192 2.29897 -0.0240418 2.64031 0.0160527C2.98165 0.0561473 3.31004 0.170597 3.60237 0.351338C3.89469 0.532078 4.14383 0.774718 4.33223 1.06216L9.61084 0.0636577L11 3.12346L3.52578 4.42884C3.02191 4.71334 2.4312 4.80312 1.86555 4.68118C1.29991 4.55925 0.79864 4.23406 0.456739 3.76723C0.114838 3.30041 -0.0439401 2.72439 0.0104826 2.14831C0.0649053 1.57224 0.328749 1.03614 0.752024 0.641604V0.641612Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style55}    >
					<View style = {noneModeStyles.style56}   >
						<Svg style={{height: 15, width: 27}} viewBox = "0 0 27 15">
							<Path fill = {"#CCCCCC"}     d = "M23.1605 0.300082L23.2276 0.401855L14.8054 5.95011L0.593924 10.4882C0.405538 10.5487 0.243957 10.6727 0.136679 10.8389C0.0294002 11.0052 -0.0169419 11.2035 0.00554474 11.4001L0.315569 14.0704C0.329322 14.1886 0.367615 14.3026 0.428002 14.4051C0.488389 14.5076 0.569534 14.5964 0.666232 14.6657C0.762929 14.7351 0.873045 14.7834 0.989522 14.8077C1.106 14.832 1.22627 14.8317 1.34261 14.8067L14.7177 11.9398C15.365 11.8018 15.9771 11.5324 16.5159 11.1481L25.9778 4.4161C26.3209 4.17072 26.5946 3.84076 26.7723 3.45829C26.9501 3.07582 27.0258 2.65387 26.9922 2.23346C26.9575 1.81247 26.8138 1.40776 26.5753 1.05915C26.3367 0.710546 26.0115 0.430045 25.6317 0.245239C25.2518 0.0604325 24.8304 -0.0223133 24.4089 0.00514793C23.9874 0.0326092 23.5803 0.169328 23.2276 0.401855L23.1605 0.300082Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style57}    >
					<View style = {noneModeStyles.style58}   >
						<Svg style={{height: 51, width: 35}} viewBox = "0 0 35 51">
							<Path fill = {"#2F2E41"}     d = "M30.2488 51C30.0377 51 29.8312 50.9386 29.6544 50.8232C29.4777 50.7078 29.3383 50.5435 29.2534 50.3502L16.646 19.1983C16.6166 19.1308 16.5672 19.0738 16.5044 19.0352C16.4417 18.9966 16.3686 18.9781 16.295 18.9822C16.2214 18.9864 16.1509 19.0129 16.0928 19.0584C16.0348 19.1038 15.9921 19.1659 15.9704 19.2364L5.68478 49.5638C5.64136 49.705 5.56952 49.8357 5.4737 49.9481C5.37787 50.0604 5.26008 50.152 5.12756 50.2171C4.99504 50.2823 4.8506 50.3196 4.70311 50.3269C4.55562 50.3341 4.40821 50.3111 4.26994 50.2593L0.820796 48.9659C0.633587 48.8963 0.469338 48.7762 0.346311 48.6189C0.223283 48.4615 0.146298 48.2732 0.123912 48.0747C-1.42776 34.5575 12.1035 0.437999 12.2404 0.0950233L12.2783 0L24.6131 2.72854L24.6388 2.7565C29.56 8.12513 33.605 41.9864 34.366 48.7199C34.3944 48.9631 34.339 49.2087 34.2091 49.4163C34.0792 49.6239 33.8824 49.781 33.6513 49.8617L30.6068 50.9385C30.4918 50.9792 30.3707 51 30.2488 51Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style59}    >
					<View style = {noneModeStyles.style60}   >
						<Svg style={{height: 22, width: 18}} viewBox = "0 0 18 22">
							<Path fill = {"#CCCCCC"}     d = "M7.92427 22C4.83667 22 1.39437 21.3844 0.334797 18.8435L0.310406 18.7852L0.343353 18.7311C1.1797 17.3588 2.28509 15.018 1.69095 14.5785C0.520585 13.7132 -0.0473364 12.2896 0.00308467 10.3473C0.112543 6.13082 2.98553 2.38727 7.15217 1.0319H7.15223C8.31525 0.6597 9.49879 0.354966 10.6969 0.119218C11.5704 -0.0570347 12.4721 -0.0376486 13.3372 0.175987C14.2023 0.389623 15.0094 0.792206 15.7004 1.35481C16.4001 1.92111 16.9658 2.63536 17.3566 3.44624C17.7475 4.25713 17.9539 5.14452 17.961 6.04466C18.0047 10.5507 17.311 16.8266 13.7579 21.1353C13.5914 21.3352 13.3596 21.4699 13.1035 21.5158C11.3941 21.825 9.66136 21.987 7.92427 22Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style61}    >
					<View style = {noneModeStyles.style62}   >
						<Svg style={{height: 8, width: 10}} viewBox = "0 0 10 8">
							<Path fill = {"#FFB8B8"}     d = "M0.087863 5.06884C0.253608 4.47429 0.647295 3.96917 1.18338 3.66327C1.71946 3.35736 2.35461 3.27538 2.9508 3.43515C3.07251 3.46917 3.19122 3.51313 3.30572 3.5666L7.22481 0L9.95035 1.83621L4.34586 6.79576C4.09278 7.25205 3.69438 7.61059 3.21403 7.81434C2.73369 8.01809 2.19899 8.05533 1.69503 7.92016C1.40147 7.83981 1.12674 7.70207 0.886737 7.5149C0.646731 7.32773 0.446206 7.09485 0.296756 6.82971C0.147305 6.56456 0.0518901 6.27243 0.0160352 5.97019C-0.0198197 5.66795 0.00459546 5.36159 0.087863 5.06884Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style63}    >
					<View style = {noneModeStyles.style64}   >
						<Svg style={{height: 19, width: 13}} viewBox = "0 0 13 19">
							<Path fill = {"#CCCCCC"}     d = "M2.60512 18.9397C2.35496 18.9398 2.11247 18.8533 1.9189 18.6949L0.398498 17.4524C0.271761 17.3488 0.170093 17.2179 0.101105 17.0695C0.0321182 16.9211 -0.00240163 16.759 0.00012982 16.5953C0.00266127 16.4317 0.042177 16.2707 0.115722 16.1245C0.189267 15.9783 0.294936 15.8506 0.424816 15.751L6.80159 10.8602C6.87718 10.802 6.92674 10.7162 6.93954 10.6217C6.95234 10.5271 6.92733 10.4313 6.86994 10.355L2.93407 5.15164C2.4768 4.54912 2.24744 3.80423 2.28661 3.04885C2.32578 2.29347 2.63095 1.5763 3.1481 1.0243C3.69274 0.436074 4.43861 0.074089 5.23772 0.0101762C6.03682 -0.0537366 6.83075 0.185088 7.46196 0.679272L7.48687 0.705539L11.5968 6.5905C12.0412 6.93896 12.3991 7.38544 12.6424 7.89507C12.8858 8.4047 13.008 8.96369 12.9996 9.52838C12.9912 10.0931 12.8523 10.6482 12.5939 11.1503C12.3355 11.6525 11.9645 12.0881 11.5099 12.4232L3.25113 18.7269C3.0641 18.8651 2.83768 18.9397 2.60512 18.9397Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style65}    >
					<View style = {noneModeStyles.style66}   >
						<Svg style={{height: 6, width: 11}} viewBox = "0 0 11 6">
							<Path fill = {"#2F2E41"}     d = "M0 5.49337V2.40647L5.51096 0L10.7658 2.40647V5.49337C10.7658 5.62774 10.7124 5.7566 10.6174 5.85161C10.5224 5.94662 10.3935 6 10.2591 6H0.506625C0.37226 6 0.243397 5.94662 0.148387 5.85161C0.053376 5.7566 0 5.62774 0 5.49337Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style67}    >
					<View style = {noneModeStyles.style68}   >
						<Svg style={{height: 26, width: 20}} viewBox = "0 0 20 26">
							<Path fill = {"#2F2E41"}     d = "M0.192743 6.68373C-0.573571 4.23096 1.03585 1.41996 3.41508 0.449088C5.79432 -0.521784 8.64078 0.156886 10.6484 1.76091C12.656 3.36494 13.9016 5.76747 14.5616 8.25097C15.2215 10.7345 15.3468 13.3242 15.4687 15.891C18.3919 16.4279 20.3804 19.8951 19.3677 22.6894C18.3551 25.4837 14.607 26.8719 12.0185 25.4114C9.42994 23.9509 8.68021 20.0249 10.5484 17.7133C11.4324 16.6195 11.9262 15.2621 11.9516 13.856C11.977 12.4499 11.5325 11.0755 10.6886 9.95052C9.84474 8.82553 8.64964 8.01424 7.29261 7.64515C5.93557 7.27606 4.49418 7.37026 3.19673 7.91285C1.75605 8.51533 -0.0516384 6.94995 0.192743 6.68373Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style69}    >
					<View style = {noneModeStyles.style70}   >
						<Svg style={{height: 13, width: 22}} viewBox = "0 0 22 13">
							<Path fill = {"#0C848E"}     d = "M10.7741 13C7.27628 12.977 3.82216 12.2205 0.634929 10.7794C0.4452 10.6948 0.284164 10.5569 0.171431 10.3824C0.0586981 10.208 -0.000863534 10.0045 9.46073e-06 9.79676V1.07741C0.000326322 0.791761 0.113942 0.5179 0.315928 0.315914C0.517913 0.113929 0.791771 0.000316861 1.07742 0H20.4708C20.7565 0.00032192 21.0303 0.113938 21.2323 0.315922C21.4343 0.517906 21.5479 0.791763 21.5482 1.07741V9.79678C21.5491 10.0045 21.4895 10.208 21.3768 10.3824C21.2641 10.5569 21.103 10.6948 20.9133 10.7794C17.7261 12.2205 14.272 12.977 10.7741 13Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style71}    >
					<View style = {noneModeStyles.style72}   >
						<Svg style={{height: 15, width: 33}} viewBox = "0 0 33 15">
							<Path fill = {"#0C848E"}     d = "M16.6036 14.6069C16.4586 14.607 16.3149 14.5782 16.1812 14.522L0.6645 7.97545C0.4644 7.89104 0.294173 7.74862 0.175767 7.56656C0.0573607 7.3845 -0.00379682 7.17115 0.000182559 6.95401C0.00416194 6.73687 0.0730999 6.5259 0.198097 6.3483C0.323094 6.1707 0.498421 6.03462 0.701479 5.95759L16.2184 0.0710116C16.4683 -0.0242363 16.7446 -0.0236487 16.9941 0.0726629L32.3031 5.95923C32.505 6.03688 32.6792 6.173 32.8033 6.35017C32.9274 6.52735 32.9958 6.73752 32.9998 6.9538C33.0038 7.17009 32.9432 7.38265 32.8257 7.56429C32.7082 7.74593 32.5392 7.88839 32.3403 7.97344L17.0312 14.5199C16.896 14.5774 16.7506 14.607 16.6036 14.6069Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style73}    >
					<View style = {noneModeStyles.style74}   >
						<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
							<Path fill = {"#3F3D56"}     d = "M1.5 3C2.32842 3 3 2.32842 3 1.5C3 0.671572 2.32842 0 1.5 0C0.671572 0 0 0.671572 0 1.5C0 2.32842 0.671572 3 1.5 3Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style75}    >
					<View style = {noneModeStyles.style76}   >
						<Svg style={{height: 8, width: 33}} viewBox = "0 0 33 8">
							<Path fill = {"black"}     d = "M32.1938 0.40447L16.8745 6.95521C16.755 7.00628 16.6265 7.03276 16.4966 7.03308C16.3668 7.03339 16.2381 7.00753 16.1185 6.95704L0.591543 0.406388C0.396548 0.326083 0.233869 0.183094 0.129207 1.47542e-05C0.0607418 0.118734 0.0183193 0.250662 0.00474866 0.387035C-0.008822 0.523408 0.00677457 0.661109 0.0505013 0.790992C0.094228 0.920876 0.165082 1.03997 0.258365 1.14037C0.351648 1.24077 0.465219 1.32018 0.591543 1.37332L16.1185 7.92397C16.2381 7.97446 16.3668 8.00032 16.4966 8C16.6265 7.99969 16.755 7.97321 16.8745 7.92214L32.1938 1.3714C32.3194 1.31779 32.4323 1.23813 32.525 1.13769C32.6176 1.03724 32.6879 0.918294 32.7311 0.788691C32.7744 0.659087 32.7897 0.521776 32.776 0.385825C32.7623 0.249873 32.72 0.118372 32.6517 0C32.5478 0.181613 32.3868 0.323806 32.1938 0.40447Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style77}    >
					<View style = {noneModeStyles.style78}   >
						<Svg style={{height: 12, width: 9}} viewBox = "0 0 9 12">
							<Path fill = {"#3F3D56"}     d = "M0.247545 12C0.313197 12 0.376164 11.9739 0.422587 11.9275C0.469011 11.8811 0.495087 11.8181 0.495087 11.7525V3.46934L8.65933 0.495085C8.72498 0.496063 8.78833 0.470919 8.83545 0.425188C8.88256 0.379456 8.90958 0.316881 8.91056 0.251229C8.91154 0.185577 8.8864 0.122224 8.84067 0.0751096C8.79494 0.0279949 8.73236 0.000977899 8.6667 0L0.50246 2.97426C0.436761 2.97274 0.371439 2.98458 0.31045 3.00906C0.249461 3.03353 0.194075 3.07013 0.147645 3.11664C0.100722 3.16259 0.0634803 3.21747 0.0381217 3.27805C0.0127631 3.33863 -0.000196729 3.40367 2.2571e-06 3.46934V11.7525C5.53942e-06 11.8181 0.0260868 11.8811 0.0725093 11.9275C0.118932 11.9739 0.181893 12 0.247545 12Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Find_your_ideal_Institute}   >
				Find your ideal Institute
			</Text>
			<Text style = {noneModeStyles._Tell_Us_What_You_re_Looking_For_Using_The_Search_Engine_And_See_The_Institute_Which_Suits_You_The_Best_According_To_Your_Requirements}   >
				Tell Us What You're Looking For Using The Search Engine And See The Institute Which Suits You The Best According To Your Requirements
			</Text>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<View style = {noneModeStyles._Rectangle_3}    >
			</View>
			<Text style = {noneModeStyles._Institute_Type}   >
				Institute Type
			</Text>
			<Text style = {noneModeStyles._Select_City}   >
				Select City
			</Text>
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<Text style = {noneModeStyles._Search}   >
				Search
			</Text>
			<Text style = {noneModeStyles._Want_to_submit_institute__Submit_Institute}   >
				Want to submit institute? Submit Institute
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Homepage

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 615,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(238, 238, 238)",
	},
_signal_solid_1: {
	width: 13.6736,
	height: 10.5703,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 292.367},
		{translateY: 7.6875},
	],
	},
style2: {
	position: "absolute",
	},
style3: {
	},
_battery_three_quarters_solid_1: {
	width: 22.8145,
	height: 18.2516,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 309.484,
	top: 0,
	},
style5: {
	position: "absolute",
	transform: [
		{translateY: 6.89743},
	],
	},
style6: {
	},
_wifi_solid_1: {
	width: 16.8629,
	height: 13.4903,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 271.798,
	top: 6.94354,
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 0.0000305176},
		{translateY: 0.84317},
	],
	},
style9: {
	},
_3_45: {
	width: 56.5403,
	height: 17.8548,
	position: "absolute",
	left: 23.8064,
	top: 7.93549,
	color: "rgb(0, 0, 0)",
	fontSize: 11.9032,
	fontWeight: "400",
	lineHeight: 13.9491,
	fontFamily: "Roboto",
	textAlign: "left",
	},
style11: {
	width: 148.79,
	height: 148.79,
	position: "absolute",
	left: "50%",
	top: -74.3951,
	transform: [
		{translateX: -189.911},
	],
	},
style12: {
	},
_Ellipse_1: {
	width: 148.79,
	height: 148.79,
	position: "absolute",
	left: "50%",
	top: -13.8871,
	transform: [
		{translateX: -258.355},
	],
	},
_undraw_education_f8ru_1: {
	width: 178.097,
	height: 129.093,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 90,
	top: 92,
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 19.417},
		{translateY: 96.7773},
	],
	},
style16: {
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 17.7413},
		{translateY: 96.0591},
	],
	},
style18: {
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 29.4709},
		{translateY: 103.48},
	],
	},
style20: {
	},
style21: {
	position: "absolute",
	transform: [
		{translateX: 29.4709},
		{translateY: 109.225},
	],
	},
style22: {
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 29.4709},
		{translateY: 114.97},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 29.4709},
		{translateY: 120.715},
	],
	},
style26: {
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 87.3865},
		{translateY: 50.0622},
	],
	},
style28: {
	},
style29: {
	position: "absolute",
	transform: [
		{translateX: 85.722},
		{translateY: 48.6584},
	],
	},
style30: {
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 103.914},
		{translateY: 55.2345},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 100.309},
		{translateY: 59.7082},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 96.7045},
		{translateY: 64.1816},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
	transform: [
		{translateX: 93.0999},
		{translateY: 68.6552},
	],
	},
style38: {
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: -0.00000286102},
		{translateY: 128.615},
	],
	},
style40: {
	},
style41: {
	position: "absolute",
	transform: [
		{translateX: 76.8912},
		{translateY: 82.9506},
	],
	},
style42: {
	},
style43: {
	position: "absolute",
	transform: [
		{translateX: 72.9147},
		{translateY: 92.7243},
	],
	},
style44: {
	},
style45: {
	position: "absolute",
	transform: [
		{translateX: 48.933},
		{translateY: 82.9506},
	],
	},
style46: {
	},
style47: {
	position: "absolute",
	transform: [
		{translateX: 44.9567},
		{translateY: 92.7243},
	],
	},
style48: {
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 62.1117},
		{translateY: 6.29158},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 63.9523},
		{translateY: 9.42706},
	],
	},
style52: {
	},
style53: {
	position: "absolute",
	transform: [
		{translateX: 37.1336},
		{translateY: 34.9005},
	],
	},
style54: {
	},
style55: {
	position: "absolute",
	transform: [
		{translateX: 42.5205},
		{translateY: 24.594},
	],
	},
style56: {
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 48.1406},
		{translateY: 39.7601},
	],
	},
style58: {
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 60.0331},
		{translateY: 22.378},
	],
	},
style60: {
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 66.4736},
		{translateY: 38.4561},
	],
	},
style62: {
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 70.3364},
		{translateY: 24.6505},
	],
	},
style64: {
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 64.6238},
		{translateY: 8.46129},
	],
	},
style66: {
	},
style67: {
	position: "absolute",
	transform: [
		{translateX: 69.4},
	],
	},
style68: {
	},
style69: {
	position: "absolute",
	transform: [
		{translateX: 25.9999},
		{translateY: 11.1995},
	],
	},
style70: {
	},
style71: {
	position: "absolute",
	transform: [
		{translateX: 20.3165},
		{translateY: 2.66045},
	],
	},
style72: {
	},
style73: {
	position: "absolute",
	transform: [
		{translateX: 26.3589},
		{translateY: 19.6975},
	],
	},
style74: {
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 20.5351},
		{translateY: 9.24013},
	],
	},
style76: {
	},
style77: {
	position: "absolute",
	transform: [
		{translateX: 27.6765},
		{translateY: 9.52388},
	],
	},
style78: {
	},
_Find_your_ideal_Institute: {
	width: 220,
	height: 39,
	position: "absolute",
	left: 59,
	top: 245,
	color: "rgb(12, 132, 142)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Tell_Us_What_You_re_Looking_For_Using_The_Search_Engine_And_See_The_Institute_Which_Suits_You_The_Best_According_To_Your_Requirements: {
	width: 216,
	height: 66,
	position: "absolute",
	left: 60,
	top: 273,
	color: "rgba(0, 0, 0, 0.47)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Rectangle_2: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 59,
	top: 357,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Rectangle_3: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 60,
	top: 419,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Institute_Type: {
	width: 154,
	height: 19,
	position: "absolute",
	left: 92,
	top: 365,
	color: "rgba(0, 0, 0, 0.33)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 16.4062,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Select_City: {
	width: 146,
	height: 21,
	position: "absolute",
	left: 103,
	top: 427,
	color: "rgba(0, 0, 0, 0.38)",
	fontSize: 14,
	fontWeight: "400",
	lineHeight: 16.4062,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Rectangle_1: {
	width: 258,
	height: 47,
	backgroundColor: "rgb(12, 132, 142)",
	position: "absolute",
	left: 50,
	top: 490,
	},
_Search: {
	width: 186,
	height: 36,
	position: "absolute",
	left: 83,
	top: 501,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Want_to_submit_institute__Submit_Institute: {
	width: 253,
	height: 17,
	position: "absolute",
	left: 52,
	top: 558,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "700",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
})

