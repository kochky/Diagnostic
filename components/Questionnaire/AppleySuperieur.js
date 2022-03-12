import { StyleSheet, View,Pressable,ScrollView,Image,Text,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function AppleySuperieur({navigation}){

    const [commentaire,setCommentaire]=useState("")
    const props = React.useContext(UserContext); 
    const title= "Appley superieur"
    const patientId= props.name+props.firstName+props.date
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
                <RowFourCheckbox title={title} text={"Appley superieur"}/>
                <RowFourCheckbox title={title} text={"Appley sup en décharge"}/>
                <RowDoubleGray title={title} text="Rotation externe GH <90°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Flexion/Abduction (craw) décollage du buste" firstCase="Limité" secondCase="Non limité"/>
                <RowDoubleGray title={title} text="Extension/rotation thoracique <50°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Flexion du coude" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>

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
                <Pressable onPress={()=> navigation.navigate("Appley Inferieur")}>
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
        flex:1,
        flexGrow:1,
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


export default AppleySuperieur