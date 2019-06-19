/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TouchableOpacity, 
  TextInput,
  ImageBackground,
  Dimensions
} from 'react-native';
import Icon from 'react-native-ionicons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignupPage extends Component{
  static navigationOptions = { // remove header on this page
      header: null
  }

  toEmailSignup=()=>{
    this.props.navigation.push('SignupForm');
  }

    render() {
      return (
        <View style={ styles.container }>
          <ImageBackground source={require('../assets/bg.png')} style={styles.bgImage}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.headerView}>
                <Text style={styles.heading}>LOGO</Text>
              </View>

        <View style={styles.mainView}>
              <View style={styles.headerView}>
                <Text style={styles.heading}>SIGNUP</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.loginBtnFB}>
                <Icon ios="logo-facebook" android="logo-facebook" style={styles.inputIcon}/>
                  <Text style={styles.loginText} >SIGNUP WITH FACEBOOK</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.loginBtnGoogle}>
                <Icon ios="logo-googleplus" android="logo-googleplus" style={styles.inputIcon}/>
                  <Text style={styles.loginText} >SIGNUP WITH GOOGLE</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.loginBtnEmail} onPress={this.toEmailSignup}>
                <Icon ios="ios-mail" android="md-mail" style={styles.inputIcon}/>
                  <Text style={styles.loginText} >SIGNUP WITH EMAIL</Text>
                </TouchableOpacity>
              </View>
        </View>
            </KeyboardAwareScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
  
  const wd = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    bgImage:{
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: wd      
    },
    mainView:{
      width: '90%',
      marginTop: '40%',
      paddingLeft: moderateScale(30)
    },
    headerView:{
      marginTop: moderateScale(31),
      alignItems: 'center'
    },
    heading:{
      fontSize: moderateScale(21),
      fontWeight: 'bold',
      color: '#FFFFFF'      
    },
    inputIcon:{
      color: '#fff',
      marginRight: moderateScale(16),
      fontSize: moderateScale(13),
      
    },
    loginBtnFB:{
      color: '#fff',
      flexDirection: "row",
      height: moderateScale(45),
      backgroundColor: '#3A549F',
      borderRadius: moderateScale(50),
      marginTop: moderateScale(30),
      alignItems: "center",
      justifyContent: "center",
      elevation: moderateScale(2)
    },
    loginBtnGoogle:{
      color: '#fff',
      flexDirection: "row",
      height: moderateScale(45),
      backgroundColor: '#EA4235',
      borderRadius: moderateScale(50),
      marginTop: moderateScale(30),
      alignItems: "center",
      justifyContent: "center",
      elevation: moderateScale(2)
    },
    loginBtnEmail:{
      color: '#fff',
      flexDirection: "row",
      height: moderateScale(45),
      backgroundColor: '#3C3F49',
      borderRadius: moderateScale(50),
      marginTop: moderateScale(30),
      alignItems: "center",
      justifyContent: "center",
      elevation: moderateScale(2)
    },
    loginText:{
      color:'#fff',
      fontSize: moderateScale(13),
      fontWeight: 'bold'
    }
  });
  
