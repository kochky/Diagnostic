import { StyleSheet, View,Pressable,TextInput,ScrollView } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function RotationCervicale({navigation}){
    const [commentaire,setCommentaire]=useState("")
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const title="Rotation cervicale"
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
                <RowFourCheckbox title={title} text="Rotation cervicale"/>
                <RowFourCheckbox title={title} text="Rotation active supine"/>
                <RowDoubleGray title={title} text="Rotation passive supine" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Test isolation C1-C2" firstCase="Limité" secondCase="Non limité"/>
                <TextInput
                    placeholder='Ajouter des commentaires'
                    onChangeText={setCommentaire}
                    value={commentaire}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=> navigation.navigate('Appley Superieur')}>
                        <Icon name="navigate-next"  type="MaterialIcons" color='white'/>
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
    buttonContainer:{
        backgroundColor:"#rgba(24,83,79,1)",
        width:50,
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"flex-end",
        marginTop:30,
    },
    input:{
        color:"#rgba(24,83,79,1)"
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
 
});


export default RotationCervicale