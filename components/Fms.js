import { StyleSheet, Text, View,Pressable,TextInput,Button } from 'react-native';
import React,{ useEffect, useState } from 'react';
import { UserContext } from '../Context'
import { Slider, Icon } from 'react-native-elements';
import RowFMS from "./Questionnaire/model/RowFMS"


function Fms({navigation}){
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date

    const [result,setResult]=useState(0)
    const [hidden,setHidden]=useState(true)

    useEffect(() => {
        if(props.data[patientId]["FMS"]){
           setResult(0)
           setHidden(false)
           Object.values(props.data[patientId]["FMS"]).map(score=>score===-1 && setHidden(true))

            Object.values(props.data[patientId]["FMS"]).map(score=>setResult(prevState=>prevState+score))
        }
      
    }, [props.data[patientId]["FMS"]])
    
    useEffect(() => {
        console.log(result)

        props.setData(data=>({
            ...data,
            [patientId]:{
                ...data[patientId]
                ,["FMS Resultat"]:result
            }}))
    }, [result])
    
    return (
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
            {hidden ? <Text>Score:Finissez les tests pour voir le score</Text>:<Text>Score: {result}</Text>}
            <View style={styles.buttonContainer}>
               <Button
               title="Résultat"
               onPress={()=> navigation.navigate('Resultat')}
               />
            </View>
        </View>       
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
});

export default Fms