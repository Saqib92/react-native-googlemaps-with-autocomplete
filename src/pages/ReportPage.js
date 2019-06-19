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
import LinearGradient from 'react-native-linear-gradient';

export default class ReportPage extends Component{
  // static navigationOptions = { // remove header on this page
  //     header: null
  // }

  static navigationOptions = ({navigation}) => {
    return {
        title: 'REPORT',
        
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            color: '#fff',
            alignSelf:'center',
            marginLeft: moderateScale(-40)
        },
        headerBackground: (
          <LinearGradient
            colors={['#8548BD', '#5161CC', '#1D7ADB']}
            style={{ flex: 1 }}
            
          />
        ),
        headerStyle: {
            paddingHorizontal: 8,
            height: 100,
          //  backgroundColor: '#8548BD'
        },
        headerLeft: (
          <View>
            <Icon name="arrowback" style={{marginRight: -10, color: '#fff'}}/>
        </View>
        )
    };
};

    render() {
      return (
        <View style={styles.container}>
          
         <View style={styles.mainView}>
          
                <View style={styles.inputs}>
                  <Text style={styles.inputLabel}>
                    <Icon ios="ios-mail" android="md-mail" style={styles.inputIcon}/>
                    Email Address
                  </Text>
                  <TextInput style={styles.input}/>
                </View>
                
                <View style={styles.inputs}>
                  <Text  style={styles.inputLabel}>
                    <Icon ios="ios-key" android="md-key" style={styles.inputIcon}/>
                    Subject
                  </Text>
                  <TextInput style={styles.input} />
                </View>

                <View style={styles.inputs}>
                  <Text  style={styles.inputLabel}>
                    <Icon ios="ios-key" android="md-key" style={styles.inputIcon}/>
                    Write
                  </Text>
                  <TextInput
                      style={styles.textArea}
                      underlineColorAndroid="transparent"
                      numberOfLines={10}
                      multiline={true}
                    />
                </View>

                <View>
                  
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8548BD', '#4C55B8', '#1261B3']} style={{height: 20, alignItems: "center", color: '#fff', borderRadius: moderateScale(50), marginTop: moderateScale(20), height: 40, justifyContent: "center"}}>
                    <Text style={{color: '#fff'}}>SEND MESSAGE</Text>
                  </LinearGradient>
                 
                </View>
        </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F0F6FD'
    },
    mainView:{
      width: '90%',
      marginTop: '10%',
      paddingLeft: moderateScale(10)
    },
    inputs:{
      width: '100%',
    },
    inputIcon:{
      color: '#53575C',
      marginRight: moderateScale(16),
      fontSize: moderateScale(10)
    },
    inputLabel:{
      color: '#53575C',
      fontSize: moderateScale(10),
      fontWeight: 'bold',
      marginBottom: moderateScale(16),
    },
    input:{
      height: moderateScale(36),
      marginBottom: moderateScale(16),
      backgroundColor: '#fff',
      borderRadius: moderateScale(50),  
      elevation: 1
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
    }   ,
    textArea: {
      height: 150,
      justifyContent: "flex-start",
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 1
    } 
    
  });
  
