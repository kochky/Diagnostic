import { StyleSheet, View,Pressable,ScrollView,Image,Text } from 'react-native';
import React,{ useEffect, useState } from 'react';
import { UserContext } from '../Context'
import RowFMS from "./Questionnaire/model/RowFMS"
import AsyncStorage from '@react-native-async-storage/async-storage';


function Fms({navigation}){
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date

    const [result,setResult]=useState(0)
    const [hidden,setHidden]=useState(true)

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
      }
    useEffect(() => {
        storeData(props.data)
    }, [props.data])
 
    useEffect(() => {
        if(props.data[patientId]["FMS"]){
            setResult(0)
            setHidden(false)
            Object.values(props.data[patientId]["FMS"]).map(score=>score===-1 && setHidden(true))
            Object.values(props.data[patientId]["FMS"]).map(score=>setResult(prevState=>prevState+score))
        } 
    }, [props.data[patientId]["FMS"]])
    
    useEffect(() => {
        props.setData(data=>({
            ...data,
            [patientId]:{
                ...data[patientId]
                ,["FMS Resultat"]:result
            }}))
    }, [result])
    
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>

        <View style={styles.view}>
            <View style={styles.row}>
                <View style={{flex:1.5}}></View>
                <Text style={{flex:0.5}}></Text>
                <Text style={styles.red}>Douleur</Text>
                <Text style={styles.orange}>Echoué</Text>
                <Text style={styles.green}>Adapté</Text>
                <Text style={styles.green}>Parfait</Text>
            </View>
            <RowFMS text="Deep squat" />
            <RowFMS text="Le Hurdle Step" />
            <RowFMS text="Le In-line Lunge" />
            <RowFMS text="Le Active Straight-leg Raise" />
            <RowFMS text="Le Trunk Stability Push-up" />
            <RowFMS text="Le Shoulder Mobility" />
            <RowFMS text="Le Rotary Stability " />
            {hidden ? <Text style={{color:"blue",marginTop:20}}>Score: Finissez les tests pour voir le score</Text>:<Text style={{color:"blue",marginTop:20}}>Score: {result}</Text>}
            <Pressable onPress={()=> navigation.navigate('Resultat')}>
                <View style={styles.resultContainer}>
                    <Image style={styles.image} source={require('../ressources/result.png')}/>
                    <Text style={{color:"white"}}>RESULTAT</Text> 
                </View>
            </Pressable>
        </View>    
        </ScrollView>
   
    )
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:"row",
        textAlign:'center',
        alignItems:"center",
        fontWeight:"bold"
    },
    green:{
        flex:1,
        backgroundColor:"#75BB99",
        fontWeight:"bold",
        textAlign:'center',


    },
    red:{
        flex:1,
        backgroundColor:"#EC3C4C",
        fontWeight:"bold",
        textAlign:'center',
    },
    orange:{
        backgroundColor:"#F27438",
        flex:1,
        fontWeight:"bold",
        textAlign:'center',
    },
    view:{
        width:"100%",
        height:"100%",
        margin:"auto",
        backgroundColor:"white",
        padding:"5%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer:{
        backgroundColor:"#rgba(24,83,79,1)",
        width:50,
        height:50,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    },
    image:{
        width:40,
        height:40
    },
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",  
    },
    resultContainer:{
        backgroundColor:"#rgba(24,83,79,1)",
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"space-around",
        height:50,
        borderRadius:15,
        width:150,
        padding: 10,
        marginTop:30
    }
});

export default Fms