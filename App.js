import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './Context'


import Menu from './components/Menu';
import Diagnostic from './components/Diagnostic';
import Archives from './components/Archives';
import Resultat from './components/Resultat';
import Fms from './components/Fms';
import FlexionCervicale from './components/Questionnaire/FlexionCervicale';
import ExtensionCervicale from './components/Questionnaire/ExtensionCervicale';
import RotationCervicale from './components/Questionnaire/RotationCervicale';
import AppleySuperieur from './components/Questionnaire/AppleySuperieur';
import AppleyInferieur from './components/Questionnaire/AppleyInferieur';
import FlexionMultiSegmentaire from './components/Questionnaire/FlexionMultiSegmentaire';
import ExtensionMultiSegmentaire from './components/Questionnaire/ExtensionMultiSegmentaire';
import RotationMultiSegmentaire from './components/Questionnaire/RotationMultiSegmentaire';
import SingleLegStance from './components/Questionnaire/SingleLegStance';
import OverheadDeepSquat from './components/Questionnaire/OverheadDeepSquat';
import DeepSquat from './components/Questionnaire/DeepSquat';

const Stack = createNativeStackNavigator();



export default function App() {

  const [data,setData]=useState({})
  const [date,setDate]=useState()
  const [name,setName]=useState()
  const [firstName,setFirstname]=useState()
  const [phone,setPhone]=useState()
  const [email,setEmail]=useState()
  const [structure,setStructure]=useState()
  const [activity,setActivity]=useState()

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      jsonValue != null && setData(JSON.parse(jsonValue))

    } catch(e) {
      // error reading value
    }    
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <UserContext.Provider value={{data:data,setData:setData,name:name,setName:setName,firstName:firstName,setFirstname:setFirstname,email:email,setEmail:setEmail,date:date,setDate:setDate,structure:structure,setStructure:setStructure,phone:phone,setPhone:setPhone,activity:activity,setActivity:setActivity}} >
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Nouveau diagnostique" component={Diagnostic} /> 
        <Stack.Screen name="Flexion Cervicale" component={FlexionCervicale} />
        <Stack.Screen name="Extension Cervicale" component={ExtensionCervicale} />
        <Stack.Screen name="Rotation Cervicale" component={RotationCervicale} />
        <Stack.Screen name="Appley Superieur" component={AppleySuperieur} />
        <Stack.Screen name="Appley Inferieur" component={AppleyInferieur} />
        <Stack.Screen name="Flexion Multi-Segmentaire" component={FlexionMultiSegmentaire} />
        <Stack.Screen name="Extension Multi-Segmentaire" component={ExtensionMultiSegmentaire} />
        <Stack.Screen name="Rotation Multi-Segmentaire" component={RotationMultiSegmentaire} />
        <Stack.Screen name="Single Leg Stance" component={SingleLegStance} />
        <Stack.Screen name="Overhead Deep Squat" component={OverheadDeepSquat} />
        <Stack.Screen name="Deep Squat" component={DeepSquat} />

        <Stack.Screen name="FMS" component={Fms} />
        <Stack.Screen name="Resultat" component={Resultat} />
        <Stack.Screen name="Archives" component={Archives} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
