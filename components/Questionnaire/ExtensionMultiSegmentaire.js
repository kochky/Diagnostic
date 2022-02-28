import { StyleSheet,Text, View,Pressable,ScrollView,TextInput } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function ExtensionMultiSegmentaire({navigation}){


    return(
        
        <ScrollView style={styles.view}>
            <RowSuperior/>
            <Text>Membre sup</Text>

            <RowFourCheckbox text={"Extension multi-ségmentaire"}/>
            <RowFourCheckbox text={"Décharge membre sup (sans flexion d'épaule)"}/>

            <RowDoubleGray text="Jésus position" firstCase="Pas de modification de la position des bras à l'allongement des jambes" secondCase="Si bras en contact avec la table à l'allongement des jambes"/>
            <Text>Lumbar Lock modifé (Main sur occiput)</Text>
            <RowFourCheckbox text={"Ligne GH-GH- Coude"}/>
            <RowDoubleGray text="Extension/rotation thoracique <50°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
            <RowDoubleGray text="Dwerk" firstCase="" secondCase="Sonnette latérale ou décollement scapulaire"/>
            <Text>Membre inf</Text>
            <RowFourCheckbox text={"Décharge mb droite ou gauche"}/>
            <RowFourCheckbox text={"FABER"}/>
            <RowFourCheckbox text={"Faber Stabilisé"}/>
            <RowFourCheckbox text={"Thomas"}/>
            <RowDoubleGray text="Hip adduction test" firstCase="Glut med non activé en premier" secondCase=""/>
            <RowDoubleGray text="Hip extension test" firstCase="Glut med non activé en premier" secondCase=""/>



        
            <View style={styles.buttonContainer}>
                <Pressable onPress={()=> navigation.navigate('Rotation Multi-Segmentaire')}>
                    <Icon name="navigate-next"  type="MaterialIcons" color='white'/>
                </Pressable>
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
    }
});


export default ExtensionMultiSegmentaire