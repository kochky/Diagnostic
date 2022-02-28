import { StyleSheet, View,Pressable,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function AppleySuperieur({navigation}){

    const [comment,setComment]=useState("")
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date

    
    useEffect(() => {
        props.setData(data=>({
                   ...data,
                   [patientId]:{
                       ...data[patientId]
                       ,["Commentaire Rotation cervicale"]:comment
                   }}))
       }, [comment])
    
       return(
        
        <View style={styles.view}>
            <RowSuperior/>
            <RowFourCheckbox text={"Appley Superieur"}/>
            <RowFourCheckbox text={"Appley Sup en décharge"}/>
            <RowDoubleGray text="Rotation externe GH <90°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray text="Flexion/Abduction (craw) décollage du buste" firstCase="Limité" secondCase="Non limité"/>
            <RowDoubleGray text="Extension/rotation thoracique <50°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray text="Flexion du coude" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>

            <TextInput
                placeholder='Commentaires'
                onChangeText={setComment}
                value={comment}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <Pressable onPress={()=> navigation.navigate('Appley Inferieur')}>
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
    input:{
        color:"#rgba(24,83,79,1)"
    }
});


export default AppleySuperieur