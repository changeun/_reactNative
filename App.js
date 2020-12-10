import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "aa66ed8a4882fb4ad03fe6fcf393cea2";

export default class extends React.Component {
  state = {
    isLoading : true
  }

  getWeather = async(latitude, longitude) => {
    const { 
      data : { 
        main: { temp },
        weather 
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    })
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      this.setState({
        isLoading: false
      })
      //send to API and get weather
    } catch (error) {
      Alert.alert("Can't find you.", "So sad.");
    }

  }
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}