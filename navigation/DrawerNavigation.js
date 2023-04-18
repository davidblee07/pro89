import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import StackNavigator from './StackNavigator';
import Logout from '../screens/Logout';
import firebase from "firebase";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
    };
  }

  componetDidMount() {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function(snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({ light_theme: theme === "light" ? true : false });
  }

render(){
  return(
    <Drawer.Navigator drawerContentOptions={{ activeTintColor:"#EEB02C", 
    inactiveTintColor:this.state.light_theme? 'black': "white", itemStyle:{
      marginVertical:5
    }}} drawerContent={(props)=><CustomSidebarMenu {...props}/>} >
      <Drawer.Screen
        name="Tela Inicial"
        component={StackNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
 }
}