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
const Page_Institute_Submit  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._signal_solid_1}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 11, width: 13}} viewBox = "0 0 13 11">
							<Path fill = {"black"}     d = "M4.125 6.18749H3.09375C2.90383 6.18749 2.75 6.34132 2.75 6.53124V10.6562C2.75 10.8462 2.90383 11 3.09375 11H4.125C4.31492 11 4.46875 10.8462 4.46875 10.6562V6.53124C4.46875 6.34132 4.31492 6.18749 4.125 6.18749ZM1.375 8.24999H0.34375C0.153828 8.24999 0 8.40382 0 8.59374V10.6562C0 10.8462 0.153828 11 0.34375 11H1.375C1.56492 11 1.71875 10.8462 1.71875 10.6562V8.59374C1.71875 8.40382 1.56492 8.24999 1.375 8.24999ZM6.87499 4.125H5.84374C5.65382 4.125 5.5 4.27882 5.5 4.46875V10.6562C5.5 10.8462 5.65382 11 5.84374 11H6.87499C7.06492 11 7.21874 10.8462 7.21874 10.6562V4.46875C7.21874 4.27882 7.06492 4.125 6.87499 4.125ZM9.62499 2.0625H8.59374C8.40382 2.0625 8.24999 2.21633 8.24999 2.40625V10.6562C8.24999 10.8462 8.40382 11 8.59374 11H9.62499C9.81491 11 9.96874 10.8462 9.96874 10.6562V2.40625C9.96874 2.21633 9.81491 2.0625 9.62499 2.0625ZM12.375 0H11.3437C11.1538 0 11 0.153828 11 0.34375V10.6562C11 10.8462 11.1538 11 11.3437 11H12.375C12.5649 11 12.7187 10.8462 12.7187 10.6562V0.34375C12.7187 0.153828 12.5649 0 12.375 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._battery_three_quarters_solid_1}    >
				<View style = {noneModeStyles.style5}    >
					<View style = {noneModeStyles.style6}   >
						<Svg style={{height: 12, width: 23}} viewBox = "0 0 23 12">
							<Path fill = {"black"}     d = "M19.55 2.3V4.6H20.7V6.9H19.55V9.2H2.3V2.3H19.55ZM20.125 0H1.725C0.772297 0 0 0.772297 0 1.725V9.775C0 10.7277 0.772297 11.5 1.725 11.5H20.125C21.0777 11.5 21.85 10.7277 21.85 9.775V9.2H22.1375C22.6138 9.2 23 8.81385 23 8.3375V3.1625C23 2.68615 22.6138 2.3 22.1375 2.3H21.85V1.725C21.85 0.772297 21.0777 0 20.125 0ZM14.95 3.45H3.45V8.05H14.95V3.45Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._wifi_solid_1}    >
				<View style = {noneModeStyles.style8}    >
					<View style = {noneModeStyles.style9}   >
						<Svg style={{height: 12, width: 17}} viewBox = "0 0 17 12">
							<Path fill = {"black"}     d = "M16.8648 3.264C12.1587 -1.0888 4.8394 -1.0872 0.135181 3.264C-0.0417258 3.42763 -0.0451789 3.70468 0.125884 3.87441L1.03538 4.77674C1.19848 4.93877 1.46092 4.94222 1.63038 4.78683C5.50639 1.23595 11.493 1.23516 15.3698 4.78683C15.5393 4.94222 15.8018 4.9385 15.9649 4.77674L16.8744 3.87441C17.0451 3.70468 17.0417 3.42763 16.8648 3.264ZM8.49998 8.50001C7.561 8.50001 6.79998 9.26103 6.79998 10.2C6.79998 11.139 7.561 11.9 8.49998 11.9C9.43897 11.9 10.2 11.139 10.2 10.2C10.2 9.26103 9.43897 8.50001 8.49998 8.50001ZM13.8834 6.27965C10.8218 3.57213 6.1747 3.57505 3.11656 6.27965C2.93328 6.44168 2.92743 6.72298 3.10142 6.89457L4.01623 7.79743C4.17561 7.95468 4.4322 7.9653 4.60193 7.81868C6.83186 5.89104 10.1732 5.89529 12.3978 7.81868C12.5675 7.9653 12.8241 7.95495 12.9835 7.79743L13.8983 6.89457C14.0725 6.72298 14.0664 6.44141 13.8834 6.27965Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._3_45}   >
				3:45
			</Text>
			<View style = {noneModeStyles.style11}    >
				<View style = {noneModeStyles.style12}   >
					<Svg style={{height: 145, width: 145}} viewBox = "0 0 145 145">
						<Path fill = {"#40C7DA"}     d = "M145 72.5C145 112.541 112.541 145 72.5 145C32.4594 145 0 112.541 0 72.5C0 32.4594 32.4594 0 72.5 0C112.541 0 145 32.4594 145 72.5Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_1}    >
			</View>
			<View style = {noneModeStyles.style14}    >
				<View style = {noneModeStyles.style15}   >
					<Svg style={{height: 23, width: 29}} viewBox = "0 0 29 23">
						<Path fill = {"black"}     d = "M0.447046 10.1604C-0.149017 10.7565 -0.149017 11.7229 0.447046 12.319L10.1605 22.0324C10.7565 22.6285 11.7229 22.6285 12.319 22.0324C12.9151 21.4363 12.9151 20.4699 12.319 19.8739L3.68485 11.2397L12.319 2.60557C12.9151 2.00951 12.9151 1.0431 12.319 0.447034C11.7229 -0.149029 10.7565 -0.149029 10.1605 0.447034L0.447046 10.1604ZM29 9.7134L1.52631 9.7134L1.52631 12.766L29 12.766L29 9.7134Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._undraw_Profile_data_re_v81r_1}    >
				<View style = {noneModeStyles.style17}    >
					<View style = {noneModeStyles.style18}   >
						<Svg style={{height: 96, width: 102}} viewBox = "0 0 102 96">
							<Path fill = {"#E6E6E6"}     d = "M101.42 42.299C101.241 43.1907 101.026 44.0733 100.776 44.9468C100.748 45.0482 100.718 45.1481 100.688 45.2496H97.2039C96.9072 45.2499 96.6227 45.3616 96.4129 45.5603C96.2031 45.759 96.0851 46.0283 96.0848 46.3093V55.7136C95.9792 55.8998 95.8721 56.0845 95.765 56.2692C95.2118 57.2229 94.6363 58.1661 94.0479 59.0971C84.4542 74.2294 71.0737 86.8923 55.0875 95.968L56.0341 93.9454C55.6871 93.9227 55.3386 93.9 54.9917 93.8773C47.4375 93.3883 39.8577 92.8463 32.481 91.2386C24.7638 89.5566 17.2144 86.6394 11.1663 81.8025C5.11648 76.9641 0.681537 70.0547 0.0659958 62.5791C-0.139254 60.0099 0.135149 57.4266 0.876621 54.9476C2.29467 50.1758 5.39314 45.8824 9.86329 43.3421C16.8851 39.353 26.0444 40.1659 33.4467 43.4844C40.8474 46.8013 46.8716 52.2922 52.7534 57.6877C46.8148 48.0446 38.5463 39.8722 28.6264 33.8409C25.3393 31.8486 21.8508 30.0743 19.0562 27.4931C16.2631 24.9135 14.2023 21.2968 14.6964 17.6316C15.2575 13.4745 18.8532 10.3195 22.4551 7.88672C23.894 6.9148 25.3793 5.99284 26.9109 5.14506C31.2324 2.74706 35.9072 0.937956 40.8442 0.267302C47.5318 -0.642547 54.7551 0.738123 59.8823 4.90435C65.6586 9.59893 68.028 17.1699 67.8026 24.4124C71.3614 19.5134 76.85 15.7635 83.0484 15.6045C89.4835 15.441 95.6004 19.2909 98.8234 24.5683C102.045 29.8442 102.624 36.3116 101.42 42.299Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style19}    >
					<View style = {noneModeStyles.style20}   >
						<Svg style={{height: 45, width: 31}} viewBox = "0 0 31 45">
							<Path fill = {"white"}     d = "M0.265985 44.9988C4.04712 44.6835 7.53996 44.3151 11.204 43.3333C14.7556 42.3817 18.1731 40.7887 20.7014 38.1875C23.4208 35.3897 24.8887 31.7563 25.9244 28.1393C26.5019 26.1227 26.9763 24.0778 27.424 22.0324C27.9098 19.813 28.3414 17.5838 28.7188 15.3448C29.4702 10.888 30.0066 6.40495 30.3281 1.89567C30.3669 1.34831 30.4025 0.800755 30.4349 0.253009C30.4549 -0.0848753 29.8999 -0.083797 29.8799 0.253009C29.6158 4.69787 29.1408 9.12541 28.4548 13.5356C27.7779 17.8686 26.9118 22.1829 25.8128 26.4382C24.8819 30.0432 23.6765 33.7044 21.2889 36.7054C19.0499 39.5195 15.8161 41.3585 12.3244 42.458C8.77128 43.5768 5.02498 44.0235 1.31207 44.3557C0.8566 44.3964 0.721719 44.4353 0.26598 44.4733C-0.0870174 44.5027 -0.0902989 45.0285 0.26598 44.9988L0.265985 44.9988Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style21}    >
					<View style = {noneModeStyles.style22}   >
						<Svg style={{height: 39, width: 54}} viewBox = "0 0 54 39">
							<Path fill = {"white"}     d = "M0.265437 0.522436C5.00394 0.771303 9.69426 1.55392 14.2372 2.85374C18.7821 4.15092 23.1496 5.95106 27.2492 8.21687C31.2104 10.408 34.8878 13.0298 38.2066 16.029C41.4275 18.9414 44.2981 22.1825 46.766 25.693C49.2451 29.2123 51.2996 32.9837 52.8909 36.9366C53.085 37.4204 53.2719 37.9067 53.4517 38.3954C53.5678 38.7106 54.1006 38.575 53.9832 38.2567C52.4944 34.2203 50.5317 30.355 48.1319 26.7334C45.7327 23.1114 42.9169 19.7524 39.7362 16.7179C36.5045 13.6364 32.9078 10.9185 29.0176 8.61826C20.8495 3.80035 11.5911 0.885738 2.00248 0.113766C1.42408 0.0678643 0.845069 0.0300994 0.265443 0.000473734C-0.0890249 -0.0178988 -0.0879368 0.504124 0.265443 0.522441L0.265437 0.522436Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style23}    >
					<View style = {noneModeStyles.style24}   >
						<Svg style={{height: 88, width: 34}} viewBox = "0 0 34 88">
							<Path fill = {"white"}     d = "M0.191344 0.514793C3.21022 1.42393 6.07171 2.74801 8.6842 4.44463C11.3537 6.1901 13.7884 8.23748 15.9342 10.5414C18.1955 12.965 20.2059 15.5885 21.9378 18.3759C23.7748 21.319 25.3706 24.3911 26.7111 27.5654C28.0916 30.8243 29.2526 34.1627 30.1873 37.5605C31.1374 40.9987 31.8796 44.4854 32.4101 48.0036C32.938 51.4845 33.2574 54.9908 33.3669 58.5059C33.4773 61.8671 33.3723 65.2315 33.0527 68.5806C32.7603 71.7052 32.2264 74.8052 31.4553 77.8559C30.7704 80.6111 29.8052 83.2971 28.5733 85.8761C28.2879 86.4614 27.9852 87.0387 27.665 87.6078C27.4988 87.9031 27.9728 88.1662 28.1392 87.8703C29.5006 85.4069 30.5877 82.8162 31.3829 80.1398C32.2751 77.1604 32.9219 74.12 33.3173 71.0459C33.7556 67.7107 33.9691 64.3524 33.9564 60.9915C33.9485 57.4606 33.7265 53.933 33.2916 50.4262C32.8565 46.8757 32.2104 43.3512 31.3566 39.8694C30.5047 36.382 29.4242 32.9482 28.1213 29.5881C26.8655 26.3353 25.3618 23.1731 23.6223 20.1265C21.9655 17.2194 20.0347 14.4598 17.8534 11.8817C15.7819 9.42688 13.417 7.20766 10.8059 5.26844C8.28812 3.40412 5.50589 1.88446 2.541 0.754133C1.81647 0.481063 1.08192 0.234109 0.337354 0.013273C-0.000605549 -0.0874101 -0.145219 0.414529 0.191339 0.514793H0.191344Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style25}    >
					<View style = {noneModeStyles.style26}   >
						<Svg style={{height: 3, width: 79}} viewBox = "0 0 79 3">
							<Path fill = {"#E6E6E6"}     d = "M39.2064 2.99999C60.8595 2.99999 78.4128 2.32842 78.4128 1.5C78.4128 0.671571 60.8595 0 39.2064 0C17.5533 0 0 0.671571 0 1.5C0 2.32842 17.5533 2.99999 39.2064 2.99999Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style27}    >
					<View style = {noneModeStyles.style28}   >
						<Svg style={{height: 9, width: 14}} viewBox = "0 0 14 9">
							<Path fill = {"#FFB8B8"}     d = "M10.4336 1.23524C10.4139 1.31754 10.401 1.40119 10.3951 1.48541L3.47511 5.26559L1.79311 4.3487L0 6.57151L3.59827 8.99999L11.4929 3.10249C11.8149 3.21532 12.1655 3.23265 12.4982 3.15218C12.8308 3.07171 13.1297 2.89725 13.3551 2.65201C13.5805 2.40677 13.7217 2.10237 13.7599 1.77929C13.7982 1.45621 13.7316 1.12977 13.5691 0.843373C13.4067 0.556977 13.156 0.324203 12.8504 0.176009C12.5448 0.0278157 12.1988 -0.0287725 11.8584 0.0137664C11.5181 0.0563054 11.1994 0.195956 10.9449 0.414148C10.6904 0.632341 10.5121 0.918733 10.4336 1.23524Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style29}    >
					<View style = {noneModeStyles.style30}   >
						<Svg style={{height: 8, width: 9}} viewBox = "0 0 9 8">
							<Path fill = {"#0C848E"}     d = "M0.92255 3.77719L6.50377 7.54387L9 4.58031L3.57453 0.458095C3.34112 0.280748 3.07192 0.150393 2.78343 0.0750109C2.49495 -0.00037079 2.19325 -0.0191924 1.89681 0.0197035C1.60038 0.0585995 1.31546 0.154393 1.05949 0.301214C0.803522 0.448034 0.581905 0.642791 0.408212 0.873556C0.069784 1.32319 -0.0661581 1.8817 0.0302983 2.42624C0.126755 2.97078 0.447713 3.45673 0.92255 3.77719Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style31}    >
					<View style = {noneModeStyles.style32}   >
						<Svg style={{height: 8, width: 5}} viewBox = "0 0 5 8">
							<Path fill = {"#FFB8B8"}     d = "M0 7.34411L2.01085 7.84294L5 0.736431L2.03238 0L0 7.34411Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 4, width: 6}} viewBox = "0 0 6 4">
							<Path fill = {"#2F2E41"}     d = "M5.92274 3.63636L-1.58783e-06 2.16683L0.599603 -1.51166e-05L4.23401 0.901744C4.84091 1.05233 5.35979 1.42503 5.67648 1.93787C5.99318 2.45071 6.08176 3.06168 5.92274 3.63636Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style35}    >
					<View style = {noneModeStyles.style36}   >
						<Svg style={{height: 8, width: 4}} viewBox = "0 0 4 8">
							<Path fill = {"#FFB8B8"}     d = "M1.41253 7.99998L3.46278 7.65317L3.02586 0L0 0.511844L1.41253 7.99998Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style37}    >
					<View style = {noneModeStyles.style38}   >
						<Svg style={{height: 3, width: 7}} viewBox = "0 0 7 3">
							<Path fill = {"#2F2E41"}     d = "M6.74547 1.9327L0.435488 3.00001L2.77825e-07 0.691479L3.87203 0.0365396C4.19218 -0.0176134 4.52047 -0.0115271 4.83814 0.0544562C5.15581 0.120439 5.45665 0.245032 5.72347 0.421106C5.99029 0.59718 6.21787 0.821296 6.39323 1.08066C6.56858 1.34001 6.68828 1.62954 6.74547 1.9327Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style39}    >
					<View style = {noneModeStyles.style40}   >
						<Svg style={{height: 9, width: 6}} viewBox = "0 0 6 9">
							<Path fill = {"#2F2E41"}     d = "M3.70244 0.501206C4.22527 0.621715 4.65064 1.12619 4.90609 1.71062C5.1417 2.32446 5.30123 2.96213 5.38148 3.61082C5.58219 4.81887 5.77495 6.12668 5.35981 7.24554C4.87324 8.5569 3.57676 9.24374 2.45216 8.92097C1.32757 8.5982 0.433155 7.38665 0.12756 5.99203C-0.150635 4.58286 0.0286164 3.12695 0.641684 1.81617C0.961148 1.12746 1.40149 0.492078 1.98667 0.181347C2.27371 0.0169849 2.61584 -0.0383645 2.94424 0.0264315C3.27263 0.0912276 3.56292 0.271361 3.75675 0.530605"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style41}    >
					<View style = {noneModeStyles.style42}   >
						<Svg style={{height: 32, width: 20}} viewBox = "0 0 20 32">
							<Path fill = {"#2F2E41"}     d = "M15.9451 0L19.5905 30.9174L16.5797 32L11.0267 11.2676L3.29561 30.2239L0 30.3973C0 30.3973 4.52174 0.901415 7.87283 0.231074L15.9451 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style43}    >
					<View style = {noneModeStyles.style44}   >
						<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
							<Path fill = {"#FFB8B8"}     d = "M4 7.5753C6.20914 7.5753 8 5.87951 8 3.78765C8 1.69579 6.20914 0 4 0C1.79086 0 0 1.69579 0 3.78765C0 5.87951 1.79086 7.5753 4 7.5753Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style45}    >
					<View style = {noneModeStyles.style46}   >
						<Svg style={{height: 16, width: 10}} viewBox = "0 0 10 16">
							<Path fill = {"#0C848E"}     d = "M7.3455 0.528273L3.06837 0C3.06837 0 0.278948 3.16961 0.46491 8.62837C0.650872 14.0871 0 15.76 0 15.76L8.91794 15.9126C7.62877 14.2341 13.021 4.59376 7.3455 0.528273Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style47}    >
					<View style = {noneModeStyles.style48}   >
						<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
							<Path fill = {"#FFB8B8"}     d = "M9.87736 8.68713C9.78514 8.68775 9.69311 8.69527 9.60213 8.7096L3.9429 3.00502L4.51989 1.18379L1.73105 0L0 4.00669L8.14208 10.1395C8.09831 10.4733 8.1629 10.8118 8.32725 11.11C8.4916 11.4082 8.74793 11.6519 9.06214 11.8088C9.37635 11.9657 9.73356 12.0283 10.0863 11.9882C10.4389 11.9482 10.7704 11.8074 11.0366 11.5847C11.3027 11.3619 11.4909 11.0677 11.5762 10.7412C11.6615 10.4147 11.6398 10.0713 11.5139 9.75676C11.3881 9.44222 11.1641 9.17139 10.8718 8.98032C10.5794 8.78925 10.2326 8.68699 9.87736 8.68713Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style49}    >
					<View style = {noneModeStyles.style50}   >
						<Svg style={{height: 9, width: 7}} viewBox = "0 0 7 9">
							<Path fill = {"#0C848E"}     d = "M2.61743 1.30476L0 7.36324L3.64912 9.00001L6.67117 3.00427C6.80119 2.74632 6.87422 2.46595 6.88579 2.18034C6.89737 1.89473 6.84724 1.60988 6.73849 1.34326C6.62973 1.07663 6.46464 0.833837 6.25332 0.629746C6.04199 0.425654 5.78889 0.264563 5.50952 0.156341C5.23999 0.0519302 4.95138 -0.00118679 4.66017 2.01143e-05C4.36896 0.00122702 4.08085 0.0567315 3.81229 0.163372C3.54374 0.270012 3.3 0.425697 3.09499 0.621536C2.88997 0.817375 2.72769 1.04953 2.61743 1.30476Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style51}    >
					<View style = {noneModeStyles.style52}   >
						<Svg style={{height: 15, width: 12}} viewBox = "0 0 12 15">
							<Path fill = {"#2F2E41"}     d = "M6.52984 8.27935C7.16966 7.92984 7.23791 7.08672 7.15096 6.39215C7.06401 5.69757 6.91875 4.92326 7.34992 4.35534C7.86451 3.67752 8.89838 3.66403 9.77966 3.64191C10.6609 3.61978 11.7341 3.37543 11.9625 2.56913C12.1134 2.03636 11.7905 1.46464 11.3273 1.13021C10.8641 0.795785 10.2845 0.647929 9.72122 0.507411C8.46112 0.193072 7.15999 -0.123915 5.86973 0.0488514C4.59174 0.219974 3.43628 0.860678 2.65337 1.83234C1.87046 2.80401 1.52306 4.02849 1.68632 5.24086C1.89515 6.79169 2.19803 7.46888 1.99922 8.15268C1.62892 9.42632 0.0322659 10.2445 0.00047138 11.5652C-0.0244003 12.5982 0.939236 13.3952 1.87942 13.9197C2.62518 14.3358 3.43003 14.6888 4.28946 14.7862C5.14889 14.8836 6.07418 14.6971 6.71441 14.1455C7.54015 13.4341 7.74441 12.2456 7.50763 11.2125C7.27085 10.1794 6.66346 9.26204 6.06262 8.37109"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style53}    >
					<View style = {noneModeStyles.style54}   >
						<Svg style={{height: 37, width: 60}} viewBox = "0 0 60 37">
							<Path fill = {"#3F3D56"}     d = "M57.8174 0H1.42955C1.05058 0.000539841 0.687306 0.143332 0.419337 0.397075C0.151368 0.650818 0.000570107 0.994811 0 1.35366V35.6463C0.000570107 36.0052 0.151368 36.3492 0.419337 36.6029C0.687306 36.8567 1.05058 36.9994 1.42955 37H57.8174C58.1963 36.9994 58.5596 36.8567 58.8276 36.6029C59.0955 36.3492 59.2463 36.0052 59.2469 35.6463V1.35366C59.2463 0.994811 59.0955 0.650818 58.8276 0.397075C58.5596 0.143332 58.1963 0.000539841 57.8174 0ZM58.9292 35.6463C58.9289 35.9255 58.8117 36.1931 58.6032 36.3905C58.3948 36.5878 58.1121 36.6989 57.8174 36.6992H1.42955C1.13476 36.6989 0.852148 36.5878 0.643703 36.3905C0.435257 36.1931 0.318005 35.9255 0.317678 35.6463V1.35366C0.318005 1.07452 0.435257 0.806909 0.643703 0.60953C0.852148 0.41215 1.13476 0.301123 1.42955 0.300813H57.8174C58.1121 0.301123 58.3948 0.41215 58.6032 0.60953C58.8117 0.806909 58.9289 1.07452 58.9292 1.35366V35.6463Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style55}    >
					<View style = {noneModeStyles.style56}   >
						<Svg style={{height: 11, width: 12}} viewBox = "0 0 12 11">
							<Path fill = {"#0C848E"}     d = "M10.2641 11H1.35263C0.994022 10.9996 0.650223 10.8645 0.396648 10.6244C0.143073 10.3843 0.000427036 10.0588 0 9.71918V1.28082C0.000427036 0.941251 0.143073 0.615704 0.396648 0.37559C0.650223 0.135477 0.994022 0.000404365 1.35263 0H10.2641C10.6227 0.000403967 10.9665 0.135477 11.2201 0.37559C11.4736 0.615704 11.6163 0.941251 11.6167 1.28082V9.71918C11.6163 10.0588 11.4736 10.3843 11.2201 10.6244C10.9665 10.8645 10.6227 10.9996 10.2641 11Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style57}    >
					<View style = {noneModeStyles.style58}   >
						<Svg style={{height: 2, width: 53}} viewBox = "0 0 53 2">
							<Path fill = {"#CCCCCC"}     d = "M51.9592 1.97106H1.04079C0.764752 1.97106 0.500024 1.86722 0.304839 1.6824C0.109654 1.49758 0 1.24691 0 0.985528C0 0.724149 0.109654 0.473477 0.304839 0.288655C0.500024 0.103832 0.764752 0 1.04079 0H51.9592C52.2352 0 52.5 0.103832 52.6952 0.288655C52.8903 0.473477 53 0.724149 53 0.985528C53 1.24691 52.8903 1.49758 52.6952 1.6824C52.5 1.86722 52.2352 1.97106 51.9592 1.97106Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style59}    >
					<View style = {noneModeStyles.style60}   >
						<Svg style={{height: 2, width: 53}} viewBox = "0 0 53 2">
							<Path fill = {"#CCCCCC"}     d = "M51.9592 1.97106H1.04079C0.764752 1.97106 0.500025 1.86723 0.304839 1.68241C0.109654 1.49758 0 1.24691 0 0.985532C0 0.724153 0.109654 0.473479 0.304839 0.288656C0.500025 0.103833 0.764752 0 1.04079 0H51.9592C52.2353 0 52.5 0.103833 52.6952 0.288656C52.8903 0.473479 53 0.724153 53 0.985532C53 1.24691 52.8903 1.49758 52.6952 1.68241C52.5 1.86723 52.2353 1.97106 51.9592 1.97106Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style61}    >
					<View style = {noneModeStyles.style62}   >
						<Svg style={{height: 2, width: 10}} viewBox = "0 0 10 2">
							<Path fill = {"#CCCCCC"}     d = "M8.69224 2H1.05607C0.77598 2 0.507366 1.89464 0.309315 1.7071C0.111264 1.51957 0 1.26521 0 0.999998C0 0.734782 0.111264 0.480429 0.309315 0.292893C0.507366 0.105357 0.77598 0 1.05607 0H8.69224C8.97232 0 9.24094 0.105357 9.43899 0.292893C9.63704 0.480429 9.7483 0.734782 9.7483 0.999998C9.7483 1.26521 9.63704 1.51957 9.43899 1.7071C9.24094 1.89464 8.97232 2 8.69224 2Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style63}    >
					<View style = {noneModeStyles.style64}   >
						<Svg style={{height: 2, width: 35}} viewBox = "0 0 35 2">
							<Path fill = {"#CCCCCC"}     d = "M33.9516 1.98546H1.04839C0.770338 1.98546 0.503677 1.88086 0.307066 1.69469C0.110455 1.50852 0 1.25602 0 0.992728C0 0.72944 0.110455 0.476936 0.307066 0.290764C0.503677 0.104591 0.770338 0 1.04839 0H33.9516C34.2297 0 34.4963 0.104591 34.6929 0.290764C34.8895 0.476936 35 0.72944 35 0.992728C35 1.25602 34.8895 1.50852 34.6929 1.69469C34.4963 1.88086 34.2297 1.98546 33.9516 1.98546Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style65}    >
					<View style = {noneModeStyles.style66}   >
						<Svg style={{height: 2, width: 27}} viewBox = "0 0 27 2">
							<Path fill = {"#CCCCCC"}     d = "M25.9441 1.99963H1.05587C0.775837 1.99963 0.507272 1.8943 0.309258 1.70679C0.111244 1.51929 0 1.26498 0 0.999817C0 0.734649 0.111244 0.480342 0.309258 0.29284C0.507272 0.105338 0.775837 0 1.05587 0H25.9441C26.2242 0 26.4927 0.105338 26.6907 0.29284C26.8888 0.480342 27 0.734649 27 0.999817C27 1.26498 26.8888 1.51929 26.6907 1.70679C26.4927 1.8943 26.2242 1.99963 25.9441 1.99963Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Please_Fill_All_Details_Correctly}   >
				Please Fill All Details Correctly
			</Text>
			<View style = {noneModeStyles._Rectangle_4}    >
			</View>
			<View style = {noneModeStyles._Rectangle_5}    >
			</View>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<View style = {noneModeStyles._Rectangle_7}    >
			</View>
			<View style = {noneModeStyles._Rectangle_8}    >
			</View>
			<View style = {noneModeStyles._Rectangle_9}    >
			</View>
			<View style = {noneModeStyles._Rectangle_10}    >
			</View>
			<Text style = {noneModeStyles._Teachers_Qualification}   >
				Teachers Qualification
			</Text>
			<Text style = {noneModeStyles._Education_Level}   >
				Education Level
			</Text>
			<Text style = {noneModeStyles._Institute_Type}   >
				Institute Type
			</Text>
			<Text style = {noneModeStyles._Phone_Number}   >
				Phone Number
			</Text>
			<Text style = {noneModeStyles._Email_Address}   >
				Email Address
			</Text>
			<Text style = {noneModeStyles._Institute_Address}   >
				Institute Address
			</Text>
			<Text style = {noneModeStyles._Institute_Name}   >
				Institute Name
			</Text>
			<View style = {noneModeStyles._Rectangle_4_2}    >
			</View>
			<Text style = {noneModeStyles._Submit}   >
				Submit
			</Text>
			<Text style = {noneModeStyles._Have_a_Problem__Contact_Us}   >
				Have a Problem? Contact Us
			</Text>
			<View style = {noneModeStyles._image_solid_1}    >
			</View>
			<View style = {noneModeStyles.style86}    >
				<View style = {noneModeStyles.style87}   >
					<Svg style={{height: 17, width: 22}} viewBox = "0 0 22 17">
						<Path fill = {"black"}     d = "M19.9375 17H2.0625C0.923398 17 0 16.0486 0 14.875V2.125C0 0.95138 0.923398 0 2.0625 0H19.9375C21.0766 0 22 0.95138 22 2.125V14.875C22 16.0486 21.0766 17 19.9375 17ZM4.8125 2.47917C3.48356 2.47917 2.40625 3.58912 2.40625 4.95833C2.40625 6.32754 3.48356 7.4375 4.8125 7.4375C6.14144 7.4375 7.21875 6.32754 7.21875 4.95833C7.21875 3.58912 6.14144 2.47917 4.8125 2.47917ZM2.75 14.1667H19.25V9.20833L15.4896 5.33397C15.2882 5.12652 14.9618 5.12652 14.7604 5.33397L8.9375 11.3333L6.55209 8.87564C6.35074 8.66818 6.02426 8.66818 5.82287 8.87564L2.75 12.0417V14.1667Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Upload_Institute_Photo}   >
				Upload Institute Photo
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Institute_Submit

