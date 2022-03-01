import { StyleSheet,Text, View } from 'react-native';
import React, { useState, useEffect} from 'react'
import { UserContext } from '../../../Context'


function DiagnosticGrey({title,text,commentaire,condition}){

    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const [isLoaded,setIsLoaded]=useState(false)

    useEffect(() => {
        if(props.data[patientId][title]){
            setIsLoaded(true)
        }
    }, [props.data[patientId][title]])
    

    if (isLoaded && props.data[patientId][title][text]===condition) {
        return(
           
            <View style={styles.view}>
                <Text style={styles.text}>{commentaire}</Text>
            </View>

        )
    }else {return null}
}

const styles=StyleSheet.create({

    view:{
        flex:1
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
        marginTop:30,
    }



})

export default DiagnosticGrey