import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.adroidSafeArea} />
        <ImageBackground source={require("../assets/bg_image.png")}
        style={styles.bgImage}>

        
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>ISS TRACKER APP</Text>
        </View>
          <TouchableOpacity style= {styles.routecards}
          onPress={()=>this.props.navigation.navigate("ISSLocation")}>
            
          <Text  style={styles.routeText} >
          ISSLocation
          </Text>
          <Text style={styles.digit}>1
          </Text>
          <Image source={require("../assets/iss_icon.png")}
          style={styles.iconImage}>
          </Image>
          
          </TouchableOpacity>


          <TouchableOpacity style= {styles.routecards}
          onPress={()=>this.props.navigation.navigate("MeteorScreen")}>
          <Text style={styles.routeText}>
         Meteors
         
          </Text>
          <Text style={styles.digit}>2
              
          </Text>
          <Image source={require("../assets/meteor_icon.png")}
          style={styles.iconImage}>

          </Image>
          </TouchableOpacity>
        <View></View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'grey'
  },
  titleText: {
    fontSize: 40,
  },
  adroidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar:{
    flex:0.25,
    justifyContent:'center',
    alignItems:'center'
  },
  routecards:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    marginBottom:50,
    backgroundColor:"white",
    borderRadius:30
  },
  routeText:{
    fontSize:25,
    fontWeight:'bold',
    marginTop:50,
    paddingLeft:30
  },
  bgImage:{
    flex: 1,
    resizeMode: 'cover'

  },
  iconImage:{
      height: 200,
      width: 200,
      resizeMode: 'contain',
      position: 'absolute',
      right: 20,
      top: -80
  },
  digit:{
      fontSize: 100,
      right: 20,
      color: 'grey',
      position: 'absolute'

  }



});