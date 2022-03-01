import { StyleSheet, View,Pressable,Text,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function RotationMultiSegmentaire({navigation}){
    const [comment,setComment]=useState("")
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const title="Rotation multi-ségmentaire"
    
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
            <RowFourCheckbox title={title} text={"Rotation multi-ségmentaire "}/>
            <RowDoubleGray title={title} text="Décharge" firstCase="Limité" secondCase="Pas limité"/>
            <Text> Membre sup (Rotation rachidienne)</Text>
            <RowFourCheckbox title={title} text={"Ligne GH-GH- Coude"}/>
            <RowDoubleGray title={title} text="Extension/rotation thoracique <50°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray title={title} text="Dwerk" firstCase="" secondCase="Sonnette latérale ou décollement scapulaire"/>
            <Text>Membre inf</Text>
            <RowDoubleGray title={title} text="Rotation interne de hanche" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray title={title} text="Rotation externe de hanche " firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray title={title} text="Rotatation interne fémoro-tibiales" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray title={title} text="Rotation externe fémoro-tibiales" firstCase="Limité" secondCase="Non limité"/>
            <TextInput
                placeholder='Commentaires'
                onChangeText={setComment}
                value={comment}
                style={styles.input}
                />
            <View style={styles.buttonContainer}>
                <Pressable onPress={()=> navigation.navigate('Single Leg Stance')}>
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


export default RotationMultiSegmentaire