const noneModeStyles = StyleSheet.create({
_page1: {
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
style2: {
	position: "absolute",
	},
style3: {
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
style5: {
	position: "absolute",
	transform: [
		{translateX: -0.0000152588},
		{translateY: 6.67657},
	],
	},
style6: {
	},
_wifi_solid_1: {
	width: 16.323,
	height: 13.0583,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 262.127,
	top: 6.72122,
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 0.000106812},
		{translateY: 0.816162},
	],
	},
style9: {
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
style11: {
	width: 144.026,
	height: 144.026,
	position: "absolute",
	left: "50%",
	top: -72.013,
	transform: [
		{translateX: -183.393},
	],
	},
style12: {
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
style14: {
	width: 27,
	height: 0,
	position: "absolute",
	left: 23,
	top: 59,
	},
style15: {
	},
_undraw_Profile_data_re_v81r_1: {
	width: 154,
	height: 96,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 94,
	top: 20,
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 0.00216866},
	],
	},
style18: {
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 59.8979},
		{translateY: 17.6298},
	],
	},
style20: {
	},
style21: {
	position: "absolute",
	transform: [
		{translateX: 0.922928},
		{translateY: 54.3156},
	],
	},
style22: {
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 26.6273},
		{translateY: 5.19336},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 20.1221},
		{translateY: 92.9995},
	],
	},
