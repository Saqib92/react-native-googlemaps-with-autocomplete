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

export default class SignupformPage extends Component{
  static navigationOptions = { // remove header on this page
      header: null
  }

    render() {
      return (
        <View style={ styles.container }>
          <ImageBackground source={require('../assets/bg.png')} style={styles.bgImage}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.headerView}>
                <Text style={styles.heading}>SIGN UP</Text>
              </View>

              <View style={styles.mainView}>
                  <View style={styles.inputs}>
                    <Text style={styles.inputLabel}>
                      <Icon ios="ios-person" android="md-person" style={styles.inputIcon}/>
                      YOUR NAME
                    </Text>
                    <TextInput style={styles.input}/>
                  </View>
                  
                  <View style={styles.inputs}>
                    <Text  style={styles.inputLabel}>
                      <Icon ios="ios-call" android="md-call" style={styles.inputIcon}/>
                      PHONE NUMBER
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                  </View>

                  <View style={styles.inputs}>
                    <Text  style={styles.inputLabel}>
                      <Icon ios="ios-mail" android="md-mail" style={styles.inputIcon}/>
                      EMAIL ADDRESS
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                  </View>

                  <View style={styles.inputs}>
                    <Text  style={styles.inputLabel}>
                      <Icon ios="ios-key" android="md-key" style={styles.inputIcon}/>
                      PASSWORD
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                  </View>

                  <View style={styles.inputs}>
                    <Text  style={styles.inputLabel}>
                      <Icon ios="ios-globe" android="md-globe" style={styles.inputIcon}/>
                      LANGUAGE
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                  </View>
                  
                  <View>
                    <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
                      <Text style={styles.loginText} >SIGN UP</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.signupView}>
                    <Text style={{color:'#fff', alignItems:'center'}} onPress={this.toSignup}>Dont have an Account? Sign In</Text>
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
      marginTop: '10%',
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
    inputs:{
      width: '100%',
      
    },
    inputIcon:{
      color: '#fff',
      marginRight: moderateScale(16),
      fontSize: moderateScale(10)
    },
    inputLabel:{
      color: '#fff',
      fontSize: moderateScale(10),
      fontWeight: 'bold',
      marginBottom: moderateScale(12),
    },
    input:{
      height: moderateScale(36),
      marginBottom: moderateScale(16),
      backgroundColor: '#fff',
      borderRadius: moderateScale(50)
    },
    loginBtn:{
      color: '#fff',
      flexDirection: "row",
      height: moderateScale(36),
      backgroundColor: 'transparent',
      borderColor: '#fff',
      borderWidth: moderateScale(2),
      borderRadius: moderateScale(50),
      marginTop: moderateScale(50),
      alignItems: "center",
      justifyContent: "center",
      elevation: moderateScale(2)
    },
    loginText:{
      color:'#fff',
      fontSize: moderateScale(10),
      fontWeight: 'bold'
    },
    forgetView:{
      alignItems: 'flex-end',
      marginTop: moderateScale(-10)
    },
    forgetText:{
      color: '#fff',
      fontSize: moderateScale(12),
    },
    signupView:{
      alignItems: 'center',
      marginTop: moderateScale(30)
    }    
  });
  

  
