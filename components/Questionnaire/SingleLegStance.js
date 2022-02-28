import { StyleSheet, View,Pressable,Text,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function SingleLegStance({navigation}){

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
            <RowFourCheckbox text={"Single leg stance"}/>
            <RowFourCheckbox text={"Yeux fermés"}/>
            <Text>Vestibule cervicale</Text>
            <RowDoubleGray text="Romberg sur sol mou" firstCase="Perte d'équilibre mineur ou pas de perte d'équilibre" secondCase="Perte d'équilibre majeur"/>
            <RowDoubleGray text="Perte d'équilibre" firstCase="Limité" secondCase=""/>
            <Text>Hanche / ceinture pelvienne / rachis</Text>
            <RowDoubleGray text="Chevalier servant" firstCase="Garde l'équilibre" secondCase="Garde l'équilibre"/>
            <RowDoubleGray text="Bird dog" firstCase="Garde l'équilibre" secondCase="Garde l'équilibre"/>
            <RowDoubleGray text="Hip adduction test" firstCase="Glut med non activé en premier" secondCase=""/>
            <RowDoubleGray text="Hip extention test" firstCase="Glut med non activé en premier" secondCase=""/>
            <RowDoubleGray text="Rolling patterns" firstCase="Difficulté" secondCase=""/>
            <Text>Cheville </Text>
            <RowFourCheckbox text={"Marche talon pointe"}/>
            <RowDoubleGray text="Dorsiflexion" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray text="Inversion" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray text="Eversion " firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <TextInput
                placeholder='Commentaires'
                onChangeText={setComment}
                value={comment}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <Pressable onPress={()=> navigation.navigate('Overhead Deep Squat')}>
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


export default  SingleLegStance