style26: {
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 83.718},
		{translateY: 46.2956},
	],
	},
style28: {
	},
style29: {
	position: "absolute",
	transform: [
		{translateX: 77.5937},
		{translateY: 46.1648},
	],
	},
style30: {
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 67.4174},
		{translateY: 84.1956},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 66.5576},
		{translateY: 90.4501},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 82.8027},
		{translateY: 84.864},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
	transform: [
		{translateX: 83.6129},
		{translateY: 90.8607},
	],
	},
style38: {
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 77.0183},
		{translateY: 39.3811},
	],
	},
style40: {
	},
style41: {
	position: "absolute",
	transform: [
		{translateX: 67.0982},
		{translateY: 59.544},
	],
	},
style42: {
	},
style43: {
	position: "absolute",
	transform: [
		{translateX: 76.0718},
		{translateY: 36.4034},
	],
	},
style44: {
	},
style45: {
	position: "absolute",
	transform: [
		{translateX: 74.4114},
		{translateY: 44.7993},
	],
	},
style46: {
	},
style47: {
	position: "absolute",
	transform: [
		{translateX: 74.5028},
		{translateY: 52.9363},
	],
	},
style48: {
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 75.5083},
		{translateY: 46.1865},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 72.7225},
		{translateY: 35.5481},
	],
	},
