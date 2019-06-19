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

export default class FreeaccountPage extends Component{
  // static navigationOptions = { // remove header on this page
  //     header: null
  // }

  static navigationOptions = ({navigation}) => {
    return {
        title: 'HOME',
        headerLeft:
        <View style={{ padding: 6}}>
          <Icon name="person" style={{marginLeft: 20, color:'#fff'}}  />
          <Text style={{marginLeft: 10, color: '#fff'}}>Upgrade</Text>
        </View>, //add this,
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            color: '#fff',
            alignSelf:'center',
        },
        headerStyle: {
            paddingHorizontal: 8,
            height: 100,
            backgroundColor: '#8548BD'
        },
        headerRight: (
          <View style={{marginRight: 20}}>
            <Icon name="settings" style={{marginRight: -10, color: '#fff'}}/>
            <Text style={{ color: '#fff',}}>Setings</Text>            
        </View>
        )
    };
};

    render() {
      return (
        <View style={styles.container}>

          <View style={styles.headerView}>

            <Text style={styles.userName}>Momina Mustehsan</Text>

            <TouchableOpacity style={styles.verifyBtn}>
              <Icon name="checkmark-circle" style={{fontSize: moderateScale(10), marginRight: 5, color: '#4396F2', padding: 5}}/>
              <Text style={{ color: '#4396F2'}}>Verify</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainView}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8548BD', '#4C55B8', '#1261B3']} style={styles.gradient}>
              <Text style={{color:'#fff', fontSize: moderateScale(9), marginTop: moderateScale(10)}}>Your Points</Text>
              <Text style={{color:'#fff', fontSize: moderateScale(23), fontWeight: 'bold'}}>6789</Text>
            </LinearGradient>
          </View>

          <View style={{flexDirection:'row', marginBottom: moderateScale(20),  width: '90%', backgroundColor: '#69DC75', height: moderateScale(50), borderRadius: moderateScale(5)}}>
              <Icon name="person"/>
              <Text>Let's Call</Text>
              <Icon name="call" style={{alignSelf: 'flex-end'}}/>
          </View>

          <View style={{flexDirection:'row', marginBottom: moderateScale(20), width: '90%', backgroundColor: '#69C8DC', height: moderateScale(50), borderRadius: moderateScale(5)}}>
              <Icon name="person"/>
              <Text>Let's Call</Text>
              <Icon name="call" style={{alignSelf: 'flex-end'}}/>
          </View>

          <View style={{flexDirection:'row', marginBottom: moderateScale(20), width: '90%', backgroundColor: '#DC69AA', height: moderateScale(50), borderRadius: moderateScale(5)}}>
              <Icon name="person"/>
              <Text>Let's Call</Text>
              <Icon name="call" style={{alignSelf: 'flex-end'}}/>
          </View>

          <View style={{flexDirection:'row', marginBottom: moderateScale(20), width: '90%', backgroundColor: '#F03820', height: moderateScale(50), borderRadius: moderateScale(5)}}>
              <Text>Report a Problem</Text>
              <Icon name="call" style={{alignSelf: 'flex-end'}}/>
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
    headerView:{
      flexDirection: 'row',
      width: '90%',
      marginTop: moderateScale(20),
      marginBottom: moderateScale(20)
    },
    heading:{
      fontSize: moderateScale(21),
      fontWeight: 'bold',
      color: 'red'     
    },
    gradient: {
      width: '100%',
      height: moderateScale(70),
      borderRadius: moderateScale(5),
      alignItems: 'center'
    },
    mainView:{
      width: '90%',
      flexDirection: 'row',
      marginBottom: moderateScale(20)
    },
    userName:{
      fontSize: moderateScale(14),
      fontWeight: 'bold',
      color: '#222F45',
      width: '70%',
      paddingLeft: moderateScale(20)
      
    },
    verifyBtn:{
      backgroundColor: '#fff',
      borderRadius: moderateScale(50),
      color: '#4396F2',
      width: moderateScale(60),
      alignSelf: 'flex-end',
      flexDirection: 'row'
    }
  });
  
