import { StyleSheet, View,Pressable,ScrollView,Image,Text } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements';
import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext} from "../../Context"
import FirstRowFourCheckbox from './model/FirstRowFourCheckBox';

function FlexionCervicale({navigation}){
    const title="Flexion cervicale"
    const props = React.useContext(UserContext); 
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
 
    return(
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.view}>
                <RowSuperior/>
                <FirstRowFourCheckbox setHidden={setHidden} title={title} text={"Flexion cervicale"}/>

               {hidden===false && (<> 
               <RowFourCheckbox title={title} text={"Flexion active supine"}/>
                <RowDoubleGray title={title} text="Flexion passive supine" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Isolation C0-C1" firstCase="Limité" secondCase="Non limité"/> 
                </> )}
                <View  style={styles.container}>
                    <Pressable onPress={()=> navigation.navigate('Resultat')}>
                        <View style={styles.resultContainer}>
                            <Image style={styles.image} source={require('../../ressources/result.png')}/>
                            <Text style={{color:"white"}}>RESULTAT</Text> 
                        </View>
                    </Pressable>
                    <Pressable onPress={()=> navigation.navigate('Extension Cervicale')}>
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
        color:"#rgba(24,83,79,1)"
    },

});


export default FlexionCervicale