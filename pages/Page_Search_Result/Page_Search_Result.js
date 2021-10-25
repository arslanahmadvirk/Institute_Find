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
import {image_campus_pic_2_700x480_1_link} from './assets/imageLinks.js'
import {image_campus_pic_2_700x480_1_2_link} from './assets/imageLinks.js'
import {image_campus_pic_2_700x480_1_3_link} from './assets/imageLinks.js'
const Page_Search_Result  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page0}    >
			<View style = {noneModeStyles._signal_solid_1}    >
				<View style = {noneModeStyles._layer_a31ded}    >
					<View style = {noneModeStyles._layer_0ad0ea}   >
						<Svg style={{height: 11, width: 13}} viewBox = "0 0 13 11">
							<Path fill = {"black"}     d = "M4.125 6.18749H3.09375C2.90383 6.18749 2.75 6.34132 2.75 6.53124V10.6562C2.75 10.8462 2.90383 11 3.09375 11H4.125C4.31492 11 4.46875 10.8462 4.46875 10.6562V6.53124C4.46875 6.34132 4.31492 6.18749 4.125 6.18749ZM1.375 8.24999H0.34375C0.153828 8.24999 0 8.40382 0 8.59374V10.6562C0 10.8462 0.153828 11 0.34375 11H1.375C1.56492 11 1.71875 10.8462 1.71875 10.6562V8.59374C1.71875 8.40382 1.56492 8.24999 1.375 8.24999ZM6.87499 4.125H5.84374C5.65382 4.125 5.5 4.27882 5.5 4.46875V10.6562C5.5 10.8462 5.65382 11 5.84374 11H6.87499C7.06492 11 7.21874 10.8462 7.21874 10.6562V4.46875C7.21874 4.27882 7.06492 4.125 6.87499 4.125ZM9.62499 2.0625H8.59374C8.40382 2.0625 8.24999 2.21633 8.24999 2.40625V10.6562C8.24999 10.8462 8.40382 11 8.59374 11H9.62499C9.81491 11 9.96874 10.8462 9.96874 10.6562V2.40625C9.96874 2.21633 9.81491 2.0625 9.62499 2.0625ZM12.375 0H11.3437C11.1538 0 11 0.153828 11 0.34375V10.6562C11 10.8462 11.1538 11 11.3437 11H12.375C12.5649 11 12.7187 10.8462 12.7187 10.6562V0.34375C12.7187 0.153828 12.5649 0 12.375 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._battery_three_quarters_solid_1}    >
				<View style = {noneModeStyles._layer_985cf2}    >
					<View style = {noneModeStyles._layer_ef44d3}   >
						<Svg style={{height: 12, width: 23}} viewBox = "0 0 23 12">
							<Path fill = {"black"}     d = "M19.55 2.3V4.6H20.7V6.9H19.55V9.2H2.3V2.3H19.55ZM20.125 0H1.725C0.772297 0 0 0.772297 0 1.725V9.775C0 10.7277 0.772297 11.5 1.725 11.5H20.125C21.0777 11.5 21.85 10.7277 21.85 9.775V9.2H22.1375C22.6139 9.2 23 8.81386 23 8.3375V3.1625C23 2.68615 22.6139 2.3 22.1375 2.3H21.85V1.725C21.85 0.772297 21.0777 0 20.125 0ZM14.95 3.45H3.45V8.05H14.95V3.45Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._wifi_solid_1}    >
				<View style = {noneModeStyles._layer_797b50}    >
					<View style = {noneModeStyles._layer_24e48e}   >
						<Svg style={{height: 12, width: 17}} viewBox = "0 0 17 12">
							<Path fill = {"black"}     d = "M16.8648 3.264C12.1587 -1.0888 4.8394 -1.0872 0.135181 3.264C-0.0417258 3.42763 -0.0451789 3.70468 0.125884 3.87441L1.03538 4.77674C1.19848 4.93877 1.46092 4.94222 1.63038 4.78683C5.50639 1.23595 11.493 1.23516 15.3698 4.78683C15.5393 4.94222 15.8018 4.9385 15.9649 4.77674L16.8744 3.87441C17.0451 3.70468 17.0417 3.42763 16.8648 3.264ZM8.49998 8.50001C7.561 8.50001 6.79998 9.26103 6.79998 10.2C6.79998 11.139 7.561 11.9 8.49998 11.9C9.43897 11.9 10.2 11.139 10.2 10.2C10.2 9.26103 9.43897 8.50001 8.49998 8.50001ZM13.8834 6.27965C10.8218 3.57213 6.1747 3.57505 3.11656 6.27965C2.93328 6.44168 2.92743 6.72298 3.10142 6.89457L4.01623 7.79743C4.17561 7.95468 4.4322 7.9653 4.60193 7.81868C6.83186 5.89104 10.1732 5.89529 12.3978 7.81868C12.5675 7.9653 12.8241 7.95495 12.9835 7.79743L13.8983 6.89457C14.0725 6.72298 14.0664 6.44141 13.8834 6.27965Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._3_45}   >
				3:45
			</Text>
			<View style = {noneModeStyles._layer_83e631}    >
				<View style = {noneModeStyles._layer_06282a}   >
					<Svg style={{height: 145, width: 145}} viewBox = "0 0 145 145">
						<Path fill = {"#40C7DA"}     d = "M145 72.5C145 112.541 112.541 145 72.5 145C32.4594 145 0 112.541 0 72.5C0 32.4594 32.4594 0 72.5 0C112.541 0 145 32.4594 145 72.5Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_1}    >
			</View>
			<Text style = {noneModeStyles._Select_Best_Suitable_Institute}   >
				Select Best Suitable Institute
			</Text>
			<View style = {noneModeStyles._undraw_road_to_knowledge_m8s0_1}    >
				<View style = {noneModeStyles._layer_8b3f0c}    >
					<View style = {noneModeStyles._layer_97c149}   >
						<Svg style={{height: 13, width: 132}} viewBox = "0 0 132 13">
							<Path fill = {"#CCCCCC"}     d = "M70.2263 10.2038C69.1238 10.203 68.0667 9.76453 67.2874 8.98468C66.5081 8.20484 66.0703 7.14747 66.0703 6.04498C66.0703 4.94249 66.5081 3.88512 67.2874 3.10528C68.0667 2.32543 69.1238 1.88695 70.2263 1.88619H132C131.689 1.31582 131.231 0.839659 130.672 0.507757C130.114 0.175854 129.477 0.000464636 128.827 0H6.03746C4.43547 0.00179763 2.89972 0.639493 1.76765 1.77297C0.63558 2.90646 -0.000199319 4.44299 4.68731e-08 6.04498C0.000810542 7.64666 0.636919 9.18262 1.76877 10.3159C2.90062 11.4491 4.43578 12.0872 6.03746 12.09H128.827C129.477 12.0895 130.114 11.9141 130.672 11.5822C131.231 11.2503 131.689 10.7741 132 10.2038L70.2263 10.2038Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_c3a6a5}    >
					<View style = {noneModeStyles._layer_0c44f4}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6579 0.685742H0.34204C0.251249 0.685525 0.164252 0.649299 0.10013 0.585023C0.0360072 0.520746 0 0.433663 0 0.342871C0 0.25208 0.0360072 0.164996 0.10013 0.10072C0.164252 0.0364434 0.251249 0.000217818 0.34204 0H59.6579C59.7487 0.000217818 59.8357 0.0364434 59.8998 0.10072C59.964 0.164996 60 0.25208 60 0.342871C60 0.433663 59.964 0.520746 59.8998 0.585023C59.8357 0.649299 59.7487 0.685525 59.6579 0.685742Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_5691af}    >
					<View style = {noneModeStyles._layer_15882d}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6572 0.685712H0.34285C0.251919 0.685712 0.164714 0.649594 0.100416 0.585296C0.0361179 0.520998 0 0.433781 0 0.34285C0 0.251919 0.0361179 0.164714 0.100416 0.100416C0.164714 0.0361179 0.251919 2.16797e-08 0.34285 0H59.6572C59.7481 2.16797e-08 59.8353 0.0361179 59.8996 0.100416C59.9639 0.164714 60 0.251919 60 0.34285C60 0.433781 59.9639 0.520998 59.8996 0.585296C59.8353 0.649594 59.7481 0.685712 59.6572 0.685712Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_c39b34}    >
					<View style = {noneModeStyles._layer_c85c9a}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6579 0.68573H0.34204C0.251249 0.685513 0.164252 0.649299 0.10013 0.585023C0.0360072 0.520746 0 0.433663 0 0.342871C0 0.25208 0.0360072 0.164996 0.10013 0.10072C0.164252 0.0364434 0.251249 0.000217818 0.34204 0H59.6579C59.7487 0.000217818 59.8357 0.0364434 59.8998 0.10072C59.964 0.164996 60 0.25208 60 0.342871C60 0.433663 59.964 0.520746 59.8998 0.585023C59.8357 0.649299 59.7487 0.685513 59.6579 0.68573Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_1fb790}    >
					<View style = {noneModeStyles._layer_ef0689}   >
						<Svg style={{height: 13, width: 132}} viewBox = "0 0 132 13">
							<Path fill = {"#0C848E"}     d = "M70.2263 10.2038C69.1238 10.203 68.0667 9.76454 67.2874 8.9847C66.5081 8.20485 66.0704 7.14748 66.0704 6.04499C66.0704 4.94251 66.5081 3.88513 67.2874 3.10529C68.0667 2.32545 69.1238 1.88696 70.2263 1.8862H132C131.689 1.31585 131.231 0.839697 130.672 0.507793C130.114 0.175889 129.477 0.000482627 128.827 0H6.03756C4.43557 0.00181261 2.89982 0.639511 1.76774 1.77299C0.635656 2.90646 -0.000156364 4.44299 2.88445e-08 6.04498C0.000832264 7.64667 0.636961 9.18263 1.76883 10.3159C2.9007 11.4492 4.43588 12.0872 6.03756 12.09H128.827C129.477 12.0895 130.114 11.9141 130.672 11.5822C131.231 11.2503 131.689 10.7741 132 10.2038L70.2263 10.2038Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_359af9}    >
					<View style = {noneModeStyles._layer_0fa96d}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6571 0.685721H0.342047C0.251257 0.685503 0.164262 0.649278 0.10014 0.585003C0.0360187 0.520727 0 0.433645 0 0.342854C0 0.252064 0.0360187 0.164982 0.10014 0.100706C0.164262 0.0364308 0.251257 0.000217815 0.342047 0H59.6571C59.748 0 59.8353 0.0361181 59.8996 0.100417C59.9639 0.164716 60 0.251922 60 0.342854C60 0.433787 59.9639 0.520993 59.8996 0.585292C59.8353 0.649591 59.748 0.685721 59.6571 0.685721Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_50515b}    >
					<View style = {noneModeStyles._layer_c72a0f}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6572 0.685712H0.342862C0.251931 0.685712 0.164726 0.649582 0.100428 0.585284C0.0361299 0.520986 0 0.433781 0 0.34285C0 0.251919 0.0361299 0.164714 0.100428 0.100416C0.164726 0.0361179 0.251931 0 0.342862 0H59.6572C59.7481 0 59.8353 0.0361179 59.8996 0.100416C59.9639 0.164714 60 0.251919 60 0.34285C60 0.433781 59.9639 0.520986 59.8996 0.585284C59.8353 0.649582 59.7481 0.685712 59.6572 0.685712Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e2dcbb}    >
					<View style = {noneModeStyles._layer_a76a33}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6563 0.685713H0.342043C0.251254 0.685495 0.16426 0.649282 0.100139 0.585008C0.0360183 0.520733 0 0.43364 0 0.342851C0 0.252062 0.0360183 0.164981 0.100139 0.100706C0.16426 0.0364313 0.251254 0.0002188 0.342043 9.87028e-07H59.6563C59.7014 -0.000107198 59.7461 0.00867901 59.7878 0.0258608C59.8295 0.0430425 59.8674 0.0682798 59.8993 0.100128C59.9312 0.131976 59.9565 0.169805 59.9738 0.211456C59.9911 0.253107 60 0.297757 60 0.342851C60 0.387945 59.9911 0.432606 59.9738 0.474257C59.9565 0.515909 59.9312 0.553738 59.8993 0.585586C59.8674 0.617434 59.8295 0.642671 59.7878 0.659853C59.7461 0.677035 59.7014 0.685821 59.6563 0.685713Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_b3cdd9}    >
					<View style = {noneModeStyles._layer_af6885}   >
						<Svg style={{height: 13, width: 132}} viewBox = "0 0 132 13">
							<Path fill = {"#CCCCCC"}     d = "M70.2263 10.2038C69.1238 10.2031 68.0667 9.76456 67.2874 8.98472C66.5081 8.20487 66.0704 7.1475 66.0704 6.04501C66.0704 4.94252 66.5081 3.88514 67.2874 3.1053C68.0667 2.32545 69.1238 1.88696 70.2263 1.8862H132C131.689 1.31585 131.231 0.839713 130.672 0.50781C130.114 0.175908 129.477 0.000494432 128.827 0H6.03746C4.43547 0.00179763 2.89973 0.639499 1.76766 1.77298C0.635586 2.90646 -0.000199319 4.443 4.68727e-08 6.04499C0.000810542 7.64667 0.636919 9.18262 1.76877 10.3159C2.90062 11.4491 4.43578 12.0872 6.03746 12.09H128.827C129.477 12.0895 130.114 11.9141 130.672 11.5822C131.231 11.2503 131.689 10.7742 132 10.2038L70.2263 10.2038Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_c8bbdc}    >
					<View style = {noneModeStyles._layer_4c420d}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6571 0.685727H0.342048C0.251257 0.685509 0.16425 0.649296 0.100128 0.585021C0.0360067 0.520745 0 0.433657 0 0.342867C0 0.252076 0.0360067 0.164988 0.100128 0.100712C0.16425 0.0364369 0.251257 0.000217816 0.342048 0H59.6571C59.7481 0 59.8353 0.0361242 59.8996 0.100423C59.9639 0.164722 60 0.251934 60 0.342867C60 0.433799 59.9639 0.521011 59.8996 0.58531C59.8353 0.649609 59.7481 0.685727 59.6571 0.685727Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_fd0a3e}    >
					<View style = {noneModeStyles._layer_7b8935}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6571 0.685712H0.342862C0.297837 0.685712 0.253245 0.676853 0.211648 0.659623C0.170051 0.642393 0.132253 0.617133 0.100416 0.585296C0.0685787 0.553459 0.0433308 0.515661 0.0261007 0.474064C0.00887051 0.432467 0 0.387886 0 0.342862C0 0.297837 0.00887051 0.253245 0.0261007 0.211648C0.0433308 0.170051 0.0685787 0.132265 0.100416 0.100428C0.132253 0.0685908 0.170051 0.0433308 0.211648 0.0261007C0.253245 0.00887052 0.297837 -1.07347e-08 0.342862 0H59.6571C59.7022 -1.07347e-08 59.7467 0.00887052 59.7883 0.0261007C59.8299 0.0433308 59.8677 0.0685908 59.8996 0.100428C59.9314 0.132265 59.9567 0.170051 59.9739 0.211648C59.9911 0.253245 60 0.297837 60 0.342862C60 0.387886 59.9911 0.432467 59.9739 0.474064C59.9567 0.515661 59.9314 0.553459 59.8996 0.585296C59.8677 0.617133 59.8299 0.642393 59.7883 0.659623C59.7467 0.676853 59.7022 0.685712 59.6571 0.685712Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_734d70}    >
					<View style = {noneModeStyles._layer_300679}   >
						<Svg style={{height: 1, width: 60}} viewBox = "0 0 60 1">
							<Path fill = {"#CCCCCC"}     d = "M59.6571 0.685712H0.342862C0.251931 0.685712 0.164714 0.649582 0.100416 0.585284C0.0361179 0.520986 0 0.433781 0 0.34285C0 0.251919 0.0361179 0.164714 0.100416 0.100416C0.164714 0.0361178 0.251931 2.16797e-08 0.342862 0H59.6571C59.7022 -1.07347e-08 59.7467 0.00885847 59.7883 0.0260886C59.8299 0.0433188 59.8677 0.0685787 59.8996 0.100416C59.9314 0.132253 59.9567 0.170051 59.9739 0.211648C59.9911 0.253245 60 0.297825 60 0.34285C60 0.387874 59.9911 0.432467 59.9739 0.474064C59.9567 0.515661 59.9314 0.553447 59.8996 0.585284C59.8677 0.617121 59.8299 0.642381 59.7883 0.659611C59.7467 0.676841 59.7022 0.685712 59.6571 0.685712Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_e3243e}    >
					<View style = {noneModeStyles._layer_6f0f0d}   >
						<Svg style={{height: 7, width: 27}} viewBox = "0 0 27 7">
							<Path fill = {"#0C848E"}     d = "M1.47729 6.99536C1.15058 6.99486 0.83627 6.87023 0.597991 6.64671C0.359712 6.42319 0.21527 6.11748 0.193907 5.79147L0.00275715 2.87289C-0.0195733 2.53199 0.0944281 2.19619 0.319684 1.93935C0.54494 1.68251 0.863 1.52568 1.20389 1.50334L24.0697 0.0058792C24.4301 -0.0177241 24.7917 0.0298932 25.1337 0.146019C25.4758 0.262144 25.7916 0.444501 26.0631 0.682676C26.3347 0.920851 26.5566 1.21018 26.7164 1.53414C26.8761 1.85811 26.9705 2.21037 26.9941 2.5708C27.0177 2.93123 26.9701 3.29278 26.854 3.63481C26.7378 3.97684 26.5555 4.29266 26.3173 4.56421C26.0791 4.83577 25.7898 5.05775 25.4658 5.21749C25.1419 5.37723 24.7896 5.47159 24.4292 5.49519L1.56342 6.99256C1.53463 6.99439 1.50592 6.99533 1.47729 6.99536Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_adc7c3}    >
					<View style = {noneModeStyles._layer_0fdd2e}   >
						<Svg style={{height: 8, width: 22}} viewBox = "0 0 22 8">
							<Path fill = {"#2F2E41"}     d = "M1.48128 7.80047C1.14112 7.7999 0.814367 7.66775 0.569444 7.43168C0.324521 7.19562 0.18042 6.87395 0.167324 6.53404L0.000917659 2.08218C-0.00553471 1.90956 0.02209 1.73735 0.082194 1.5754C0.142298 1.41345 0.233712 1.26492 0.351221 1.1383C0.46873 1.01168 0.61003 0.909442 0.767052 0.837432C0.924073 0.765423 1.09373 0.725052 1.26636 0.718618L20.469 0.000916279C20.8176 -0.0120957 21.1572 0.113912 21.4129 0.351226C21.6686 0.588539 21.8196 0.91772 21.8327 1.26636L21.9991 5.71821C22.0055 5.89084 21.9779 6.06304 21.9178 6.225C21.8577 6.38695 21.7663 6.53548 21.6488 6.6621C21.5313 6.78872 21.39 6.89095 21.233 6.96296C21.0759 7.03497 20.9063 7.07535 20.7336 7.08178L1.53099 7.79948C1.51439 7.80017 1.49774 7.80047 1.48128 7.80047Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_a4522d}    >
					<View style = {noneModeStyles._layer_0a4ab7}   >
						<Svg style={{height: 27, width: 6}} viewBox = "0 0 6 27">
							<Path fill = {"#2F2E41"}     d = "M4.22026 27H1.29031C0.948215 26.9996 0.620254 26.8635 0.378359 26.6216C0.136463 26.3797 0.000387221 26.0518 0 25.7097V1.29031C0.000386697 0.948215 0.136463 0.620248 0.378359 0.378353C0.620254 0.136457 0.948215 0.000386697 1.29031 0H4.22026C4.56235 0.000386697 4.89033 0.136457 5.13222 0.378353C5.37412 0.620248 5.51018 0.948215 5.51057 1.29031V25.7097C5.51018 26.0518 5.37412 26.3797 5.13222 26.6216C4.89033 26.8635 4.56235 26.9996 4.22026 27Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_2a83ff}    >
					<View style = {noneModeStyles._layer_c124ee}   >
						<Svg style={{height: 25, width: 18}} viewBox = "0 0 18 25">
							<Path fill = {"#2F2E41"}     d = "M3.12888 24.8135L0.621411 23.2936C0.328842 23.1158 0.118741 22.8293 0.037204 22.4968C-0.0443334 22.1643 0.00935108 21.813 0.186478 21.52L12.8539 0.621406C13.0317 0.328838 13.3183 0.118743 13.6508 0.0372052C13.9833 -0.0443321 14.3345 0.00934678 14.6275 0.186473L17.135 1.70634C17.4275 1.88413 17.6376 2.17071 17.7192 2.50321C17.8007 2.83572 17.747 3.18698 17.5699 3.47995L4.90248 24.3786C4.7247 24.6712 4.43811 24.8813 4.10561 24.9628C3.77311 25.0443 3.42185 24.9906 3.12888 24.8135Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_19f785}    >
					<View style = {noneModeStyles._layer_7390f0}   >
						<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
							<Path fill = {"#0C848E"}     d = "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_57e865}    >
					<View style = {noneModeStyles._layer_3323ce}   >
						<Svg style={{height: 7, width: 3}} viewBox = "0 0 3 7">
							<Path fill = {"#2F2E41"}     d = "M1.38271 6.73775C1.05019 6.62849 0.744926 6.44929 0.487433 6.21222C0.316833 6.04295 0.185293 5.83842 0.102049 5.61297C0.0188046 5.38752 -0.0141334 5.14659 0.00552628 4.90707C0.0163463 4.73641 0.0664838 4.57057 0.152017 4.4225C0.237551 4.27443 0.356166 4.14814 0.498592 4.0535C0.868267 3.81637 1.36268 3.81567 1.86609 4.03751L1.84704 0.00192995L2.2524 0L2.27483 4.74425L1.96247 4.54778C1.60027 4.32032 1.08301 4.16022 0.717506 4.39474C0.627182 4.4567 0.552367 4.53866 0.498877 4.63425C0.445387 4.72983 0.414664 4.83646 0.409097 4.94585C0.39543 5.12428 0.420356 5.30355 0.482188 5.47147C0.54402 5.63939 0.641302 5.79202 0.767413 5.91898C1.21505 6.34657 1.86814 6.48029 2.61289 6.59978L2.54864 7.00001C2.15294 6.94759 1.76274 6.85982 1.38271 6.73775Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_18d26c}    >
					<View style = {noneModeStyles._layer_942524}   >
						<Svg style={{height: 1, width: 3}} viewBox = "0 0 3 1">
							<Path fill = {"#2F2E41"}     d = "M0.071792 -7.06649e-06L0 0.543606L2.92817 0.930314L2.99996 0.3867L0.071792 -7.06649e-06Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_6544af}    >
					<View style = {noneModeStyles._layer_c8fbf6}   >
						<Svg style={{height: 1, width: 3}} viewBox = "0 0 3 1">
							<Path fill = {"#2F2E41"}     d = "M0.071792 -7.06649e-06L0 0.543606L2.92817 0.930314L2.99996 0.3867L0.071792 -7.06649e-06Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_2c1230}    >
					<View style = {noneModeStyles._layer_fbc50b}   >
						<Svg style={{height: 31, width: 21}} viewBox = "0 0 21 31">
							<Path fill = {"#2F2E41"}     d = "M18.9 31H1.7C1.24929 30.9995 0.817177 30.8202 0.498474 30.5015C0.179771 30.1828 0.000503425 29.7507 0 29.3L3.60083 1.68711C3.6037 1.23846 3.78403 0.809175 4.10241 0.493055C4.42079 0.176934 4.85134 -0.000326856 5.3 4.52471e-07H11.404C13.8421 0.00275308 16.1795 0.972503 17.9035 2.69649C19.6275 4.42048 20.5972 6.75792 20.6 9.196V29.3C20.5995 29.7507 20.4202 30.1828 20.1015 30.5015C19.7828 30.8202 19.3507 30.9995 18.9 31Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_023a43}    >
					<View style = {noneModeStyles._layer_2251df}   >
						<Svg style={{height: 20, width: 23}} viewBox = "0 0 23 20">
							<Path fill = {"#0C848E"}     d = "M22.0737 15.9777C22.1783 16.2016 22.216 16.4509 22.1822 16.6957C22.1484 16.9405 22.0446 17.1703 21.8832 17.3575L19.983 19.5568C19.8732 19.684 19.7393 19.7883 19.5891 19.8638C19.4389 19.9393 19.2753 19.9844 19.1076 19.9966C18.94 20.0088 18.7716 19.9879 18.612 19.9351C18.4525 19.8822 18.3049 19.7984 18.1777 19.6885L0.946813 4.80178C0.67512 4.56716 0.452301 4.28131 0.291094 3.96056C0.129887 3.63982 0.0334445 3.29046 0.00727296 2.93244C-0.0188986 2.57442 0.0257213 2.21474 0.138571 1.87396C0.25142 1.53319 0.43029 1.21798 0.664975 0.946336C0.89966 0.674696 1.18556 0.451949 1.50634 0.290815C1.82712 0.129681 2.17651 0.0333183 2.53454 0.00722826C2.89256 -0.0188617 3.25223 0.0258334 3.59298 0.13876C3.93374 0.251687 4.24889 0.430634 4.52048 0.665381L21.7514 15.5521C21.8877 15.6695 21.9976 15.8146 22.0737 15.9777Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_002db0}    >
					<View style = {noneModeStyles._layer_c10483}   >
						<Svg style={{height: 19, width: 20}} viewBox = "0 0 20 19">
							<Path fill = {"#2F2E41"}     d = "M19.8792 12.9909C19.984 13.2153 20.0218 13.4652 19.9879 13.7106C19.954 13.956 19.85 14.1863 19.6882 14.3739L16.4352 18.1391C16.2125 18.3962 15.897 18.5545 15.5577 18.5793C15.2185 18.604 14.8833 18.4932 14.6257 18.2711L0.444255 6.01892C0.316754 5.90879 0.212199 5.77462 0.136557 5.62407C0.0609148 5.47353 0.0156698 5.30956 0.00340414 5.14152C-0.00886152 4.97349 0.012093 4.80469 0.0650714 4.64475C0.11805 4.48482 0.202019 4.33688 0.312174 4.2094L3.56512 0.444203C3.67526 0.316713 3.80943 0.212163 3.95997 0.13653C4.11052 0.0608962 4.27449 0.0156608 4.44252 0.00340105C4.61055 -0.00885866 4.77935 0.0120997 4.93928 0.0650804C5.09921 0.118061 5.24713 0.202023 5.37461 0.312177L19.5561 12.5644C19.6927 12.6821 19.8028 12.8275 19.8792 12.9909Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_01336f}    >
					<View style = {noneModeStyles._layer_7964e6}   >
						<Svg style={{height: 23, width: 20}} viewBox = "0 0 20 23">
							<Path fill = {"#2F2E41"}     d = "M8.27514 9.20429C6.93294 8.09357 5.13872 9.14408 3.62085 8.99498C2.16867 8.85233 0.999848 7.57437 0.681342 6.19914C0.309746 4.59471 1.11523 2.96492 2.32856 1.93713C3.65746 0.811448 5.44163 0.46164 7.14189 0.632932C9.09061 0.829253 10.886 1.70177 12.5023 2.76767C14.0619 3.76376 15.5009 4.93695 16.7908 6.26385C17.9465 7.49258 18.934 8.96462 19.2722 10.6412C19.5796 12.1648 19.3993 13.8631 18.52 15.1755C18.0534 15.8485 17.4211 16.3898 16.6843 16.7473C15.9165 17.1426 15.095 17.4304 14.3523 17.8749C13.2294 18.5471 12.1516 19.9171 12.5339 21.3142C12.6159 21.6194 12.7718 21.8998 12.9877 22.1306C13.2471 22.4078 13.6982 22.0265 13.4382 21.7485C12.9813 21.2604 12.9864 20.5977 13.2135 20.0003C13.4843 19.3268 13.9759 18.7652 14.6076 18.4075C15.385 17.9432 16.2475 17.6494 17.0453 17.2248C17.8092 16.8362 18.468 16.2688 18.9655 15.5709C19.9042 14.2127 20.1595 12.4635 19.9102 10.8545C19.6404 9.11339 18.7133 7.54417 17.5638 6.23624C16.3127 4.81286 14.7864 3.61686 13.2301 2.54595C11.5601 1.39685 9.72099 0.433484 7.69995 0.11081C5.94803 -0.168898 4.05919 0.059687 2.55049 1.04017C1.14221 1.95539 0.0783829 3.50394 0.00213031 5.21316C-0.0221317 5.99065 0.161215 6.76056 0.533303 7.44366C0.905392 8.12676 1.45279 8.69838 2.11914 9.09968C2.80251 9.49119 3.59155 9.65826 4.37494 9.57732C5.21276 9.50769 6.04752 9.23486 6.89307 9.29014C7.27552 9.30607 7.64235 9.44624 7.93798 9.6894C8.23123 9.93208 8.56599 9.44498 8.27514 9.20429Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_18ff6d}    >
					<View style = {noneModeStyles._layer_ec1b39}   >
						<Svg style={{height: 16, width: 13}} viewBox = "0 0 13 16">
							<Path fill = {"#2F2E41"}     d = "M0.0169151 2.68224C0.0205608 2.65977 0.0248232 2.63734 0.0297067 2.61494C0.0651221 2.44854 0.133201 2.29083 0.229995 2.15093C0.326789 2.01102 0.450381 1.89171 0.593607 1.79991L3.06452 0.206153C3.35325 0.0204077 3.70385 -0.0432415 4.03943 0.0291744C4.37502 0.10159 4.66819 0.304151 4.85462 0.59243L12.4769 12.41C12.663 12.6986 12.7269 13.0493 12.6545 13.385C12.582 13.7207 12.3792 14.0139 12.0906 14.2001L9.61963 15.7938C9.33091 15.9796 8.98031 16.0432 8.64472 15.9708C8.30914 15.8984 8.01597 15.6958 7.82954 15.4076L0.20722 3.58999C0.0330467 3.32163 -0.0348054 2.99796 0.0169151 2.68224Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._Rectangle_5}    >
				</View>
				<View style = {noneModeStyles._campus_pic_2_700x480_1_container}    >
					<View style = {noneModeStyles._campus_pic_2_700x480_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_campus_pic_2_700x480_1_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Allied_School_Lahore}   >
					Allied School Lahore
				</Text>
				<Text style = {noneModeStyles._123_C__Block_E1__Hali_Road_Gulberg__III_Lahore_}   >
					123-C, Block E1, Hali Road Gulberg, III Lahore.
				</Text>
				<Text style = {noneModeStyles.__92_42_35756357_5}   >
					+92 42 35756357-5
				</Text>
				<Text style = {noneModeStyles._info_alliedschools_edu_pk}   >
					info@alliedschools.edu.pk
				</Text>
			</View>
			<View style = {noneModeStyles._Group_2}    >
				<View style = {noneModeStyles._Rectangle_5_2}    >
				</View>
				<View style = {noneModeStyles._campus_pic_2_700x480_1_container_2}    >
					<View style = {noneModeStyles._campus_pic_2_700x480_1_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_campus_pic_2_700x480_1_2_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Allied_School_Lahore_2}   >
					Unique School System
				</Text>
				<Text style = {noneModeStyles._123_C__Block_E1__Hali_Road_Gulberg__III_Lahore__2}   >
					Samanabad second roundabout{'\n'}Samanabad, Lahore
				</Text>
				<Text style = {noneModeStyles.__92_42_35756357_5_2}   >
					+92-332-4467526{'\n'}
				</Text>
				<Text style = {noneModeStyles._info_alliedschools_edu_pk_2}   >
					info@uniquschools.edu.pk
				</Text>
			</View>
			<View style = {noneModeStyles._Group_3}    >
				<View style = {noneModeStyles._Rectangle_5_3}    >
				</View>
				<View style = {noneModeStyles._campus_pic_2_700x480_1_container_3}    >
					<View style = {noneModeStyles._campus_pic_2_700x480_1_3}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_campus_pic_2_700x480_1_3_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Allied_School_Lahore_3}   >
					The Smart School
				</Text>
				<Text style = {noneModeStyles._123_C__Block_E1__Hali_Road_Gulberg__III_Lahore__3}   >
					House No 12 , Block 3{'\n'}Township - Sector A2, Lahore
				</Text>
				<Text style = {noneModeStyles.__92_42_35756357_5_3}   >
					0335-0146656{'\n'} 
				</Text>
				<Text style = {noneModeStyles._info_alliedschools_edu_pk_3}   >
					info@smartschools.edu.pk
				</Text>
			</View>
			<View style = {noneModeStyles._layer_a3d6d5}    >
				<View style = {noneModeStyles._layer_a2f46e}   >
					<Svg style={{height: 23, width: 29}} viewBox = "0 0 29 23">
						<Path fill = {"black"}     d = "M0.447046 10.1604C-0.149017 10.7565 -0.149017 11.7229 0.447046 12.319L10.1605 22.0324C10.7565 22.6285 11.7229 22.6285 12.319 22.0324C12.9151 21.4363 12.9151 20.4699 12.319 19.8739L3.68485 11.2397L12.319 2.60557C12.9151 2.00951 12.9151 1.0431 12.319 0.447034C11.7229 -0.149029 10.7565 -0.149029 10.1605 0.447034L0.447046 10.1604ZM29 9.7134L1.52631 9.7134L1.52631 12.766L29 12.766L29 9.7134Z"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Search_Result

