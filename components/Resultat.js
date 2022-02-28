import { StyleSheet, Text, View,ImageBackground,TextInput,Button } from 'react-native';
import React,{ useEffect } from 'react';
import { UserContext } from '../Context'
import { data } from 'browserslist';


function Resultat({navigation}){
    const props = React.useContext(UserContext); 
    const name=props.name

  
    



    return (
        <Text>cool</Text>
    )
}

export default Resultat