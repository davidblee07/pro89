import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';

const Tab = createBottomTabNavigator();

const BottomTabNavigator= ()=> {
 return(
    <Tab.Navigator
     screenOptions={({route}) => ({
      tabBarIcon:({focuzed, color, size})=> {
        let iconName;
        if(route.name === 'Feed'){
          iconName = focuzed ? 'book' : 'book-outline';
        }else if(route.name === 'Profile'){
            iconName = focuzed ? 'create' : 'create-outline';  
        }
        return <IonIcons name={iconName} size={size} color={color} />    
     }
  })}
       tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor:'gray'
       }}
    >
        <Tab.Screen name='Criar Postagem' component={CreatePost}/>  
       <Tab.Screen name='Feed' component={Feed}/>
    </Tab.Navigator>
 )
}

export default BottomTabNavigator;

