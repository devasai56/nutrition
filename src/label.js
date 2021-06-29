import React from "react";
import { StyleSheet, Text, View, TextInput, StatusBar, Button, Dimensions,ScrollView } from 'react-native';
const {height,width} = Dimensions.get("window");

export default function Label ({data}){
   const {totalDaily,totalNutrients} = data
   console.log(data)
   const renderFacts = () =>{
       let format = []
       for(let key in totalDaily)
       {
        format.push(<View style={{flex:0.1,width:width-width/6,flexDirection:"row",borderBottomWidth:2}}>
               <View style={{flex:0.5}}>
                    <Text style={{fontSize:10,padding:10,textAlign:"left"}}>{`${totalDaily[key].label} ${Math.round(totalNutrients[key].quantity,2)}${totalNutrients[key].unit} `}</Text>
               </View>
                <View style={{flex:0.5,alignItems:"flex-end"}}>
                    <Text style={{fontSize:10,padding:10}}>{`${Math.round(totalDaily[key].quantity,2)}${totalDaily[key].unit}`}</Text>
                </View>
                
        </View>)

       }
       return format
   }
    return(
    <View style={styles.primaryContainer}>
            <Text style={{fontSize:17,borderBottomWidth:5,width:width-width/6,padding:10,textAlign:"center"}}>NUTRITION FACTS</Text>
            <View style={{flex:0.1,justifyContent:"space-between",width:width-width/6,flexDirection:"row",borderBottomWidth:2}}>
                    <Text style={{fontSize:17,padding:10,textAlign:"center"}}>Calories</Text>
                    <Text style={{fontSize:14,width:width-width/6,padding:10,textAlign:"center"}}>{data.calories}</Text>
            </View>
            <View style={{flex:0.1,justifyContent:"flex-end",width:width-width/6,flexDirection:"row",borderBottomWidth:1}}>
                    <Text style={{fontSize:12,padding:10,textAlign:"center"}}> % Daily Value</Text>
                    
            </View>
            
            <ScrollView style={{flex:0.5}}>
                    {renderFacts()}
            </ScrollView>
                
            
    </View>);
}

const styles = StyleSheet.create(
    {
        primaryContainer:{
            flex:1,
            padding:10,
            borderWidth:2,

        }
    }
)