const noneModeStyles = StyleSheet.create({
_page0: {
	height: 614,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(238, 238, 238)",
	},
_signal_solid_1: {
	width: 13.2024,
	height: 10.5619,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 282.291},
		{translateY: 7.6814},
	],
	},
_layer_a31ded: {
	position: "absolute",
	},
_layer_0ad0ea: {
	},
_battery_three_quarters_solid_1: {
	width: 22.084,
	height: 17.6672,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 299.574,
	top: 0,
	},
_layer_985cf2: {
	position: "absolute",
	transform: [
		{translateY: 6.67657},
	],
	},
_layer_ef44d3: {
	},
_wifi_solid_1: {
	width: 16.3229,
	height: 13.0583,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 262.127,
	top: 6.72122,
	},
_layer_797b50: {
	position: "absolute",
	transform: [
		{translateX: 0.00012207},
		{translateY: 0.816162},
	],
	},
_layer_24e48e: {
	},
_3_45: {
	width: 54.7299,
	height: 17.2831,
	position: "absolute",
	left: 23.0442,
	top: 7.6814,
	color: "rgb(0, 0, 0)",
	fontSize: 11.5221,
	fontWeight: "400",
	lineHeight: 13.5024,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_layer_83e631: {
	width: 144.026,
	height: 144.026,
	position: "absolute",
	left: "50%",
	top: -72.013,
	transform: [
		{translateX: -183.393},
	],
	},
_layer_06282a: {
	},
_Ellipse_1: {
	width: 144.026,
	height: 144.026,
	position: "absolute",
	left: "50%",
	top: -13.4424,
	transform: [
		{translateX: -249.645},
	],
	},
_Select_Best_Suitable_Institute: {
	width: 215,
	height: 38,
	position: "absolute",
	left: 85,
	top: 192,
	color: "rgb(12, 132, 142)",
	fontSize: 13,
	fontWeight: "700",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_undraw_road_to_knowledge_m8s0_1: {
	width: 178.053,
	height: 88.1637,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 84.2141,
	top: 78.6724,
	},
_layer_8b3f0c: {
	position: "absolute",
	transform: [
		{translateX: 31.8987},
		{translateY: 76.079},
	],
	},
_layer_97c149: {
	},
_layer_c3a6a5: {
	position: "absolute",
	transform: [
		{translateX: 104.878},
		{translateY: 79.5762},
	],
	},
_layer_0c44f4: {
	},
_layer_5691af: {
	position: "absolute",
	transform: [
		{translateX: 104.877},
		{translateY: 81.782},
	],
	},
_layer_15882d: {
	},
_layer_c39b34: {
	position: "absolute",
	transform: [
		{translateX: 104.878},
		{translateY: 83.9878},
	],
	},
_layer_c85c9a: {
	},
_layer_1fb790: {
	position: "absolute",
	transform: [
		{translateX: 15.9493},
		{translateY: 64.3715},
	],
	},
_layer_ef0689: {
	},
_layer_359af9: {
	position: "absolute",
	transform: [
		{translateX: 88.9287},
		{translateY: 67.8688},
	],
	},
_layer_0fa96d: {
	},
_layer_50515b: {
	position: "absolute",
	transform: [
		{translateX: 88.9279},
		{translateY: 70.0745},
	],
	},
_layer_c72a0f: {
	},
_layer_e2dcbb: {
	position: "absolute",
	transform: [
		{translateX: 88.9287},
		{translateY: 72.2803},
	],
	},
_layer_a76a33: {
	},
_layer_b3cdd9: {
	position: "absolute",
	transform: [
		{translateY: 52.2734},
	],
	},
_layer_af6885: {
	},
_layer_c8bbdc: {
	position: "absolute",
	transform: [
		{translateX: 72.9794},
		{translateY: 55.7707},
	],
	},
_layer_4c420d: {
	},
_layer_fd0a3e: {
	position: "absolute",
	transform: [
		{translateX: 72.9786},
		{translateY: 57.9764},
	],
	},
_layer_7b8935: {
	},
_layer_734d70: {
	position: "absolute",
	transform: [
		{translateX: 72.9786},
		{translateY: 60.1822},
	],
	},
_layer_300679: {
	},
_layer_e3243e: {
	position: "absolute",
	transform: [
		{translateX: 131.925},
		{translateY: 29.7691},
	],
	},
_layer_6f0f0d: {
	},
_layer_adc7c3: {
	position: "absolute",
	transform: [
		{translateX: 136.395},
		{translateY: 29.5064},
	],
	},
_layer_0fdd2e: {
	},
_layer_a4522d: {
	position: "absolute",
	transform: [
		{translateX: 155.39},
		{translateY: 50.0757},
	],
	},
_layer_0a4ab7: {
	},
_layer_2a83ff: {
	position: "absolute",
	transform: [
		{translateX: 143.67},
		{translateY: 39.5452},
	],
	},
_layer_c124ee: {
	},
_layer_19f785: {
	position: "absolute",
	transform: [
		{translateX: 145.203},
		{translateY: 5.07841},
	],
	},
_layer_7390f0: {
	},
_layer_57e865: {
	position: "absolute",
	transform: [
		{translateX: 148.44},
		{translateY: 11.9482},
	],
	},
_layer_3323ce: {
	},
_layer_18d26c: {
	position: "absolute",
	transform: [
		{translateX: 146.141},
		{translateY: 11.7536},
	],
	},
_layer_942524: {
	},
_layer_6544af: {
	position: "absolute",
	transform: [
		{translateX: 152.725},
		{translateY: 12.6229},
	],
	},
_layer_c8fbf6: {
	},
_layer_2c1230: {
	position: "absolute",
	transform: [
		{translateX: 145.024},
		{translateY: 27.5173},
	],
	},
_layer_fbc50b: {
	},
_layer_023a43: {
	position: "absolute",
	transform: [
		{translateX: 156.039},
		{translateY: 31.3182},
	],
	},
_layer_2251df: {
	},
_layer_002db0: {
	position: "absolute",
	transform: [
		{translateX: 154.489},
		{translateY: 29.4374},
	],
	},
_layer_c10483: {
	},
_layer_01336f: {
	position: "absolute",
	transform: [
		{translateX: 147.141},
	],
	},
_layer_7964e6: {
	},
_layer_18ff6d: {
	position: "absolute",
	transform: [
		{translateX: 143.621},
		{translateY: 58.4206},
	],
	},
_layer_ec1b39: {
	},
_Group_1: {
	width: 299,
	height: 101,
	position: "absolute",
	left: 23.2141,
	top: 224.672,
	},
_Rectangle_5: {
	width: 298,
	height: 99,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	transform: [
		{translateX: 1},
	],
	borderRadius: 10,
	shadowOffset: {
		width: 5,
		height: 12
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 10,
	},
_campus_pic_2_700x480_1_container: {
	width: 103,
	height: 99,
	position: "absolute",
	},
_campus_pic_2_700x480_1: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
	},
_Allied_School_Lahore: {
	width: 163,
	height: 35,
	position: "absolute",
	transform: [
		{translateX: 113},
		{translateY: 8},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 14,
	fontWeight: "700",
	lineHeight: 16.4062,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_123_C__Block_E1__Hali_Road_Gulberg__III_Lahore_: {
	width: 176,
	height: 31,
	position: "absolute",
	transform: [
		{translateX: 109},
		{translateY: 28},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
__92_42_35756357_5: {
	width: 141,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 124},
		{translateY: 59},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_info_alliedschools_edu_pk: {
	width: 148,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 124},
		{translateY: 77},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Group_2: {
	width: 299,
	height: 101,
	position: "absolute",
	left: 24,
	top: 350,
	},
_Rectangle_5_2: {
	width: 298,
	height: 99,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	transform: [
		{translateX: 1},
	],
	borderRadius: 10,
	shadowOffset: {
		width: 5,
		height: 12
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 10,
	},
_campus_pic_2_700x480_1_container_2: {
	width: 103,
	height: 99,
	position: "absolute",
	},
_campus_pic_2_700x480_1_2: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
	},
_Allied_School_Lahore_2: {
	width: 163,
	height: 35,
	position: "absolute",
	transform: [
		{translateX: 113},
		{translateY: 8},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 14,
	fontWeight: "700",
	lineHeight: 16.4062,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_123_C__Block_E1__Hali_Road_Gulberg__III_Lahore__2: {
	width: 176,
	height: 31,
	position: "absolute",
	transform: [
		{translateX: 109},
		{translateY: 28},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
__92_42_35756357_5_2: {
	width: 141,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 124},
		{translateY: 59},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_info_alliedschools_edu_pk_2: {
	width: 148,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 124},
		{translateY: 77},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Group_3: {
	width: 299,
	height: 101,
	position: "absolute",
	left: 24,
	top: 475,
	},
_Rectangle_5_3: {
	width: 298,
	height: 99,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	transform: [
		{translateX: 1},
	],
	borderRadius: 10,
	shadowOffset: {
		width: 5,
		height: 12
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 10,
	},
_campus_pic_2_700x480_1_container_3: {
	width: 103,
	height: 99,
	position: "absolute",
	},
_campus_pic_2_700x480_1_3: {
	width: "100%",
	height: "100%",
	borderRadius: 10,
	},
_Allied_School_Lahore_3: {
	width: 163,
	height: 35,
	position: "absolute",
	transform: [
		{translateX: 113},
		{translateY: 8},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 14,
	fontWeight: "700",
	lineHeight: 16.4062,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_123_C__Block_E1__Hali_Road_Gulberg__III_Lahore__3: {
	width: 176,
	height: 31,
	position: "absolute",
	transform: [
		{translateX: 109},
		{translateY: 28},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
__92_42_35756357_5_3: {
	width: 141,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 124},
		{translateY: 59},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_info_alliedschools_edu_pk_3: {
	width: 148,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 124},
		{translateY: 77},
	],
	color: "rgb(12, 132, 142)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_layer_a3d6d5: {
	width: 27,
	height: 0,
	position: "absolute",
	left: 23,
	top: 59,
	},
_layer_a2f46e: {
	},
})

