import { StyleSheet, View,Pressable } from 'react-native';
import React from 'react'
import { Icon } from 'react-native-elements';

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function DeepSquat({navigation}){
    const title="Deep squat"

  
      
    return(
        
        <View style={styles.view}>
            <RowSuperior/>
            <RowFourCheckbox title={title} text={"Deep squat"}/>
            <RowDoubleGray title={title} text="Assisté" firstCase="Ne change rien" secondCase="Mieux"/>
            <View style={styles.buttonContainer}>
                <Pressable onPress={()=> navigation.navigate('FMS')}>
                    <Icon name="navigate-next"  type="MaterialIcons" color='white'/>
                </Pressable>
            </View>

        </View>       

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


export default DeepSquat