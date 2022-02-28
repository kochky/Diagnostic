import { StyleSheet,Text, View, Button,Image,ScrollView} from 'react-native';
import React,{  useEffect } from 'react'
import { UserContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage';


function Archives({navigation}){
  
   
    const props = React.useContext(UserContext); 

    function deletePatient(patient){
        props.setData(prevState=>{
            const state={...prevState}; 
            delete state[patient]
            return state
        })
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
      }
    useEffect(() => {
        storeData()
    }, [])
    

     return(
        <ScrollView style={styles.view} contentContainerStyle={{ alignItems:"center"}}>
            {props.data.length>0 ? Object.values(props.data).map((patient,i)=> 
                    <View key={patient.name} style={styles.container}>
                       <Text>{patient.name}</Text>
                    </View>             
                
            ):  <View style={styles.containerError}>
                    <Image style={styles.image} source={require('../ressources/folder.png')}/> 
                    <Text style={styles.noHistory}>Aucun Historique</Text>
                </View>
                
                }
        </ScrollView>)
    
}
const styles = StyleSheet.create({
    view:{
        backgroundColor:"#rgba(24,83,79,1)",
        flex:1,
    },
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop:20,
        borderRadius:25,
        width:"90%",
        backgroundColor:"blue",
        flex:1
    },
    noHistory:{
        marginTop:"50%",
        fontSize:36,
        flex:1
    },
    image:{
        flex:1,
        width:150,
        height:150
    },
    containerError:{
        flex:1,
        marginTop:"40%",
        justifyContent:"center",
        alignItems:"center"
    }
    
})
export default Archives