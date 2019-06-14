/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import LoginPage from "./src/LoginPage";

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";


const AppNavigator = createStackNavigator({
  Login: {screen: LoginPage}
});

export default createAppContainer(AppNavigator);
