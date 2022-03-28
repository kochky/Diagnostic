import { StyleSheet,Text, View, Button,Image,ScrollView} from 'react-native';
import React,{  useEffect } from 'react'
import { UserContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage';


function Archives({navigation}){
  
    const props = React.useContext(UserContext); 

    function handlePress(patient){
        props.setNewPatient(false)
        props.setDate(patient.date)
        props.setName(patient.name)
        props.setFirstname(patient.firstName)
        props.setPhone(patient.phone)
        props.setEmail(patient.email)
        props.setStructure(patient.structure)
        props.setActivity(patient.activity)
        navigation.navigate('Nouveau diagnostique')

    }

    function toResult(patient){
        props.setNewPatient(false)
        props.setDate(patient.date)
        props.setName(patient.name)
        props.setFirstname(patient.firstName)
        props.setPhone(patient.phone)
        props.setEmail(patient.email)
        props.setStructure(patient.structure)
        props.setActivity(patient.activity)
        navigation.navigate('Section')

    }

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
        storeData(props.data)
    }, [props.data])
    

     return(
        <ScrollView style={styles.view} contentContainerStyle={{ alignItems:"center"}}>
            {Object.keys(props.data).length>0? Object.values(props.data).reverse().map((patient)=> 
                    <View key={patient.name+patient.firstName+patient.date} style={styles.container}>
                            <View style={styles.title}>
                                <View style={styles.info} ><Text>Nom: </Text><Text style={styles.patientName}>{patient.name}</Text></View>
                                <View style={styles.info}><Text>Prenom: </Text><Text style={styles.patientName}>{patient.firstName}</Text></View>
                                <View style={styles.info}><Text>Date: </Text><Text style={styles.patientName}>{patient.date}</Text></View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button  color="#A7001E" title="Effacer" onPress={()=>deletePatient(patient.name+patient.firstName+patient.date)}></Button>
                                <Button  title="Modifier" onPress={()=>handlePress(patient)}></Button>
                                <Button color="#18534F" title="Compte rendu" onPress={()=>toResult(patient)}></Button>
                            </View>
                    </View> 
                
            ):<View style={styles.containerError}>
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
        width:"90%",
        flex:1,
        backgroundColor:"white",
        padding:20,
        borderRadius:15,
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
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        flex:1,
        alignItems:"center",
    },
    patientName:{
        fontSize:16,
        alignSelf:"center",
        fontWeight:"bold"
    },
    title:{
        flex:1,
        marginBottom:20,
    },
    info:{
        flex:1,
        flexDirection:"row",
        marginBottom:10,
        alignItems:"center"
    }   
})
export default Archives