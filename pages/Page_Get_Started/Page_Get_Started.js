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
const Page_Get_Started  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._signal_solid_1}    >
					<View style = {noneModeStyles._layer_de328d}    >
						<View style = {noneModeStyles._layer_0db667}   >
							<Svg style={{height: 11, width: 13}} viewBox = "0 0 13 11">
								<Path fill = {"black"}     d = "M4.21622 6.07728H3.16216C2.96804 6.07728 2.81081 6.22837 2.81081 6.41491V10.4664C2.81081 10.653 2.96804 10.8041 3.16216 10.8041H4.21622C4.41034 10.8041 4.56757 10.653 4.56757 10.4664V6.41491C4.56757 6.22837 4.41034 6.07728 4.21622 6.07728ZM1.40541 8.10304H0.351351C0.15723 8.10304 0 8.25413 0 8.44067V10.4664C0 10.653 0.15723 10.8041 0.351351 10.8041H1.40541C1.59953 10.8041 1.75676 10.653 1.75676 10.4664V8.44067C1.75676 8.25413 1.59953 8.10304 1.40541 8.10304ZM7.02703 4.05152H5.97297C5.77885 4.05152 5.62162 4.20261 5.62162 4.38915V10.4664C5.62162 10.653 5.77885 10.8041 5.97297 10.8041H7.02703C7.22115 10.8041 7.37838 10.653 7.37838 10.4664V4.38915C7.37838 4.20261 7.22115 4.05152 7.02703 4.05152ZM9.83784 2.02576H8.78378C8.58966 2.02576 8.43243 2.17685 8.43243 2.36339V10.4664C8.43243 10.653 8.58966 10.8041 8.78378 10.8041H9.83784C10.032 10.8041 10.1892 10.653 10.1892 10.4664V2.36339C10.1892 2.17685 10.032 2.02576 9.83784 2.02576ZM12.6486 0H11.5946C11.4005 0 11.2432 0.151088 11.2432 0.337627V10.4664C11.2432 10.653 11.4005 10.8041 11.5946 10.8041H12.6486C12.8428 10.8041 13 10.653 13 10.4664V0.337627C13 0.151088 12.8428 0 12.6486 0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._battery_three_quarters_solid_1}    >
					<View style = {noneModeStyles._layer_3d94fc}    >
						<View style = {noneModeStyles._layer_d9e852}   >
							<Svg style={{height: 12, width: 23}} viewBox = "0 0 23 12">
								<Path fill = {"black"}     d = "M19.55 2.3V4.6H20.7V6.9H19.55V9.2H2.3V2.3H19.55ZM20.125 0H1.725C0.772297 0 0 0.772297 0 1.725V9.775C0 10.7277 0.772297 11.5 1.725 11.5H20.125C21.0777 11.5 21.85 10.7277 21.85 9.775V9.2H22.1375C22.6139 9.2 23 8.81385 23 8.3375V3.1625C23 2.68615 22.6139 2.3 22.1375 2.3H21.85V1.725C21.85 0.772297 21.0777 0 20.125 0ZM14.95 3.45H3.45V8.05H14.95V3.45Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._wifi_solid_1}    >
					<View style = {noneModeStyles._layer_648ea0}    >
						<View style = {noneModeStyles._layer_020bb1}   >
							<Svg style={{height: 12, width: 17}} viewBox = "0 0 17 12">
								<Path fill = {"black"}     d = "M16.8648 3.264C12.1587 -1.0888 4.8394 -1.0872 0.135181 3.264C-0.0417258 3.42763 -0.0451789 3.70468 0.125884 3.87441L1.03538 4.77674C1.19848 4.93877 1.46092 4.94222 1.63038 4.78683C5.50639 1.23595 11.493 1.23516 15.3698 4.78683C15.5393 4.94222 15.8018 4.9385 15.9649 4.77674L16.8744 3.87441C17.0451 3.70468 17.0417 3.42763 16.8648 3.264ZM8.49998 8.50001C7.561 8.50001 6.79998 9.26102 6.79998 10.2C6.79998 11.139 7.561 11.9 8.49998 11.9C9.43897 11.9 10.2 11.139 10.2 10.2C10.2 9.26102 9.43897 8.50001 8.49998 8.50001ZM13.8834 6.27965C10.8218 3.57213 6.1747 3.57505 3.11656 6.27965C2.93328 6.44168 2.92743 6.72298 3.10142 6.89457L4.01623 7.79743C4.17561 7.95468 4.4322 7.9653 4.60193 7.81868C6.83186 5.89104 10.1732 5.89529 12.3978 7.81868C12.5675 7.9653 12.8241 7.95494 12.9835 7.79743L13.8983 6.89457C14.0725 6.72298 14.0664 6.44141 13.8834 6.27965Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._3_45}   >
					3:45
				</Text>
				<View style = {noneModeStyles._layer_e377cb}    >
					<View style = {noneModeStyles._layer_f3a487}   >
						<Svg style={{height: 150, width: 150}} viewBox = "0 0 150 150">
							<Path fill = {"#40C7DA"}     d = "M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Ellipse_1}    >
				</View>
				<View style = {noneModeStyles._undraw_Location_search_re_ttoj_1}    >
					<View style = {noneModeStyles._layer_679702}    >
						<View style = {noneModeStyles._layer_252366}   >
							<Svg style={{height: 13, width: 13}} viewBox = "0 0 13 13">
								<Path fill = {"#E6E6E6"}     d = "M6.5 13C10.0898 13 13 10.0898 13 6.5C13 2.91015 10.0898 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0898 2.91015 13 6.5 13Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_5ad723}    >
						<View style = {noneModeStyles._layer_602494}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#3F3D56"}     d = "M19.5636 17.4462L12.932 10.8146C13.4403 10.0239 13.7848 9.13923 13.945 8.213C14.1052 7.28677 14.0778 6.33781 13.8646 5.42235C13.6513 4.50688 13.2564 3.64353 12.7034 2.88345C12.1504 2.12338 11.4504 1.48204 10.645 0.997424C9.12837 0.0914182 7.32681 -0.211977 5.5971 0.147325C3.8674 0.506627 2.33571 1.50242 1.30539 2.93749C0.357326 4.2668 -0.0980108 5.88487 0.0176545 7.51352C0.13332 9.14218 0.81276 10.6797 1.93917 11.8616C3.06558 13.0436 4.56858 13.7963 6.18978 13.9902C7.81098 14.1841 9.44909 13.8071 10.8225 12.9241L17.4541 19.5558C17.7339 19.8353 18.1133 19.9922 18.5088 19.9921C18.9042 19.992 19.2835 19.8348 19.5631 19.5552C19.8428 19.2755 19.9999 18.8963 20 18.5008C20.0001 18.1053 19.8431 17.726 19.5636 17.4462ZM10.5749 10.567C9.75315 11.3887 8.67194 11.9001 7.51545 12.014C6.35897 12.128 5.19877 11.8374 4.23252 11.1917C3.26628 10.5461 2.55379 9.58547 2.21644 8.47343C1.8791 7.36139 1.93778 6.16679 2.38248 5.09316C2.82719 4.01953 3.63039 3.13331 4.65526 2.58551C5.68012 2.0377 6.86321 1.8622 8.00297 2.0889C9.14272 2.31561 10.1686 2.9305 10.9058 3.8288C11.643 4.7271 12.046 5.85323 12.046 7.01531C12.0468 7.67505 11.9173 8.32845 11.6648 8.93796C11.4124 9.54748 11.042 10.1011 10.5749 10.567Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_feb4d9}    >
						<View style = {noneModeStyles._layer_5f362e}   >
							<Svg style={{height: 116, width: 148}} viewBox = "0 0 148 116">
								<Path fill = {"#E6E6E6"}     d = "M144.054 70.4203C160.937 89.0917 111.995 116 72.4478 116C32.9009 116 5.54059 95.1508 0.841761 70.4203C-10.5513 10.457 97.9133 -27.6554 72.4478 24.8405C35.3289 101.359 130.758 55.7161 144.054 70.4203Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_fac39e}    >
						<View style = {noneModeStyles._layer_f8198d}   >
							<Svg style={{height: 116, width: 148}} viewBox = "0 0 148 116">
								<Path fill = {"#3F3D56"}     d = "M144.054 70.4203C160.937 89.0917 111.995 116 72.4478 116C32.9009 116 5.54059 95.1508 0.841761 70.4203C-10.5513 10.457 97.9133 -27.6554 72.4478 24.8405C35.3289 101.359 130.758 55.7161 144.054 70.4203Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_877ecb}    >
						<View style = {noneModeStyles._layer_21098b}   >
							<Svg style={{height: 10, width: 43}} viewBox = "0 0 43 10">
								<Path fill = {"#0C848E"}     d = "M21.281 9.61015C9.22561 9.07935 -0.121602 6.4789 0.0011961 3.68994C0.0748189 2.01787 3.48661 0.673309 9.36172 0.00116565C9.38274 -0.00138205 9.40406 0.000256506 9.42445 0.00598328C9.44485 0.01171 9.4639 0.0214117 9.48053 0.0345337C9.49715 0.0476558 9.51102 0.0639378 9.52133 0.0824405C9.53163 0.100943 9.53818 0.121302 9.54059 0.142345C9.54299 0.163388 9.54121 0.1847 9.53535 0.205052C9.52949 0.225405 9.51966 0.244396 9.50642 0.260933C9.49319 0.27747 9.47681 0.291227 9.45824 0.30141C9.43967 0.311593 9.41927 0.318 9.39821 0.320266C3.86387 0.953489 0.386094 2.25009 0.32207 3.70407C0.211022 6.22612 9.81549 8.78382 21.2951 9.28927C32.7748 9.79472 42.5669 8.09108 42.6779 5.56902C42.7422 4.10893 39.3702 2.50719 33.8777 1.389C33.857 1.38485 33.8373 1.37664 33.8197 1.36486C33.8022 1.35308 33.7872 1.33796 33.7755 1.32035C33.7638 1.30275 33.7557 1.28301 33.7517 1.26227C33.7476 1.24153 33.7477 1.22019 33.7519 1.19949C33.7561 1.17878 33.7644 1.15911 33.7762 1.14161C33.7881 1.1241 33.8032 1.1091 33.8209 1.09746C33.8385 1.08583 33.8583 1.07779 33.879 1.07381C33.8998 1.06982 33.9211 1.06997 33.9418 1.07425C39.7715 2.26113 43.0727 3.90456 42.9988 5.58314C42.876 8.3721 33.3364 10.141 21.281 9.61015Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_d49683}    >
						<View style = {noneModeStyles._layer_bfca88}   >
							<Svg style={{height: 7, width: 21}} viewBox = "0 0 21 7">
								<Path fill = {"#0C848E"}     d = "M0 0C0.991287 1.88311 2.45972 3.47289 4.25837 4.61026C6.05703 5.74763 8.12283 6.39271 10.2491 6.48097C12.3754 6.56922 14.4875 6.09755 16.3742 5.11314C18.2609 4.12874 19.8561 2.66612 21 0.871627C13.9893 0.966113 6.97874 0.675131 0 0Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_1c3c45}    >
						<View style = {noneModeStyles._layer_af34de}   >
							<Svg style={{height: 17, width: 25}} viewBox = "0 0 25 17">
								<Path fill = {"#0C848E"}     d = "M24.3583 16.4535C24.9719 14.6131 25.1487 12.6552 24.8747 10.7347C24.6008 8.81421 23.8836 6.98384 22.7799 5.38845C21.6762 3.79306 20.2163 2.47645 18.5158 1.54282C16.8153 0.609189 14.9209 0.0841697 12.9824 0.00931095C11.0439 -0.0655478 9.11454 0.31181 7.3471 1.11152C5.57966 1.91122 4.02261 3.11133 2.79918 4.61685C1.57575 6.12238 0.719524 7.89199 0.298269 9.78565C-0.122987 11.6793 -0.0977124 13.645 0.372096 15.5272C8.29381 16.872 16.3565 17.1833 24.3583 16.4535Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_93f543}    >
						<View style = {noneModeStyles._layer_573669}   >
							<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
								<Path fill = {"white"}     d = "M1.5 2.99999C2.32842 2.99999 2.99999 2.32842 2.99999 1.5C2.99999 0.671571 2.32842 0 1.5 0C0.671572 0 0 0.671571 0 1.5C0 2.32842 0.671572 2.99999 1.5 2.99999Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_f2431b}    >
						<View style = {noneModeStyles._layer_afdfc0}   >
							<Svg style={{height: 5, width: 5}} viewBox = "0 0 5 5">
								<Path fill = {"white"}     d = "M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_a7fd05}    >
						<View style = {noneModeStyles._layer_b24c7c}   >
							<Svg style={{height: 4, width: 4}} viewBox = "0 0 4 4">
								<Path fill = {"#0C848E"}     d = "M2 3.99999C3.10457 3.99999 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 3.99999 2 3.99999Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_98aa19}    >
						<View style = {noneModeStyles._layer_3c5f2f}   >
							<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
								<Path fill = {"#E6E6E6"}     d = "M0.999995 1.99998C1.55228 1.99998 1.99999 1.55227 1.99999 0.999992C1.99999 0.447711 1.55228 0 0.999995 0C0.447713 0 0 0.447711 0 0.999992C0 1.55227 0.447713 1.99998 0.999995 1.99998Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_919886}    >
						<View style = {noneModeStyles._layer_9cc2bb}   >
							<Svg style={{height: 2, width: 2}} viewBox = "0 0 2 2">
								<Path fill = {"#E6E6E6"}     d = "M0.999992 1.99998C1.55227 1.99998 1.99998 1.55227 1.99998 0.999992C1.99998 0.447711 1.55227 0 0.999992 0C0.447711 0 0 0.447711 0 0.999992C0 1.55227 0.447711 1.99998 0.999992 1.99998Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_3ae9f2}    >
						<View style = {noneModeStyles._layer_06e05a}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.500001 1C0.776145 1 1 0.776145 1 0.500001C1 0.223857 0.776145 0 0.500001 0C0.223857 0 0 0.223857 0 0.500001C0 0.776145 0.223857 1 0.500001 1Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_8e4353}    >
						<View style = {noneModeStyles._layer_10f130}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.499999 0.999998C0.776142 0.999998 0.999998 0.776142 0.999998 0.499999C0.999998 0.223856 0.776142 0 0.499999 0C0.223856 0 0 0.223856 0 0.499999C0 0.776142 0.223856 0.999998 0.499999 0.999998Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_58925c}    >
						<View style = {noneModeStyles._layer_50b49d}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.500001 1C0.776145 1 1 0.776145 1 0.500001C1 0.223857 0.776145 0 0.500001 0C0.223857 0 0 0.223857 0 0.500001C0 0.776145 0.223857 1 0.500001 1Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_1a9f77}    >
						<View style = {noneModeStyles._layer_673c8b}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.499999 0.999998C0.776142 0.999998 0.999998 0.776142 0.999998 0.499999C0.999998 0.223856 0.776142 0 0.499999 0C0.223856 0 0 0.223856 0 0.499999C0 0.776142 0.223856 0.999998 0.499999 0.999998Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_feb0a0}    >
						<View style = {noneModeStyles._layer_56cf5f}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.500001 1C0.776145 1 1 0.776145 1 0.500001C1 0.223857 0.776145 0 0.500001 0C0.223857 0 0 0.223857 0 0.500001C0 0.776145 0.223857 1 0.500001 1Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_99cff2}    >
						<View style = {noneModeStyles._layer_002936}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.499997 0.999997C0.776139 0.999997 0.999994 0.776141 0.999994 0.5C0.999994 0.223858 0.776139 0 0.499997 0C0.223855 0 0 0.223858 0 0.5C0 0.776141 0.223855 0.999997 0.499997 0.999997Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_600956}    >
						<View style = {noneModeStyles._layer_d40ee9}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.500001 1C0.776145 1 1 0.776146 1 0.500002C1 0.223859 0.776145 0 0.500001 0C0.223857 0 0 0.223859 0 0.500002C0 0.776146 0.223857 1 0.500001 1Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_b32921}    >
						<View style = {noneModeStyles._layer_aaf5fe}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.499999 0.999998C0.776142 0.999998 0.999998 0.776142 0.999998 0.499999C0.999998 0.223856 0.776142 0 0.499999 0C0.223856 0 0 0.223856 0 0.499999C0 0.776142 0.223856 0.999998 0.499999 0.999998Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_629922}    >
						<View style = {noneModeStyles._layer_51f6d6}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.499999 0.999998C0.776142 0.999998 1 0.776142 1 0.499999C1 0.223856 0.776142 0 0.499999 0C0.223856 0 0 0.223856 0 0.499999C0 0.776142 0.223856 0.999998 0.499999 0.999998Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_f59781}    >
						<View style = {noneModeStyles._layer_6b38db}   >
							<Svg style={{height: 1, width: 1}} viewBox = "0 0 1 1">
								<Path fill = {"#E6E6E6"}     d = "M0.500001 1C0.776145 1 1 0.776145 1 0.500001C1 0.223857 0.776145 0 0.500001 0C0.223857 0 0 0.223857 0 0.500001C0 0.776145 0.223857 1 0.500001 1Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_c7bb1c}    >
						<View style = {noneModeStyles._layer_bb98b6}   >
							<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
								<Path fill = {"white"}     d = "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_c5edfe}    >
						<View style = {noneModeStyles._layer_e695fe}   >
							<Svg style={{height: 27, width: 18}} viewBox = "0 0 18 27">
								<Path fill = {"white"}     d = "M18 9.00001C18 13.2443 11.438 23.1341 9.52032 25.9337C9.46246 26.0183 9.38483 26.0876 9.29416 26.1354C9.20349 26.1833 9.10252 26.2083 9 26.2083C8.89749 26.2083 8.79651 26.1833 8.70585 26.1354C8.61518 26.0876 8.53755 26.0183 8.47969 25.9337C6.56201 23.1341 0 13.2443 0 9.00001C-3.52233e-08 7.81811 0.232792 6.64778 0.685085 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685085C6.64778 0.232792 7.81811 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685085C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.81811 18 9.00001Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_1d3eb1}    >
						<View style = {noneModeStyles._layer_917e19}   >
							<Svg style={{height: 10, width: 10}} viewBox = "0 0 10 10">
								<Path fill = {"#0C848E"}     d = "M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_c77b2c}    >
						<View style = {noneModeStyles._layer_1632e3}   >
							<Svg style={{height: 3, width: 11}} viewBox = "0 0 11 3">
								<Path fill = {"white"}     d = "M5.50001 2.13433C8.53758 2.13433 11 1.65654 11 1.06717C11 0.477786 8.53758 0 5.50001 0C2.46244 0 0 0.477786 0 1.06717C0 1.65654 2.46244 2.13433 5.50001 2.13433Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_e8d783}    >
						<View style = {noneModeStyles._layer_5c954b}   >
							<Svg style={{height: 7, width: 15}} viewBox = "0 0 15 7">
								<Path fill = {"#FFB8B8"}     d = "M11.7444 0.924644C11.7027 1.00549 11.6675 1.0895 11.639 1.17589L3.7849 3.35821L2.36953 1.97312L0 3.83596L2.26735 6.53148C2.45052 6.74925 2.69939 6.90172 2.97659 6.966C3.25379 7.03029 3.54436 7.00292 3.80469 6.88801L12.2889 3.14284C12.5767 3.34263 12.9186 3.45006 13.269 3.45083C13.6193 3.4516 13.9617 3.34568 14.2504 3.14715C14.5391 2.94863 14.7605 2.66691 14.8852 2.33947C15.0099 2.01203 15.0319 1.65438 14.9484 1.3141C14.8649 0.973822 14.6797 0.667034 14.4176 0.434546C14.1555 0.202058 13.8288 0.054887 13.4809 0.0126084C13.1331 -0.0296701 12.7807 0.0349481 12.4705 0.197867C12.1603 0.360785 11.907 0.614283 11.7444 0.924644H11.7444Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_ffa7c0}    >
						<View style = {noneModeStyles._layer_ede566}   >
							<Svg style={{height: 7, width: 7}} viewBox = "0 0 7 7">
								<Path fill = {"#0C848E"}     d = "M6.37265 4.52307L3.39285 6.84235C3.30807 6.90834 3.21006 6.95529 3.1055 6.97998C3.00094 7.00468 2.89228 7.00655 2.78693 6.98546C2.68158 6.96438 2.58202 6.92084 2.49501 6.8578C2.40801 6.79477 2.33561 6.71373 2.28275 6.62019L0.430811 3.34263C0.0955442 2.90694 -0.0532467 2.35608 0.0170563 1.81084C0.0873594 1.2656 0.37102 0.770493 0.805839 0.4341C1.24066 0.0977071 1.79114 -0.0525164 2.33655 0.0163755C2.88197 0.0852674 3.37782 0.367652 3.71533 0.801599L6.4298 3.39239C6.50749 3.46659 6.56829 3.55667 6.60804 3.65649C6.64778 3.7563 6.66555 3.86351 6.66013 3.97081C6.65471 4.07812 6.62622 4.18299 6.57661 4.27829C6.527 4.37359 6.45744 4.45708 6.37265 4.52307V4.52307Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_d11a05}    >
						<View style = {noneModeStyles._layer_6671aa}   >
							<Svg style={{height: 9, width: 7}} viewBox = "0 0 7 9">
								<Path fill = {"#3F3D56"}     d = "M3.70425 0.045583L6.69467 1.39099C6.8199 1.44734 6.91762 1.55111 6.96633 1.6795C7.01504 1.80789 7.01075 1.95037 6.95441 2.0756L6.60036 2.86255C6.64201 2.88144 6.67449 2.91604 6.69071 2.9588C6.70693 3.00156 6.70557 3.04899 6.68694 3.09075L6.54532 3.40553C6.52643 3.44718 6.49183 3.47966 6.44907 3.49589C6.40631 3.51211 6.35887 3.51075 6.31711 3.49212L6.17548 3.8069C6.21713 3.82579 6.24962 3.86039 6.26584 3.90315C6.28206 3.94591 6.2807 3.99335 6.26207 4.03511L6.12045 4.34989C6.10156 4.39153 6.06696 4.42402 6.0242 4.44024C5.98144 4.45646 5.93401 4.45511 5.89225 4.43647L3.98036 8.68602C3.92402 8.81124 3.82023 8.90896 3.69185 8.95767C3.56346 9.00638 3.42098 9.00209 3.29575 8.94575L0.305324 7.60035C0.180098 7.544 0.0823814 7.44023 0.0336709 7.31184C-0.0150396 7.18345 -0.0107541 7.04097 0.0455827 6.91574L3.01964 0.305324C3.07598 0.180098 3.17976 0.0823814 3.30815 0.0336712C3.43654 -0.0150391 3.57902 -0.0107548 3.70425 0.045583Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_2aab9d}    >
						<View style = {noneModeStyles._layer_4093c9}   >
							<Svg style={{height: 8, width: 6}} viewBox = "0 0 6 8">
								<Path fill = {"#F2F2F2"}     d = "M0.297537 6.62057L2.74241 7.72165C2.86492 7.77642 3.00414 7.78054 3.12967 7.73309C3.25521 7.68564 3.3569 7.59049 3.41256 7.46837L4.54176 4.95665L4.934 4.08598L5.95593 1.81347C6.01053 1.69119 6.01455 1.55228 5.9671 1.42706C5.91965 1.30183 5.82458 1.20046 5.70266 1.14507L4.934 0.798577L3.25599 0.0440132C3.13353 -0.0106861 2.99437 -0.0145523 2.86906 0.0332643C2.74375 0.0810808 2.64254 0.176672 2.58765 0.299048L1.59912 2.49594L0.473437 4.9971L0.0442771 5.95219C-0.0105045 6.07444 -0.0146156 6.21342 0.0328531 6.33869C0.0803219 6.46396 0.175496 6.56532 0.297537 6.62057Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_86c8cb}    >
						<View style = {noneModeStyles._layer_0b483e}   >
							<Svg style={{height: 8, width: 3}} viewBox = "0 0 3 8">
								<Path fill = {"#FFB8B8"}     d = "M0.000333931 7.84012L2.03293 7.83995L2.99999 0L0 0.000166965L0.000333931 7.84012Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_c4accf}    >
						<View style = {noneModeStyles._layer_d9b649}   >
							<Svg style={{height: 3, width: 7}} viewBox = "0 0 7 3">
								<Path fill = {"#2F2E41"}     d = "M0 0.000172926L4.27527 1.06413e-09H4.27544C4.63324 -9.99837e-06 4.98753 0.0704537 5.31809 0.20737C5.64866 0.344285 5.94901 0.544977 6.20201 0.797973C6.45501 1.05097 6.65571 1.35132 6.79263 1.68188C6.92955 2.01244 7.00001 2.36673 7.00001 2.72452V2.81306L0.000129694 2.81332L0 0.000172926Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_b5eeda}    >
						<View style = {noneModeStyles._layer_c5e604}   >
							<Svg style={{height: 8, width: 3}} viewBox = "0 0 3 8">
								<Path fill = {"#FFB8B8"}     d = "M0.000333931 7.84012L2.03293 7.83995L2.99999 0L0 0.000166965L0.000333931 7.84012Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_bb6361}    >
						<View style = {noneModeStyles._layer_1bab02}   >
							<Svg style={{height: 3, width: 7}} viewBox = "0 0 7 3">
								<Path fill = {"#2F2E41"}     d = "M0 0.000172926L4.27527 1.06411e-09H4.27544C4.63324 -9.99837e-06 4.98753 0.0704537 5.31809 0.20737C5.64866 0.344285 5.94901 0.544977 6.20201 0.797973C6.45501 1.05097 6.65571 1.35132 6.79263 1.68188C6.92955 2.01244 7.00001 2.36673 7.00001 2.72452V2.81306L0.000129694 2.81332L0 0.000172926Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_33c672}    >
						<View style = {noneModeStyles._layer_4bc136}   >
							<Svg style={{height: 22, width: 22}} viewBox = "0 0 22 22">
								<Path fill = {"#2F2E41"}     d = "M0.381474 7.23851C0.794219 8.46198 1.57707 9.52689 2.62168 10.2859C3.66628 11.0448 4.92097 11.4603 6.2121 11.4748L6.31008 11.4764C7.31023 11.5048 8.48429 11.1825 9.6362 10.7195C11.9116 9.80464 14.0969 8.33986 14.6768 7.93693L13.694 17.3845L13.2958 21.2147C13.2857 21.3138 13.2965 21.4139 13.3275 21.5085C13.3585 21.6032 13.4089 21.6903 13.4756 21.7643C13.5423 21.8383 13.6237 21.8975 13.7147 21.9381C13.8056 21.9786 13.9041 21.9998 14.0037 22H16.4576C16.6149 22.0001 16.7679 21.948 16.8925 21.852C17.0172 21.7559 17.1065 21.6213 17.1465 21.4691L21.1979 6.03921C21.3194 5.57738 21.3292 5.09323 21.2265 4.62686C21.1237 4.16049 20.9113 3.7253 20.607 3.35731C20.3026 2.98931 19.915 2.6991 19.4761 2.51068C19.0373 2.32226 18.5599 2.24106 18.0835 2.27379L9.66784 2.85053L10.2556 0.499313L2.74371 0L2.72165 0.0157973C2.54149 0.146947 2.36612 0.28442 2.19862 0.428211C1.77982 0.78238 1.40856 1.18921 1.09408 1.63858C0.531487 2.44488 0.172759 3.37555 0.0486495 4.35085C-0.0754599 5.32616 0.0387455 6.31702 0.381474 7.23851Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_9b150d}    >
						<View style = {noneModeStyles._layer_7a15e5}   >
							<Svg style={{height: 22, width: 17}} viewBox = "0 0 17 22">
								<Path fill = {"#2F2E41"}     d = "M0.385264 5.65558C0.802111 6.89121 1.59275 7.9667 2.64773 8.73321C3.70271 9.49972 4.96987 9.91933 6.27383 9.93398C7.52077 9.30292 8.72404 8.58906 9.87557 7.79718L9.73196 9.17119L8.48086 21.2069C8.47071 21.3069 8.48162 21.408 8.5129 21.5036C8.54418 21.5992 8.59513 21.6872 8.66248 21.7619C8.72983 21.8367 8.81208 21.8964 8.90394 21.9374C8.99579 21.9784 9.0952 21.9998 9.19579 22H11.6741C11.833 22.0001 11.9875 21.9475 12.1134 21.8505C12.2392 21.7535 12.3294 21.6175 12.3698 21.4638L13.8301 15.9024L16.4615 5.8806C16.5843 5.41417 16.5941 4.92522 16.4904 4.45422C16.3866 3.98321 16.1721 3.5437 15.8647 3.17205C15.5573 2.80039 15.1658 2.5073 14.7226 2.317C14.2795 2.12671 13.7973 2.0447 13.3162 2.07776L4.81686 2.66023L5.41047 0.285649L1.10493 0C0.53675 0.814309 0.174473 1.75423 0.0491323 2.73923C-0.0762082 3.72423 0.039128 4.72493 0.385264 5.65558Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_31f035}    >
						<View style = {noneModeStyles._layer_03bbcb}   >
							<Svg style={{height: 17, width: 11}} viewBox = "0 0 11 17">
								<Path fill = {"#0C848E"}     d = "M1.54791 16.0302L1.49121 16.0234L0.17633 9.55844C0.165075 9.50232 -0.909842 3.92599 2.38548 1.01078L2.44283 0.611788C2.45752 0.509681 2.49418 0.411973 2.55028 0.325404C2.60638 0.238835 2.68059 0.165462 2.76779 0.110347C2.85499 0.0552327 2.9531 0.0196865 3.05537 0.00615927C3.15764 -0.00736792 3.26162 0.0014486 3.36016 0.0319959L6.46457 0.994911C6.64031 1.04905 6.78828 1.16908 6.87748 1.32988C6.96669 1.49068 6.99021 1.67976 6.94312 1.85752L6.64134 3.00541C7.05979 3.49682 11.9855 9.42709 10.2697 13.9959L9.5013 17L1.54791 16.0302Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_15f820}    >
						<View style = {noneModeStyles._layer_2871fe}   >
							<Svg style={{height: 7, width: 14}} viewBox = "0 0 14 7">
								<Path fill = {"#FFB8B8"}     d = "M11.4078 3.80107C11.332 3.84873 11.2601 3.90228 11.1928 3.96124L3.44607 1.88164L2.93962 0L0 0.393176L0.572858 3.81137C0.619137 4.08751 0.753743 4.34119 0.956468 4.53432C1.15919 4.72745 1.4191 4.84961 1.69716 4.88246L10.7596 5.95299C10.9035 6.26627 11.1394 6.52828 11.4359 6.7042C11.7324 6.88012 12.0755 6.9616 12.4194 6.9378C12.7634 6.91401 13.0919 6.78606 13.3614 6.57098C13.6308 6.3559 13.8284 6.06388 13.9278 5.73377C14.0273 5.40365 14.0239 5.05109 13.918 4.72297C13.8122 4.39485 13.609 4.10671 13.3354 3.8969C13.0619 3.68709 12.7309 3.56555 12.3865 3.54843C12.0422 3.53131 11.7008 3.61943 11.4078 3.80107H11.4078Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_f93127}    >
						<View style = {noneModeStyles._layer_4f0afe}   >
							<Svg style={{height: 7, width: 5}} viewBox = "0 0 5 7">
								<Path fill = {"#0C848E"}     d = "M4.37779 6.07516L0.804478 6.53543C0.702807 6.54853 0.599517 6.53956 0.501626 6.50913C0.403735 6.4787 0.313548 6.42754 0.237215 6.35911C0.160882 6.29069 0.100186 6.20662 0.0592737 6.11263C0.0183611 6.01864 -0.00181077 5.91693 0.000127561 5.81444L0.0682719 2.22316C0.00419395 1.70259 0.149168 1.17785 0.4714 0.764007C0.793632 0.350162 1.26683 0.0809903 1.78722 0.0155078C2.30762 -0.0499746 2.83274 0.0935794 3.24746 0.414694C3.66217 0.735808 3.93262 1.20827 3.99951 1.72849L4.97318 5.17386C5.00103 5.27252 5.00728 5.37602 4.99153 5.47731C4.97577 5.5786 4.93837 5.67531 4.88187 5.76084C4.82536 5.84637 4.75109 5.91872 4.66411 5.97297C4.57712 6.02721 4.47946 6.06206 4.37779 6.07516Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_049ece}    >
						<View style = {noneModeStyles._layer_e9ba71}   >
							<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
								<Path fill = {"#FFB8B8"}     d = "M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_62c700}    >
						<View style = {noneModeStyles._layer_88ee7d}   >
							<Svg style={{height: 12, width: 14}} viewBox = "0 0 14 12">
								<Path fill = {"#2F2E41"}     d = "M8.55679 5.88162L8.05871 4.97461C7.11527 8.81864 8.78174 12 8.78174 12L2.31366 8.98709L2.37527 7.91807L1.73525 8.64437L0.815632 8.13759L0.69416 7.44423L0 7.61618L2.53386 3.01812C4.99304 -1.35735 8.56829 0.313161 8.56829 0.313161C14.2561 0.0427685 13.5615 5.65437 13.5615 5.65437L8.55679 5.88162Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_407f1c}    >
						<View style = {noneModeStyles._layer_494068}   >
							<Svg style={{height: 13, width: 9}} viewBox = "0 0 9 13">
								<Path fill = {"#3F3D56"}     d = "M8.54002 12.9129C9.44817 12.3308 8.34377 8.98764 6.07327 5.44587C3.80277 1.9041 1.22597 -0.495126 0.317825 0.0870531C-0.590322 0.669232 0.51408 4.01236 2.78458 7.55413C5.05508 11.0959 7.63188 13.4951 8.54002 12.9129Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Welcome_To_Institute_Find_We_Are_The_Most_Comprehensive_Directory_For_Academies_And_Private_Schools_And_Colleges_In_Pakistan__Whether_You_Need_To_Find_All_The_Information_About_A_Institute__We_Got_It_All_Covered}   >
					Welcome To Institute Find We Are The Most Comprehensive Directory For Academies And Private Schools And Colleges In Pakistan. Whether You Need To Find All The Information About A Institute, We Got It All Covered
				</Text>
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<Text style = {noneModeStyles._Get_Started}   >
					Get Started
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Get_Started

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 615,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(238, 238, 238)",
	},
