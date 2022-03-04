import { StyleSheet, View,Pressable,ScrollView } from 'react-native';
import React, {useEffect} from 'react'
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext} from "../../Context"
import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function FlexionMultiSegmentaire({navigation}){
    const title="Flexion multi-ségmentaire"
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
                <RowFourCheckbox title={title} text={"Flexion multi-ségmentaire"}/>
                <RowFourCheckbox title={title} text={"Flexion multi-ségmentaire en décharge"}/>
                <RowDoubleGray title={title} text="Flexion membre inf en décharge" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Ajout de la dorsiflexion de cheville" firstCase="Actif=Passif" secondCase="Aggravation"/>
                <RowFourCheckbox title={title} text={"Oeuf (rachis en flexion)"}/>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=> navigation.navigate('Extension Multi-Segmentaire')}>
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
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
});


export default FlexionMultiSegmentaire