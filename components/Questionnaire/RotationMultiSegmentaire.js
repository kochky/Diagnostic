import { StyleSheet, View,Pressable,ScrollView,Image,Text,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function RotationMultiSegmentaire({navigation}){
    const [commentaire,setCommentaire]=useState("")
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const title="Rotation multi-ségmentaire"
    const [isLoaded,setIsLoaded]=useState(false)

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

        if(!isLoaded){
            setIsLoaded(true)
    
            if(typeof(props.data[patientId][title]) == "object"){
                if(typeof props.data[patientId][title]["commentaire"] =="string"){
                    setCommentaire(props.data[patientId][title]["commentaire"])
                }
            }
        
        }else {
        
         props.setData(data=>({
                    ...data,
                    [patientId]:{
                        ...data[patientId]
                        ,[title]:{...data[patientId][title],
                        ["commentaire"]:commentaire}
                    }}))
            }
        }, [commentaire])
        

    return(
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.view}>
                <RowSuperior/>
                <RowFourCheckbox title={title} text={"Rotation multi-ségmentaire "}/>
                <RowDoubleGray title={title} text="Décharge" firstCase="Limité" secondCase="Pas limité"/>
                <Text style={styles.title}> Membre sup (Rotation rachidienne)</Text>
                <RowSuperior/>

                <RowFourCheckbox title={title} text={"Ligne GH-GH- Coude"}/>
                <RowDoubleGray title={title} text="Extension/rotation thoracique <50°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Dwerk" firstCase="" secondCase="Sonnette latérale ou décollement scapulaire"/>
                <Text style={styles.title}>Membre inf</Text>
                
                <RowDoubleGray title={title} text="Rotation interne de hanche" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Rotation externe de hanche " firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Rotatation interne fémoro-tibiales" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Rotation externe fémoro-tibiales" firstCase="Limité" secondCase="Non limité"/>
                <TextInput
                    placeholder='Commentaires'
                    onChangeText={setCommentaire}
                    value={commentaire}
                    style={styles.input}
                    />
                <View  style={styles.container}>
                    <Pressable onPress={()=> navigation.navigate('Resultat')}>
                        <View style={styles.resultContainer}>
                            <Image style={styles.image} source={require('../../ressources/result.png')}/>
                            <Text style={{color:"white"}}>RESULTAT</Text> 
                        </View>
                    </Pressable>
                    <Pressable onPress={()=> navigation.navigate('Single Leg Stance')}>
                        <View style={styles.buttonContainer}>
                            <Icon name="navigate-next"  type="MaterialIcons" color='white'/>
                        </View>
                    </Pressable>
                    
                </View>
            </View> 
        </ScrollView>      
    )
}

const styles = StyleSheet.create({
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
    title:{
        fontWeight:"bold",
        fontSize:16,
        color:"blue",
        marginBottom:10,
        marginTop:20

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
        justifyContent:"space-around",
        height:50,
        borderRadius:15,
        width:150,
        padding: 10,
    },
    input:{
        color:"#rgba(24,83,79,1)",
        flex:1,
        marginBottom:20
    },

});


export default RotationMultiSegmentaire
