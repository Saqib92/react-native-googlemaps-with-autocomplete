/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import LoginPage from "./src/pages/LoginPage";
import SignupPage from "./src/pages/SignupPage";
import SignupformPage from "./src/pages/SignupformPage";
import ForgotpasswordPage from "./src/pages/ForgotpasswordPage";
import SummaryPage from "./src/pages/SummaryPage";
import ReportPage from "./src/pages/ReportPage";
import PremiumaccountPage from "./src/pages/PremiumaccoutnPage";
import FreeaccountPage from "./src/pages/FreeaccountPage";


import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import { fromLeft, zoomIn } from 'react-navigation-transitions';

const AppNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  Signup: {screen: SignupPage},
  SignupForm: {screen: SignupformPage},
  ForgotPass: {screen: ForgotpasswordPage},
  Summary: {screen: SummaryPage},
  Report: {screen: ReportPage},
  Premiumaccount: {screen: PremiumaccountPage},
  Freeaccount: {screen: FreeaccountPage}
},
{
  initialRouteName: 'Login',
  transitionConfig: () => zoomIn(750),
}
);

export default createAppContainer(AppNavigator);
