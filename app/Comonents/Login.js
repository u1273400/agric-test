import React, {Component} from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/img/bg.png')} style={styles.backgroundImage}>
        <View style={styles.content}>
          <Text style={styles.logo}>- O Wow -</Text>
            <View style={styles.inputContainer}>
              <TextInput underlineColorAndroid='transparent' style={styles.input}
                placeholder='username'></TextInput>
              <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                placeholder='password'></TextInput>
          </View>
            <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                <Text style={styles.buttonText} >LOGIN</Text>
            </TouchableOpacity>
        </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems:'center',

  },
  backgroundImage: {
    flex:1,
    alignSelf:'stretch',
    width:null,
    justifyContent:'center'
  },
  logo: {
    color:'white',
    fontSize:40,
    fontWeight: 'bold',
    textShadowColor:'#252525',
    textShadowOffset:{width:2,height:2},
    textShadowRadius:2,
    marginBottom:20
  },
  inputContainer:{
    margin:20,
    marginBottom: 0,
    padding: 20,
    paddingBottom:10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor : 'rgba(255,255,255,0.2)',
  },
  input:{
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor:'rgba(255,255,255,1)',
  },
  buttonContainer:{
    alignSelf:'stretch',
    margin:20,
    padding: 20,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
