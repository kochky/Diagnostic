import { StyleSheet, View,Pressable,Text,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function OverheadDeepSquat({navigation}){

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
            <RowFourCheckbox text={"Overhead deep squat"}/>
            <RowDoubleGray text="Stabilisé" firstCase="Mieux" secondCase="Pas mieux"/>
            <Text>Upper Body /  Tronc</Text>
            <RowFourCheckbox text={"Ligne GH-GH- Coude"}/>
            <RowDoubleGray text="Lumbar lock" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray text="Dwerk" firstCase="" secondCase="Sonnette latérale ou décollement scapulaire"/>
            <RowDoubleGray text="Sphynx (30°)" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <Text>Lower Body </Text>
            <RowDoubleGray text="Chevalier servant " firstCase="Limité" secondCase="Pas stable"/>
            <RowDoubleGray text="Genou - poitrine " firstCase="Limité" secondCase="Pas limité"/>
            <RowDoubleGray text="Genou - poitrine avec les mains sous les genoux" firstCase="Limité" secondCase="Pas limité"/>
            <RowDoubleGray text="Hip adduction test" firstCase="Glut med activé deuxieme" secondCase=""/>
            <RowDoubleGray text="Pied plat fonctionnel" firstCase="Affaissement de la voute plantaire" secondCase=""/>
            <RowDoubleGray text="Stabilisé" firstCase="Mieux" secondCase="Pas mieux"/>
            <TextInput
                placeholder='Commentaires'
                onChangeText={setComment}
                value={comment}
                style={styles.input}
                />
            <View style={styles.buttonContainer}>
                <Pressable onPress={()=> navigation.navigate('Deep Squat')}>
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
    },input:{
        color:"#rgba(24,83,79,1)"
    }
 
});


export default OverheadDeepSquat