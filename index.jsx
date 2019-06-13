import React, {Component} from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Navigator
} from 'react-native';

//type Props = {};
//export default class MyApp extends Component<Props> {
export default class MyApp extends Component{
  render() {
    return (
      <Navigator initialRoute={{id:'login'}}
        renderScene={this.navigatorRenderScene} />
    );
  }
  navigatorRenderScene(route, navigator){
    _navigator=navigator;
    switch(route.id){
      case 'login':
        return (<Login navigator={navigator}/>);
    }
  }

}


// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'Atrst', () => MyApp
);
