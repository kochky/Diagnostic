import { StyleSheet, View,Pressable,ScrollView,Image,Text,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FirstRowFourCheckbox from './model/FirstRowFourCheckBox';

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function OverheadDeepSquat({navigation}){

    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const title="Overhead deep squat"
    const [isLoaded,setIsLoaded]=useState(false)
    const [commentaire,setCommentaire]=useState("")
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
                <FirstRowFourCheckbox setHidden={setHidden} title={title} text={"Overhead deep squat"}/>
                {hidden===false && (<>
                <RowDoubleGray title={title} text="Stabilis??" firstCase="Mieux" secondCase="Pas mieux"/>
                <Text style={styles.title}>Upper Body /  Tronc</Text>
                <RowSuperior/>
                <RowFourCheckbox title={title} text={"Ligne GH-GH- Coude"}/>
                <RowDoubleGray title={title} text="Lumbar lock" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Dwerk" firstCase="" secondCase="Sonnette lat??rale ou d??collement scapulaire"/>
                <RowDoubleGray title={title}text="Sphynx (30??)" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <Text style={styles.title}>Lower Body </Text>
                <RowDoubleGray title={title}text="Chevalier servant " firstCase="Limit??" secondCase="Pas stable"/>
                <RowDoubleGray title={title} text="Genou - poitrine " firstCase="Limit??" secondCase="Pas limit??"/>
                <RowDoubleGray title={title} text="Genou - poitrine avec les mains sous les genoux" firstCase="Limit??" secondCase="Pas limit??"/>
                <RowDoubleGray title={title} text="Hip adduction test" firstCase="Glut med activ?? deuxieme" secondCase=""/>
                <RowDoubleGray title={title} text="Pied plat fonctionnel" firstCase="Affaissement de la voute plantaire" secondCase=""/>
                <RowDoubleGray title={title} text="Assist??" firstCase="Mieux" secondCase="Pas mieux"/>
                <TextInput
                    placeholder='Commentaires'
                    onChangeText={setCommentaire}
                    value={commentaire}
                    style={styles.input}
                    /> 
                </> )}
                <View  style={styles.container}>
                    <Pressable onPress={()=> navigation.navigate('Resultat')}>
                        <View style={styles.resultContainer}>
                            <Image style={styles.image} source={require('../../ressources/result.png')}/>
                            <Text style={{color:"white"}}>RESULTAT</Text> 
                        </View>
                    </Pressable>
                    <Pressable onPress={()=> navigation.navigate('Deep Squat')}>
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


export default OverheadDeepSquat