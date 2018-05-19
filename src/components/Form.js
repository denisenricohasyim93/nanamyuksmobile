import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Logo extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
          {(this.props.type === 'Login') ? (
            <View>
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='black'
                  placeholder="Email"
                  placeholderTextColor = "black"
                  selectionColor="black"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
                  />
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='black'
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "black"
                  ref={(input) => this.password = input}
                  />
                <TouchableOpacity style={styles.button} onPress={Actions.menu}>
                 <Text style={styles.buttonText}>{this.props.type}</Text>
               </TouchableOpacity>
            </View>
          ) :
          (
            <View>
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='black'
                  placeholder="Email"
                  placeholderTextColor = "black"
                  selectionColor="black"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
                  />
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='black'
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "black"
                  ref={(input) => this.password = input}
                  />
               <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>{this.props.type}</Text>
               </TouchableOpacity>
            </View>
          ) }
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'white',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'grey',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});
