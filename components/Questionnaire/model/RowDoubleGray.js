import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import React, { useState, useEffect } from 'react'
import { UserContext } from '../../../Context'
import commentaireGrisArray from '../../ressources/commentaireGrisArray';


function RowDoubleGray({title,text,firstCase,secondCase}){
    const props = React.useContext(UserContext); 
    const [isLoaded,setIsLoaded]=useState(false)
    const patientId= props.name+props.firstName+props.date
    const [selected,setSelected]=useState()
    const [comment,setComment]=useState()
    

    function isSelected(){
        if(selected!=undefined){
            return selected
        }else {
            return false
        }
    }

    function isNotSelected(){
        if(selected!=undefined){
            return !selected
        }else {
            return false
        }
    }

    useEffect(() => {
        if(isLoaded===false){
            if(typeof(props.data[patientId][title]) != "undefined"){
                if(props.data[patientId][title][text]===firstCase){
                    setSelected(true)
                }else if (props.data[patientId][title][text]===secondCase){
                    setSelected(false)
                }
            }
            if (typeof props.data[patientId]["diagnostic"][title]!="undefined"){
                setComment(props.data[patientId]["diagnostic"][title][text])
            }
        }
        setIsLoaded(true)
        
        if(isLoaded){
            if(selected){
                props.setData(data=>({
                    ...data,
                    [patientId]:{
                        ...data[patientId],
                        [title]:{...data[patientId][title]
                        ,[text]:firstCase}
                    }}))

            commentaireGrisArray.map((categorie)=>{if (Object.keys(categorie).toString()===title.toString()){
                Object.values(categorie).map((commentaire)=>{
                    Object.keys(commentaire).map(clef=>{if (clef.toString()===text.toString()){
                        setComment(commentaire[text][0])
                        props.setData(data=>({...data,
                            [patientId]:{...data[patientId],
                                ["diagnostic"]:{...data[patientId]["diagnostic"],
                                [title]:{...data[patientId]["diagnostic"][title],
                                [text]:commentaire[text][0]
                        }}}}))
                }})})
            }})

            }else if(selected===false){
                props.setData(data=>({
                    ...data,
                    [patientId]:{
                        ...data[patientId],
                        [title]:{...data[patientId][title]
                            ,[text]:secondCase}
                        }}))
                commentaireGrisArray.map((categorie)=>{if (Object.keys(categorie).toString()===title.toString()){
                    Object.values(categorie).map((commentaire)=>{
                        Object.keys(commentaire).map(clef=>{if (clef.toString()===text.toString()){
                            setComment(commentaire[text][1])
                            props.setData(data=>({...data,
                                [patientId]:{...data[patientId],
                                    ["diagnostic"]:{...data[patientId]["diagnostic"],
                                    [title]:{...data[patientId]["diagnostic"][title],
                                    [text]:commentaire[text][1]
                            }}}}))
                    }})})
                }})

            }
        }
    }, [selected])
    

    return(
        <View style={styles.container}>
            <View style={styles.firstrow}>
                <Text style={{flex:1.5}}></Text>
                <Text style={{flex:2,alignItems:'center',fontWeight:"bold",fontSize:12}}> {firstCase} </Text>
                <Text style={{flex:2,alignItems:'center',fontWeight:"bold",fontSize:12}}> {secondCase} </Text>
            </View>

            <View style={styles.row}>
                <Text style={{flex:1.5,textAlign:"left"}}>{text}</Text>
                
                <View   style={{flex:2,alignItems:'center'}}>
                    <CheckBox 
                        checked={isSelected()}
                        onPress={() => setSelected(!selected)}                    />
                </View>
               
                <View   style={{flex:2,alignItems:'center'}}>
                {secondCase.length>0 && <CheckBox 
                        checked={isNotSelected()}
                        onPress={() => setSelected(!selected)} 
                />}
                </View>
            </View>
            <View style={{height:50,marginTop:20}}>
                <Text style={styles.text} >{comment}</Text>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:"row",
        textAlign:"center",
        alignItems:"center",
        borderTopWidth:1,
        borderTopColor:"#rgba(24,83,79,1)",
        height:50,
        paddingTop:10,
        fontSize:12
    },
    firstrow:{
        flex:1,
        flexDirection:"row",
        textAlign:"center",
        alignItems:"center",
        height:50,
        paddingBottom:10

    },
    container:{
        flex:1,
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
});

export default RowDoubleGray