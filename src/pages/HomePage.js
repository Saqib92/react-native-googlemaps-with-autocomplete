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
  Switch,
  TextInput,
  Picker
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-ionicons';
import axios from 'axios';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class HomePage extends Component{
  // static navigationOptions = { // remove header on this page
  //     header: null
  // }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerStyle:{headerStyle: 'center'},
      title: 'Google Maps',
    // headerRight: (
    //   <View style={{flexDirection:'row'}}>
    //     <Text style={{marginRight: 10}}>
    //       <Icon name="information-circle" style={{marginRight: 10}} />
    //     </Text>
    //   </View>
    // )
    };
  };

  constructor(props){
    super(props);
    this.state = {
      selectedCategory: '',
      region: {
        latitude: 30.3753,
        longitude: 69.3451,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      showPlacesList: false,
      markers: [],
      categories:[
        "Select Category",
        "accounting",
        "airport",
        "amusement_park",
        "aquarium",
        "art_gallery",
        "atm",
        "bakery",
        "bank",
        "bar",
        "beauty_salon",
        "bicycle_store",
        "book_store",
        "bowling_alley",
        "bus_station",
        "cafe",
        "campground",
        "car_dealer",
        "car_rental",
        "car_repair",
        "car_wash",
        "casino",
        "cemetery",
        "church",
        "city_hall",
        "clothing_store",
        "convenience_store",
        "courthouse",
        "dentist",
        "department_store",
        "doctor",
        "electrician",
        "electronics_store",
        "embassy",
        "fire_station",
        "florist",
        "funeral_home",
        "furniture_store",
        "gas_station",
        "gym",
        "hair_care",
        "hardware_store",
        "hindu_temple",
        "home_goods_store",
        "hospital",
        "insurance_agency",
        "jewelry_store",
        "laundry",
        "lawyer",
        "library",
        "liquor_store",
        "local_government_office",
        "locksmith",
        "lodging",
        "meal_delivery",
        "meal_takeaway",
        "mosque",
        "movie_rental",
        "movie_theater",
        "moving_company",
        "museum",
        "night_club",
        "painter",
        "park",
        "parking",
        "pet_store",
        "pharmacy",
        "physiotherapist",
        "plumber",
        "police",
        "post_office",
        "real_estate_agency",
        "restaurant",
        "roofing_contractor",
        "rv_park",
        "school",
        "shoe_store",
        "shopping_mall",
        "spa",
        "stadium",
        "storage",
        "store",
        "subway_station",
        "supermarket",
        "synagogue",
        "taxi_stand",
        "train_station",
        "transit_station",
        "travel_agency",
        "veterinary_care",
        "zoo",
      ]

    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('location' ,position.coords.latitude);
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }
      })
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000});
  }

  getAPI = ()=>{
    console.log('from get APi function');
    axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.state.region.latitude+","+this.state.region.longitude+"&rankby=distance&type="+this.state.selectedCategory+"&key=AIzaSyBtGPJeKV8bZQuM73Yr97Q_FNKBqEnkDJ4")
    .then(response => response.data)
    .then((data) => {
      console.log(data);
      let res = []
      data.results.map((val)=>{
        res.push({title: val.name, description: val.types[0], coordinates:{latitude: val.geometry.location.lat, longitude: val.geometry.location.lng}})
      })
      this.setState({
        markers: res
      })
     })
  }

    render() {
      return (

        <View style={{flex: 1}}>
        <MapView
        style={styles.map}
          region={this.state.region}
        >

        {this.state.markers.map(marker => (
            <MapView.Marker 
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>


        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 5,
            right: 5
          }}>
            <Picker
            selectedValue={this.state.selectedCategory}
            style={{height: 50, width: "100%"}}
            onValueChange={(itemValue, itemIndex) =>{
              console.log(itemValue, itemIndex)
              this.setState({selectedCategory: itemValue})
            }
            }>  
            {this.state.categories.map((val)=>{
            return <Picker.Item label={val} value={val} />
            })}
          </Picker>
              <GooglePlacesAutocomplete
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth:0
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              },
              
            }}
            textInputProps={{
              onFocus: () => this.setState({showPlacesList: true}),
              onBlur: () => this.setState({showPlacesList: false}),
           }}
            currentLocation={true}
            predefinedPlacesAlwaysVisible={true}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              console.log(data, details);
              this.setState({
                region: {
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }
              })
              this.getAPI();
            }}
            listViewDisplayed={this.state.showPlacesList}    // true/false/undefined
            nearbyPlacesAPI='GooglePlacesSearch'
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyBtGPJeKV8bZQuM73Yr97Q_FNKBqEnkDJ4',
              language: 'en', // language of the results
              types: 'geocode', // default: 'geocode'
            }}
          />

          </View>
    
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    map:{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flex: 1
    }
  });
  
