/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import HomePage from "./src/pages/HomePage";



import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";


const AppNavigator = createStackNavigator({
  Home: {screen: HomePage},

}
);

export default createAppContainer(AppNavigator);
