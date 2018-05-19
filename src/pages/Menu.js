import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Dimensions,
  Image,
  TouchableHighlight
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
var { height, width } = Dimensions.get("window");

export default class Menu extends Component<{}> {
	render() {
		return(
			<View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent: 'center',backgroundColor: '#77533B', width: width/2, height: height/3}}>
              <TouchableOpacity onPress={() => Actions.myplants()}>
                <Image  style={{width:96, height: 96}}
                  source={require('../images/icons8-plant-96.png')}/>
              </TouchableOpacity>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>My Plants</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent: 'center',backgroundColor: '#92B500', width: width/2, height: height/3}}>
              <TouchableOpacity onPress={() => Actions.plantationstutorial()}>
                <Image  style={{width:96, height: 96}}
                  source={require('../images/icons8-classroom-96.png')}/>
              </TouchableOpacity>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Plantations Tutorial</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent: 'center',backgroundColor: '#92B500', width: width/2, height: height/3}}>
            <Image  style={{width:96, height: 96}}
              source={require('../images/icons8-share-96.png')}/>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Communities Sharing</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent: 'center',backgroundColor: '#77533B', width: width/2, height: height/3}}>
            <Image  style={{width:96, height: 96}}
              source={require('../images/icons8-small-business-96.png')}/>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Products Storefront</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent: 'center',backgroundColor: '#77533B', width: width/2, height: height/3}}>
            <Image  style={{width:96, height: 96}}
              source={require('../images/icons8-caliper-96.png')}/>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Tools Marketplace</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent: 'center',backgroundColor: '#92B500', width: width/2, height: height/3}}>
            <Image  style={{width:96, height: 96}}
              source={require('../images/icons8-male-user-96.png')}/>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>My Profile</Text>
          </View>
        </View>
      </View>
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
