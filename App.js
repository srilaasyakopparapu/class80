import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import HomeScreen from './screens/Home'
import ISSLocation from './screens/IssLocation'
import MeteorScreen from './screens/Meteors'

const Stack=createStackNavigator();


export default function App(){

  return(
<NavigationContainer>

<Stack.Navigator initialRouteName="Home" screenOptions={{
  headerShown: false
}}>
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="ISSLocation" component={ISSLocation}/>
<Stack.Screen name="MeteorScreen" component={MeteorScreen}/>


</Stack.Navigator>

</NavigationContainer>
  )


}