import { StyleSheet, View,Pressable,ScrollView } from 'react-native';
import React, { useEffect } from 'react'
import { Icon } from 'react-native-elements';
import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext} from "../../Context"

function FlexionCervicale({navigation}){
    const title="Flexion cervicale"
    const props = React.useContext(UserContext); 

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
                <RowFourCheckbox title={title} text={"Flexion cervicale"}/>
                <RowFourCheckbox title={title} text={"Flexion active supine"}/>
                <RowDoubleGray title={title} text="Flexion passive supine" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Isolation C0-C1" firstCase="Limité" secondCase="Non limité"/>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=> navigation.navigate('Extension Cervicale')}>
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
        flex:1,
        flexGrow:1,
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
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }

});


export default FlexionCervicale