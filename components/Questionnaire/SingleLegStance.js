import { StyleSheet, View,Pressable,Text,TextInput,ScrollView } from 'react-native';
import React, { useState, useEffect} from 'react'
import { Icon } from 'react-native-elements';
import { UserContext } from '../../Context'

import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function SingleLegStance({navigation}){

    const [commentaire,setCommentaire]=useState("")
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const title="Single leg stance"
    const [isLoaded,setIsLoaded]=useState(false)


    useEffect(() => {

        if(!isLoaded){
            setIsLoaded(true)
    
            if(typeof(props.data[patientId][title]) == "object"){
                if(typeof props.data[patientId][title]["commentaire"] =="string"){
                    setCommentaire(props.data[patientId][title]["commentaire"])
                }
            }
        
        }else {
        
         props.setData(data=>({
                    ...data,
                    [patientId]:{
                        ...data[patientId]
                        ,[title]:{...data[patientId][title],
                        ["commentaire"]:commentaire}
                    }}))
            }
        }, [commentaire])
        

    return(   
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.view}>
                <RowSuperior/>
                <RowFourCheckbox title={title} text={"Single leg stance"}/>
                <RowFourCheckbox title={title} text={"Yeux fermés"}/>
                <Text>Vestibule cervicale</Text>
                <RowDoubleGray title={title} text="Romberg sur sol mou" firstCase="Perte d'équilibre mineur ou pas de perte d'équilibre" secondCase="Perte d'équilibre majeur"/>
                <RowDoubleGray title={title} text="Perte d'équilibre" firstCase="Limité" secondCase=""/>
                <Text>Hanche / ceinture pelvienne / rachis</Text>
                <RowDoubleGray title={title}  text="Chevalier servant" firstCase="Garde l'équilibre" secondCase="Garde l'équilibre"/>
                <RowDoubleGray title={title} text="Bird dog" firstCase="Garde l'équilibre" secondCase="Garde l'équilibre"/>
                <RowDoubleGray title={title} text="Hip adduction test" firstCase="Glut med non activé en premier" secondCase=""/>
                <RowDoubleGray  title={title}text="Hip extention test" firstCase="Glut med non activé en premier" secondCase=""/>
                <RowDoubleGray title={title} text="Rolling patterns" firstCase="Difficulté" secondCase=""/>
                <Text>Cheville </Text>
                <RowFourCheckbox title={title} text={"Marche talon pointe"}/>
                <RowDoubleGray title={title} text="Dorsiflexion" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Inversion" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Eversion " firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <TextInput
                    placeholder='Ajoutez des commentaires'
                    onChangeText={setCommentaire}
                    value={commentaire}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=> navigation.navigate('Overhead Deep Squat')}>
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
    input:{
        color:"#rgba(24,83,79,1)"
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
});


export default  SingleLegStance
