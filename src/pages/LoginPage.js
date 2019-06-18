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


export default class LoginPage extends Component{
  static navigationOptions = { // remove header on this page
      header: null
  }
  constructor(props){
    super();
    this.state = {
      win: ''
    }
  }
  componentDidMount(){
    let s = Dimensions.get('window');
    console.log(s);    
  }

    render() {
      
      return (
        <View style={ styles.container }>
          <ImageBackground source={require('../assets/bg.png')} style={styles.bgImage}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.headerView}>
                <Text style={styles.heading}>LOGIN</Text>
              </View>

              <View style={{width: '90%',marginTop: '33%', paddingLeft: moderateScale(30)}}>
                  <View style={styles.inputs}>
                    <Text style={styles.inputLabel}>
                      <Icon ios="ios-mail" android="md-mail" style={styles.inputIcon}/>
                      EMAIL ADDRESS
                    </Text>
                    <TextInput style={styles.input}/>
                  </View>
                  
                  <View style={styles.inputs}>
                    <Text  style={styles.inputLabel}>
                      <Icon ios="ios-key" android="md-key" style={styles.inputIcon}/>
                      PASSWORD
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                  </View>
                  <View style={styles.forgetView}>
                    <Text style={styles.forgetText}>Forget Password? Click Here</Text>
                  </View>

                  <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText} >LOGIN</Text>
                  </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    bgImage:{
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
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
      marginBottom: moderateScale(16),
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
      borderWidth: 1,
      borderRadius: moderateScale(50),
      marginTop: moderateScale(20),
      alignItems: "center",
      justifyContent: "center",
      elevation: 2
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
    }    
  });
  
