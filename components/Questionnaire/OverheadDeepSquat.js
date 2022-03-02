import { StyleSheet, View,Pressable,Text,TextInput,ScrollView } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function OverheadDeepSquat({navigation}){

    const [commentaire,setCommentaire]=useState("")
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const title="Overhead deep squat"

    useEffect(() => {
     props.setData(data=>({
                ...data,
                [patientId]:{
                    ...data[patientId]
                    ,["Commentaire Rotation cervicale"]:commentaire
                }}))
    }, [commentaire])
    
    return(
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.view}>
                <RowSuperior/>
                <RowFourCheckbox title={title} text={"Overhead deep squat"}/>
                <RowDoubleGray title={title} text="Stabilisé" firstCase="Mieux" secondCase="Pas mieux"/>
                <Text>Upper Body /  Tronc</Text>
                <RowFourCheckbox title={title} text={"Ligne GH-GH- Coude"}/>
                <RowDoubleGray title={title} text="Lumbar lock" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Dwerk" firstCase="" secondCase="Sonnette latérale ou décollement scapulaire"/>
                <RowDoubleGray title={title}text="Sphynx (30°)" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <Text>Lower Body </Text>
                <RowDoubleGray title={title}text="Chevalier servant " firstCase="Limité" secondCase="Pas stable"/>
                <RowDoubleGray title={title} text="Genou - poitrine " firstCase="Limité" secondCase="Pas limité"/>
                <RowDoubleGray title={title} text="Genou - poitrine avec les mains sous les genoux" firstCase="Limité" secondCase="Pas limité"/>
                <RowDoubleGray title={title} text="Hip adduction test" firstCase="Glut med activé deuxieme" secondCase=""/>
                <RowDoubleGray title={title} text="Pied plat fonctionnel" firstCase="Affaissement de la voute plantaire" secondCase=""/>
                <RowDoubleGray title={title} text="Assisté" firstCase="Mieux" secondCase="Pas mieux"/>
                <TextInput
                    placeholder='Commentaires'
                    onChangeText={setCommentaire}
                    value={commentaire}
                    style={styles.input}
                    />
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=> navigation.navigate('Deep Squat')}>
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
    },input:{
        color:"#rgba(24,83,79,1)"
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
 
});


export default OverheadDeepSquat