_viewport: {
	height: 615,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(238, 238, 238)",
	},
_signal_solid_1: {
	width: 13.75,
	height: 10.5703,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 294},
		{translateY: 7.6875},
	],
	},
_layer_de328d: {
	position: "absolute",
	},
_layer_0db667: {
	},
_battery_three_quarters_solid_1: {
	width: 23,
	height: 18.4,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 312,
	top: 0,
	},
_layer_3d94fc: {
	position: "absolute",
	transform: [
		{translateY: 6.95349},
	],
	},
_layer_d9e852: {
	},
_wifi_solid_1: {
	width: 17,
	height: 13.6,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 273,
	top: 7,
	},
_layer_648ea0: {
	position: "absolute",
	transform: [
		{translateX: 0.0000305176},
		{translateY: 0.850006},
	],
	},
_layer_020bb1: {
	},
_3_45: {
	width: 57,
	height: 18,
	position: "absolute",
	left: 24,
	top: 8,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_layer_e377cb: {
	width: 150,
	height: 150,
	position: "absolute",
	left: "50%",
	top: -75,
	transform: [
		{translateX: -191},
	],
	},
_layer_f3a487: {
	},
_Ellipse_1: {
	width: 150,
	height: 150,
	position: "absolute",
	left: "50%",
	top: -14,
	transform: [
		{translateX: -260},
	],
	},
_undraw_Location_search_re_ttoj_1: {
	width: 155,
	height: 120.375,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 104,
	top: 170,
	},
_layer_679702: {
	position: "absolute",
	transform: [
		{translateX: 81.9425},
		{translateY: 46.2295},
	],
	},
_layer_252366: {
	},
_layer_5ad723: {
	position: "absolute",
	transform: [
		{translateX: 84.2663},
		{translateY: 43.2984},
	],
	},
_layer_602494: {
	},
_layer_feb4d9: {
	position: "absolute",
	transform: [
		{translateX: 7.5726},
	],
	},
_layer_5f362e: {
	},
_layer_fac39e: {
	position: "absolute",
	transform: [
		{translateY: 4.41736},
	],
	},
_layer_f8198d: {
	},
_layer_877ecb: {
	position: "absolute",
	transform: [
		{translateX: 2.69455},
		{translateY: 21.611},
	],
	},
_layer_21098b: {
	},
_layer_d49683: {
	position: "absolute",
	transform: [
		{translateX: 13.0822},
		{translateY: 31.5106},
	],
	},
_layer_bfca88: {
	},
_layer_1c3c45: {
	position: "absolute",
	transform: [
		{translateX: 11.7094},
		{translateY: 13.074},
	],
	},
_layer_af34de: {
	},
_layer_93f543: {
	position: "absolute",
	transform: [
		{translateX: 25.2158},
		{translateY: 18.0797},
	],
	},
_layer_573669: {
	},
_layer_f2431b: {
	position: "absolute",
	transform: [
		{translateX: 16.9616},
		{translateY: 21.7068},
	],
	},
_layer_afdfc0: {
	},
_layer_a7fd05: {
	position: "absolute",
	transform: [
		{translateX: 53.4666},
		{translateY: 20.9664},
	],
	},
_layer_b24c7c: {
	},
_layer_98aa19: {
	position: "absolute",
	transform: [
		{translateX: 18.4432},
		{translateY: 70.5039},
	],
	},
_layer_3c5f2f: {
	},
_layer_919886: {
	position: "absolute",
	transform: [
		{translateX: 84.7036},
		{translateY: 103.003},
	],
	},
_layer_9cc2bb: {
	},
_layer_3ae9f2: {
	position: "absolute",
	transform: [
		{translateX: 23.4916},
		{translateY: 53.15},
	],
	},
_layer_06e05a: {
	},
_layer_8e4353: {
	position: "absolute",
	transform: [
		{translateX: 62.6168},
		{translateY: 88.4889},
	],
	},
_layer_10f130: {
	},
_layer_58925c: {
	position: "absolute",
	transform: [
		{translateX: 133.768},
		{translateY: 83.9137},
	],
	},
_layer_50b49d: {
	},
_layer_1a9f77: {
	position: "absolute",
	transform: [
		{translateX: 111.523},
		{translateY: 97.9547},
	],
	},
_layer_673c8b: {
	},
_layer_feb0a0: {
	position: "absolute",
	transform: [
		{translateX: 88.3322},
		{translateY: 80.9163},
	],
	},
_layer_56cf5f: {
	},
_layer_99cff2: {
	position: "absolute",
	transform: [
		{translateX: 58.3572},
		{translateY: 34.2185},
	],
	},
_layer_002936: {
	},
_layer_600956: {
	position: "absolute",
	transform: [
		{translateX: 62.1435},
		{translateY: 10.8696},
	],
	},
_layer_d40ee9: {
	},
_layer_b32921: {
	position: "absolute",
	transform: [
		{translateX: 59.9348},
		{translateY: 109.156},
	],
	},
_layer_aaf5fe: {
	},
_layer_629922: {
	position: "absolute",
	transform: [
		{translateX: 36.5859},
		{translateY: 99.2168},
	],
	},
_layer_51f6d6: {
	},
_layer_f59781: {
	position: "absolute",
	transform: [
		{translateX: 110.577},
		{translateY: 82.1784},
	],
	},
_layer_6b38db: {
	},
_layer_c7bb1c: {
	position: "absolute",
	transform: [
		{translateX: 21.988},
		{translateY: 34.045},
	],
	},
_layer_bb98b6: {
	},
_layer_c5edfe: {
	position: "absolute",
	transform: [
		{translateX: 37.5325},
		{translateY: 48.2594},
	],
	},
_layer_e695fe: {
	},
_layer_1d3eb1: {
	position: "absolute",
	transform: [
		{translateX: 41.9499},
		{translateY: 52.0457},
	],
	},
_layer_917e19: {
	},
_layer_c77b2c: {
	position: "absolute",
	transform: [
		{translateX: 41.1611},
		{translateY: 77.2877},
	],
	},
_layer_1632e3: {
	},
_layer_e8d783: {
	position: "absolute",
	transform: [
		{translateX: 117.597},
		{translateY: 49.2684},
	],
	},
_layer_5c954b: {
	},
_layer_ffa7c0: {
	position: "absolute",
	transform: [
		{translateX: 114.913},
		{translateY: 48.3195},
	],
	},
_layer_ede566: {
	},
_layer_d11a05: {
	position: "absolute",
	transform: [
		{translateX: 126.038},
		{translateY: 49.0705},
	],
	},
_layer_6671aa: {
	},
_layer_2aab9d: {
	position: "absolute",
	transform: [
		{translateX: 126.571},
		{translateY: 49.7282},
	],
	},
_layer_4093c9: {
	},
_layer_86c8cb: {
	position: "absolute",
	transform: [
		{translateX: 122.041},
		{translateY: 77.8014},
	],
	},
_layer_0b483e: {
	},
_layer_c4accf: {
	position: "absolute",
	transform: [
		{translateX: 121.548},
		{translateY: 84.6302},
	],
	},
_layer_d9b649: {
	},
_layer_b5eeda: {
	position: "absolute",
	transform: [
		{translateX: 127.09},
		{translateY: 77.3281},
	],
	},
_layer_c5e604: {
	},
_layer_bb6361: {
	position: "absolute",
	transform: [
		{translateX: 126.597},
		{translateY: 84.1569},
	],
	},
_layer_1bab02: {
	},
_layer_33c672: {
	position: "absolute",
	transform: [
		{translateX: 112.985},
		{translateY: 60.5286},
	],
	},
_layer_4bc136: {
	},
_layer_9b150d: {
	position: "absolute",
	transform: [
		{translateX: 112.985},
		{translateY: 62.1646},
	],
	},
_layer_7a15e5: {
	},
_layer_31f035: {
	position: "absolute",
	transform: [
		{translateX: 113.629},
		{translateY: 45.5459},
	],
	},
_layer_03bbcb: {
	},
_layer_15f820: {
	position: "absolute",
	transform: [
		{translateX: 116.871},
		{translateY: 52.7709},
	],
	},
_layer_2871fe: {
	},
_layer_f93127: {
	position: "absolute",
	transform: [
		{translateX: 115.585},
		{translateY: 48.531},
	],
	},
_layer_4f0afe: {
	},
_layer_049ece: {
	position: "absolute",
	transform: [
		{translateX: 115.066},
		{translateY: 36.9548},
	],
	},
_layer_e9ba71: {
	},
_layer_62c700: {
	position: "absolute",
	transform: [
		{translateX: 110.403},
		{translateY: 35.4246},
	],
	},
_layer_88ee7d: {
	},
_layer_407f1c: {
	position: "absolute",
	transform: [
		{translateX: 64.922},
		{translateY: 56.3744},
	],
	},
_layer_494068: {
	},
_Welcome_To_Institute_Find_We_Are_The_Most_Comprehensive_Directory_For_Academies_And_Private_Schools_And_Colleges_In_Pakistan__Whether_You_Need_To_Find_All_The_Information_About_A_Institute__We_Got_It_All_Covered: {
	width: 262,
	height: "auto",
	position: "absolute",
	left: 50,
	top: 334,
	color: "rgba(0, 0, 0, 0.67)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	},
_Rectangle_3: {
	width: 258,
	height: 47,
	backgroundColor: "rgb(12, 132, 142)",
	position: "absolute",
	left: 50,
	top: 483,
	},
_Get_Started: {
	width: 228,
	height: 33,
	position: "absolute",
	left: 127,
	top: 497,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Roboto",
	},
})

