import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Analysis  from './src/analysis';

export default function App() {
    const [fontLoaded,setFontLoad] = useState(false);
    useEffect(()=>{
        loadfont()
        try
        {
            setFontLoad(Font.isLoaded("monts_reg"))
        }
        catch(e)
        {
          console.log(e)
        }
    },[])
    const loadfont = async ()=>{
      console.log("hi there")
      const status = await Font.loadAsync({
        monts_reg: require("./assets/font/Montserrat-Regular.ttf"),
        monts_semib: require("./assets/font/Montserrat-SemiBold.ttf"),
      })
      Font.isLoaded("monts_reg")
      console.log(status)
    }
  return (
    // <View style={styles.container}>
    //   {
    //     fontLoaded ? (
    //     <View>
    //         <Text style={{fontFamily:"monts_reg"}}>Open up App.js to start working on your app!</Text>
    //         <StatusBar style="auto" />
    //     </View>
    //     ):undefined
    //   }
      <NavigationContainer>
           <BottomTab />
      </NavigationContainer>
    
  );
}
const Tab = createBottomTabNavigator()
const BottomTab = () =>{
 return( 
   
  <Tab.Navigator>
      <Tab.Screen name="Analysis" component={Analysis} />
  </Tab.Navigator>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#ddddcf"
  },
});
