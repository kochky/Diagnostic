import React, { useEffect } from 'react';
import { StyleSheet, View,Pressable,ImageBackground,Text} from 'react-native';
import image from '../ressources/kira-auf-der-heide-_Zd6COnH5E8-unsplash.jpg'
import { UserContext } from '../Context'


function Menu ({navigation}){
    const props = React.useContext(UserContext); 

    useEffect(() => {
        props.setNewPatient(true)
    }, [])
    
    useEffect(() => {
        const listener= navigation.addListener(
                'focus', () => {
                    props.setNewPatient(true)
                }
            );
        return listener
    }, [])
      
    return (
        <View style={styles.container}>
            <ImageBackground  source={image} style={styles.image}>    
                <View style={{flex:2}} ></View>
                <View style={{flex:1,justifyContent:"space-around"}}>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => navigation.navigate('Nouveau diagnostique')}>
                            <Text style={{color:"white",textAlign:"center",height:50,lineHeight:50,fontSize:20}}>NOUVEAU DIAGNOSTIQUE</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable  onPress={() => navigation.navigate('Archives')}>
                            <Text style={{color:"white",textAlign:"center",height:50,lineHeight:50,fontSize:20}}>ARCHIVES</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
      );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width:"100%",
        height:"100%",
      },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer:{
        backgroundColor:"rgba(24,83,79,1)",
        height:50,
        

    }
  });

export default Menu