style52: {
	},
style53: {
	position: "absolute",
	transform: [
		{translateX: 94.9035},
		{translateY: 44.5416},
	],
	},
style54: {
	},
style55: {
	position: "absolute",
	transform: [
		{translateX: 98.1159},
		{translateY: 50.6169},
	],
	},
style56: {
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 98.2326},
		{translateY: 68.5462},
	],
	},
style58: {
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 98.2662},
		{translateY: 63.8205},
	],
	},
style60: {
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 116.328},
		{translateY: 57.368},
	],
	},
style62: {
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 116.328},
		{translateY: 52.5686},
	],
	},
style64: {
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 98.2326},
		{translateY: 73.347},
	],
	},
style66: {
	},
_Please_Fill_All_Details_Correctly: {
	width: 236,
	height: 34,
	position: "absolute",
	left: 54,
	top: 123,
	color: "rgb(12, 132, 142)",
	fontSize: 11.5221,
	fontWeight: "700",
	lineHeight: 13.5024,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Rectangle_4: {
	width: 228,
	height: 35,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 59,
	top: 146,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Rectangle_5: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 59,
	top: 191,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Rectangle_6: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 59,
	top: 239,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Rectangle_7: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 59,
	top: 286,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Rectangle_8: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 59,
	top: 335,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Rectangle_9: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 59,
	top: 384,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Rectangle_10: {
	width: 228,
	height: 36,
	backgroundColor: "rgb(243, 243, 243)",
	position: "absolute",
	left: 61,
	top: 434,
	borderRadius: 20,
	shadowOffset: {
		width: 5,
		height: 10
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 10,
	},
_Teachers_Qualification: {
	width: 149,
	height: 16,
	position: "absolute",
	left: 98,
	top: 444,
	color: "rgba(0, 0, 0, 0.49)",
	fontSize: 13,
	fontWeight: "400",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Education_Level: {
	width: 149,
	height: 16,
	position: "absolute",
	left: 98,
	top: 394,
	color: "rgba(0, 0, 0, 0.49)",
	fontSize: 13,
	fontWeight: "400",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Institute_Type: {
	width: 150,
	height: 29,
	position: "absolute",
	left: 98,
	top: 345,
	color: "rgba(0, 0, 0, 0.49)",
	fontSize: 13,
	fontWeight: "400",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Phone_Number: {
	width: 150,
	height: 29,
	position: "absolute",
	left: 98,
	top: 297,
	color: "rgba(0, 0, 0, 0.49)",
	fontSize: 13,
	fontWeight: "400",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Email_Address: {
	width: 150,
	height: 29,
	position: "absolute",
	left: 98,
	top: 247,
	color: "rgba(0, 0, 0, 0.49)",
	fontSize: 13,
	fontWeight: "400",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Institute_Address: {
	width: 150,
	height: 29,
	position: "absolute",
	left: 98,
	top: 199,
	color: "rgba(0, 0, 0, 0.49)",
	fontSize: 13,
	fontWeight: "400",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Institute_Name: {
	width: 150,
	height: 29,
	position: "absolute",
	left: 98,
	top: 157,
	color: "rgba(0, 0, 0, 0.49)",
	fontSize: 13,
	fontWeight: "400",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Rectangle_4_2: {
	width: 258,
	height: 47,
	backgroundColor: "rgb(12, 132, 142)",
	position: "absolute",
	left: 44,
	top: 533,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	},
_Submit: {
	width: 186,
	height: 31,
	position: "absolute",
	left: 80,
	top: 547,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_Have_a_Problem__Contact_Us: {
	width: 253,
	height: 17,
	position: "absolute",
	left: 46,
	top: 591,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "700",
	lineHeight: 14.0625,
	fontFamily: "Roboto",
	textAlign: "center",
	},
_image_solid_1: {
	width: 32,
	height: 32,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 174,
	top: 494,
	},
style86: {
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 490},
	],
	},
style87: {
	},
_Upload_Institute_Photo: {
	width: 110,
	height: 19,
	position: "absolute",
	left: 121,
	top: 511,
	color: "rgba(0, 0, 0, 0.54)",
	fontSize: 10,
	fontWeight: "400",
	lineHeight: 11.7188,
	fontFamily: "Roboto",
	textAlign: "center",
	},
})

