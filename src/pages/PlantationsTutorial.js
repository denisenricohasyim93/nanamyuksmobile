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

export default class PlantationsTutorial extends Component<{}> {
	render() {
    const TUTORIAL = [
      {
        "TutorialNumber" : "1",
        "Gambar" : "http://www.tipsberkebun.com/wp-content/uploads/2017/08/bibit-cabe.jpg",
        "Judul" : "Cara Mudah Pembibitan Cabe Rawit Ala Rumahan",
        "Tanggal" : "Friday, August 4th, 2017",
        "Author" : "Azka Ihsan Nurrahman",
        "ProfilePicture" : "http://www.uv.mx/sin-humo/files/2014/06/Ponentes.png",
        "url" : "http://www.tipsberkebun.com/cara-mudah-pembibitan-cabe-rawit-ala-rumahan.html",
      },
      {
        "TutorialNumber" : "2",
        "Gambar" : "http://www.tipsberkebun.com/wp-content/uploads/2017/08/Cabe-Rawit-Berbuah-Lebat.png",
        "Judul" : "Cara Mudah Pembibitan Cabe Rawit Ala Rumahan",
        "Tanggal" : "Friday, August 4th, 2017",
        "Author" : "Denis Enrico Hasyim",
        "ProfilePicture" : "http://www.uv.mx/sin-humo/files/2014/06/Ponentes.png",
        "url" : "http://www.tipsberkebun.com/menanam-cabe-rawit-agar-berbuah-lebat.html"
      },
      {
        "TutorialNumber" : "3",
        "Gambar" : "http://www.tipsberkebun.com/wp-content/uploads/2016/12/Sawi-Hidroponik-768x576.jpg",
        "Judul" : "Cara Bertanam Hidroponik Sederhana di Rumah",
        "Tanggal" : "Sunday, December 18th, 2016",
        "Author" : "Roro Rochimah",
        "ProfilePicture" : "http://www.uv.mx/sin-humo/files/2014/06/Ponentes.png",
        "url" : "http://www.tipsberkebun.com/cara-bertanam-hidroponik-sederhana-di-rumah.html"
      },
    ];
		return(
      <ScrollView>
        <View>
          {TUTORIAL.map((innerArray, index) => {
            return (
              <Card style={{height: null}}>
                <CardItem>
                  <Left>
                    <Gambar 
                      source={{uri: innerArray.ProfilePicture}} 
                      style={{width: 0.2*width, height: 0.2*width}}
                    />
                    <Body style={{flex: 1 , flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                      <Text>#{innerArray.TutorialNumber}, {innerArray.Author}</Text>
                      <Text>{innerArray.Judul}</Text>
                      <Text>{innerArray.Tanggal}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => Actions.plantationstutorialdetail({url : innerArray.url})}>
                      <Gambar 
                        source={{uri: innerArray.Gambar}} 
                        style={{width: 0.9*width, height: 0.9*width, borderColor: "black", borderWidth: 5}}
                      />
                    </TouchableOpacity>
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
