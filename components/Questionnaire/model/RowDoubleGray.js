import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import React, { useState, useEffect } from 'react'
import { UserContext } from '../../../Context'


function RowDoubleGray({title,text,firstCase,secondCase}){
    const [selected,setSelected]=useState()
    const props = React.useContext(UserContext); 

    const patientId= props.name+props.firstName+props.date

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
        if(selected){
            props.setData(data=>({
                ...data,
                [patientId]:{
                    ...data[patientId],
                    [title]:{...data[patientId][title]
                    ,[text]:firstCase}
                }}))
        }else if(selected===false){
            props.setData(data=>({
                ...data,
                [patientId]:{
                    ...data[patientId],
                    [title]:{...data[patientId][title]
                    ,[text]:secondCase}
                }}))
        }
    }, [selected])
    

    return(
        <View style={styles.container}>
            <View style={styles.firstrow}>
                <Text style={{flex:1.5}}></Text>
                <Text style={{flex:2,alignItems:'center',fontWeight:"bold"}}> {firstCase} </Text>
                <Text style={{flex:2,alignItems:'center',fontWeight:"bold"}}> {secondCase} </Text>
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
    },
    firstrow:{
        flex:1,
        flexDirection:"row",
        textAlign:"center",
        alignItems:"center",
    },
    container:{
        flex:1,
    }
});

export default RowDoubleGray