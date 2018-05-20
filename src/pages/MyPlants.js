import React, { Component } from 'react';
import {
  StyleSheet,
  // Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Text, 
  Icon, 
  Right,
  Body,
  Left
} from 'native-base';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
var { height, width } = Dimensions.get("window");

import Gambar from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

export default class MyPlants extends Component<{}> {
	render() {
    const TANAMAN = [
      {
        "Gambar" : "https://www.growweedeasy.com/wp-content/uploads/2013/05/purple-side-bud-cola.jpg",
        "PotNumber" : "1",
        "SoilSensorValue" : "NORMAL",
        "Temperature" : "NORMAL",
        "STATE" : "IS IN NORMAL STATE",
      },
      {
        "Gambar" : "https://www.growweedeasy.com/wp-content/uploads/2012/04/dinafem-blue-thai-cannabis-plant-grown-in-air-pot.jpg",
        "PotNumber" : "2",
        "SoilSensorValue" : "DRY",
        "Temperature" : "NORMAL",
        "STATE" : "NEEDS WATER",
      },
      {
        "Gambar" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vlbhwk2QI6b_RhWou_gqimwHknnqJ4tS1tvrOON7MZYfDUsk",
        "PotNumber" : "3",
        "SoilSensorValue" : "WET",
        "Temperature" : "NORMAL",
        "STATE" : "NEEDS SUN",
      },
    ];
		return(
      <ScrollView>
        <View>
          {TANAMAN.map((innerArray, index) => {
            return (
              <Card style={{height: null}}>
                <CardItem>
                  <Body style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Text>#PotNumber {innerArray.PotNumber}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Gambar 
                      source={{uri: innerArray.Gambar}} 
                      style={{width: 0.9*width, height: 0.9*width, borderColor: "black", borderWidth: 5}}
                    />
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Soil Sensor Value : {innerArray.SoilSensorValue}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Temperature : {innerArray.Temperature}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>The Plant {innerArray.STATE}</Text>
                  </Body>
                </CardItem>
              </Card>
            )
          })}
        </View>
      </ScrollView>   
		)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
    flexDirection: 'column'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'black',
  	fontSize:16
  },
  signupButton: {
  	color:'black',
  	fontSize:16,
  	fontWeight:'500'
  }
});
