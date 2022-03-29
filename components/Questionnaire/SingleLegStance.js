import { StyleSheet, View,Pressable,ScrollView,Image,Text,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';
import FirstRowFourCheckbox from './model/FirstRowFourCheckBox';


function SingleLegStance({navigation}){

    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const title="Single leg stance"
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
                <FirstRowFourCheckbox setHidden={setHidden} title={title} text={"Single leg stance"}/>
               {hidden===false && (<> 
               <RowFourCheckbox title={title} text={"Yeux fermés"}/>
                <Text style={styles.title}>Vestibule cervicale</Text>
                <RowDoubleGray title={title} text="Romberg sur sol mou" firstCase="Perte d'équilibre mineur ou pas de perte d'équilibre" secondCase="Perte d'équilibre majeur"/>
                <RowDoubleGray title={title} text="Perte d'équilibre" firstCase="Limité" secondCase=""/>
                <Text style={styles.title}>Hanche / ceinture pelvienne / rachis</Text>
                <RowDoubleGray title={title}  text="Chevalier servant" firstCase="Garde l'équilibre" secondCase="Garde l'équilibre"/>
                <RowDoubleGray title={title} text="Bird dog" firstCase="Garde l'équilibre" secondCase="Garde l'équilibre"/>
                <RowDoubleGray title={title} text="Hip adduction test" firstCase="Glut med non activé en premier" secondCase=""/>
                <RowDoubleGray  title={title}text="Hip extention test" firstCase="Glut med non activé en premier" secondCase=""/>
                <RowDoubleGray title={title} text="Rolling patterns" firstCase="Difficulté" secondCase=""/>
                <Text style={styles.title}>Cheville </Text>
                <RowSuperior/>

                <RowFourCheckbox title={title} text={"Marche talon pointe"}/>
                <RowDoubleGray title={title} text="Dorsiflexion" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Inversion" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Eversion " firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <TextInput
                    placeholder='Ajoutez des commentaires'
                    onChangeText={setCommentaire}
                    value={commentaire}
                    style={styles.input}
                />
                </>)}
                <View  style={styles.container}>
                    <Pressable onPress={()=> navigation.navigate('Resultat')}>
                        <View style={styles.resultContainer}>
                            <Image style={styles.image} source={require('../../ressources/result.png')}/>
                            <Text style={{color:"white"}}>RESULTAT</Text> 
                        </View>
                    </Pressable>
                    <Pressable onPress={()=> navigation.navigate('Overhead Deep Squat')}>
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


export default  SingleLegStance
