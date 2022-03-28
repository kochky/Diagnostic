import { StyleSheet, Text, View,ScrollView,TextInput,Button,Image,Modal } from 'react-native';
import React,{ useEffect, useState } from 'react';
import { UserContext } from '../Context'
import commentaireGrisArray from './ressources/commentaireGrisArray';

function Diagnostic ({navigation}){
  
  const [error,setError]=useState()
  const [visible,setVisible]=useState(false)

  const props = React.useContext(UserContext); 
  const date= new Date()
  const diagnostic= new Object()
  commentaireGrisArray.map(groupe=>diagnostic[Object.keys(groupe)]={})

  useEffect(() => {
    const listener= navigation.addListener(
            'focus', () => {
                setError()
            }
        );
    return listener
    }, [])
  
  function validate(){
    setError(false)
    Object.keys(props.data).map(data=>data===props.name+props.firstName+props.date && setError(true,setVisible(true)))
  
  }
  
  function continuer(){
    setError(false)
  }

  function modify(){
    navigation.navigate('Section')
    setVisible(false)

  }
  useEffect(() => {
   if(error===false){
      props.setData(data=>({...data,[props.name+props.firstName+props.date]:{date:props.date,name:props.name,firstName:props.firstName,phone:props.phone,email:props.email,structure:props.structure,activity:props.activity,diagnostic:diagnostic}}))      
      navigation.navigate('Section')
      setVisible(false)
   }
  }, [error])
  
   
  useEffect(() => {
    if(props.newPatient){
      props.setDate(('0'+date.getDate()).slice(-2)+"/"+('0'+(date.getMonth()+1)).slice(-2)+"/"+date.getFullYear())
      props.setName("")
      props.setFirstname("")
      props.setPhone("")
      props.setEmail("")
      props.setStructure("")
      props.setActivity("")
    }
  
  }, [])

  return(
    <View style={{flex:1}}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.containerIcon}>
                <Image  style={styles.icon} source={require('../ressources/patient.png')}/>
            </View>
            <Text style={{flex:1,color:"white",fontSize:20,marginBottom:30}}>Saisissez les infos du patient</Text>
            <TextInput
                    value={props.date}
                    style={styles.input}
                    onChangeText={props.setDate}
                    placeholder='Date'
                    placeholderTextColor="white" 
                />
            <TextInput
                    value={props.name}
                    style={styles.input}
                    onChangeText={props.setName}
                    placeholder='Nom '
                    placeholderTextColor="white" 
              />
              <TextInput
                  value={props.firstName}
                  style={styles.input}
                  onChangeText={props.setFirstname}
                  placeholder='Prénom '
                  placeholderTextColor="white" 
              />
              <TextInput
                  value={props.phone}
                  style={styles.input}
                  onChangeText={props.setPhone}
                  placeholder='Téléphone'
                  placeholderTextColor="white" 
                  keyboardType="numeric"

              />
              <TextInput
                  value={props.email}
                  style={styles.input}
                  onChangeText={props.setEmail}
                  placeholder='Email'
                  placeholderTextColor="white" 
              />
              <TextInput
                  value={props.structure}
                  style={styles.input}
                  onChangeText={props.setStructure}
                  placeholder='Structure'
                  placeholderTextColor="white" 
              />
              <TextInput
                  value={props.activity}
                  style={styles.input}
                  onChangeText={props.setActivity}
                  placeholder='Activité sportive'
                  placeholderTextColor="white" 
              />
            <View style={{flex:1,marginBottom:40}}>{((props.name !==undefined && props.name!='') &&(props.firstName !==undefined && props.firstName!='')&&(props.phone !==undefined && props.phone!='')&&(props.email !==undefined && props.email!='')&&(props.structure !==undefined && props.structure!='')&&(props.activity !==undefined && props.activity!='')&&(props.date !==undefined && props.date!=''))  && <Button style={{flex:2}} title="Valider"  onPress={() =>validate()} ></Button>}</View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={visible}>
                  <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                          <Text style={styles.text}>Une archive avec ce nom et cette date existe déjà, si vous continuez elle sera écrasée.Poursuivre permet de modifier une archive.</Text>
                          <View style={styles.buttonContainer}>
                            <Button  color="#A7001E" onPress={()=>setVisible(false)} title="Retour"></Button>
                            <Button   onPress={()=>modify()} title="Poursuivre"></Button>
                            <Button  color="#18534F"  onPress={()=>continuer()} title="Continuer"></Button>
                          </View>
                      </View>
                  </View>
              </Modal>
        </ScrollView>
</View>
    )    
}

const styles = StyleSheet.create({
    text:{
      fontSize:16,
      fontWeight:"bold"
    },
    icon:{
        height:75,
        width:75,
    },
    containerIcon:{
        flex:5,
        marginBottom:50 
    },
    container: {
        backgroundColor:"rgba(24,83,79,1)",
        paddingTop:"1%",
        width:"100%",
      },
    contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"rgba(24,83,79,1)",
      paddingTop:"1%",
      width:"100%",
    },
    input: {
        marginBottom: 30,
        borderWidth: 1,
        borderColor:"white",
        textAlign:'center',
        color:'#E2E9C0',
        width:"80%",
        fontSize:20,
        height:30,
        borderRadius:15,
        //flex:1,
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:"90%"
    },
    buttonContainer:{
        flexDirection:"row",
        marginTop:40,
        justifyContent:'space-around',
        width:"100%",
    }
  });

export default Diagnostic