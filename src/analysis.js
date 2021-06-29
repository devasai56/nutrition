import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, StatusBar, Button, Dimensions } from 'react-native';
import axios from "axios";
import Label from './label';
const {width,height} = Dimensions.get("window");

export default function Analysis()
{
    const [recipe,setRecipe] = useState("")
    const [facts,setFacts] = useState({})
    const fetchNutritionFacts = async () =>{
        console.log("i func")
            try
            {
                let response = await axios.post("https://api.edamam.com/api/nutrition-details?app_id=6a271d0d&app_key=173789431cbc9717c2ae5073fb97dc5a",{ingr:recipe.split("\n")})
                if(response.status==200)
                {
                    setFacts(response.data)
                }
                else
                {
                    alert("Api returned status"+response.status)
                }
                
            }
            catch(e)
            {
                console.log(e)
            }
    }
    return( <View style={styles.analysisContainer}>
                <StatusBar />
                <TextInput style={styles.inputstyle} placeholder="Recipe..." onChangeText={(txt)=>{
                   
                    setRecipe(txt)}} multiline ></TextInput>
                <Button title="Analyze" color="black" onPress={()=>{
                     setFacts({})
                    fetchNutritionFacts()}} />
                <View style={styles.labelContainer}>
                    {
                        Object.keys(facts).length ? (<Label data={facts}/>) :(<Text>Loading...</Text>)
                    }
                </View>
                
            </View>)
}

const styles = StyleSheet.create({
    analysisContainer:{
        borderWidth:2,
        flex:1,
        padding:10
    },
    inputstyle:{
        fontFamily:"monts_reg",
        flex:0.2,
        borderWidth:2,
        marginBottom:10,
        padding:10
    },
    labelContainer:
    {
        flex:0.8,
        borderWidth:1,
        marginTop:5,

    }
})