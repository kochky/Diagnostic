import { StyleSheet, View,Pressable,ScrollView } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import Diagnostic from './model/Diagnostic';
import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';
import DiagnosticGrey from './model/DiagnosticGrey';


function FlexionCervicale({navigation}){
    const title="Flexion cervicale"



    

    return(
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.view}>
                <RowSuperior/>
                <RowFourCheckbox title={title} text={"Flexion cervicale"}/>
                <RowFourCheckbox title={title} text={"Flexion active supine"}/>
                <RowDoubleGray title={title} text="Flexion passive supine" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Isolation C0-C1" firstCase="Limité" secondCase="Non limité"/>
                
                <View style={{flex:1}}>
                    <Diagnostic title={title} text={"Flexion active supine"} commentaire="SMCD Flexion cervicale et muscles posturaux du cou" />
                    <DiagnosticGrey  title={title} text={"Flexion passive supine"} condition="Actif=Passif" commentaire="Test d'isolation C0-C1" />
                    <DiagnosticGrey  title={title} text={"Isolation C0-C1"} condition="Passif mieux que actif" commentaire="SMCD muscles fléchisseurs profonds du cou" />
                </View>
                

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
    }
});


export default FlexionCervicale