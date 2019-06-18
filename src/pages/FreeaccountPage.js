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
  TextInput
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class FreeaccountPage extends Component{
  static navigationOptions = { // remove header on this page
      header: null
  }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.heading}>Free Account</Text>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    headerView:{
      marginTop: moderateScale(20),

    },
    heading:{
      fontSize: moderateScale(21),
      fontWeight: 'bold',
      color: 'red'     
    }
  });
  
