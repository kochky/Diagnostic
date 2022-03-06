import { StyleSheet,Text, View,Pressable,ScrollView } from 'react-native';
import React, { useEffect } from 'react'
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext} from "../../Context"
import RowSuperior from './model/RowSuperior';
import RowFourCheckbox from './model/RowFourCheckbox';
import RowDoubleGray from './model/RowDoubleGray';


function ExtensionMultiSegmentaire({navigation}){
    const title="Extension multi-ségmentaire"
    const props = React.useContext(UserContext); 

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
      }
    useEffect(() => {
        storeData(props.data)
    }, [props.data])

    return(
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.view}>
                <Text style={styles.title}>Membre sup</Text>
                <RowSuperior/>

                <RowFourCheckbox title={title} text={"Extension multi-ségmentaire"}/>
                <RowFourCheckbox title={title} text={"Décharge membre sup (sans flexion d'épaule)"}/>
                <RowDoubleGray title={title} text="Jésus position" firstCase="Pas de modification de la position des bras à l'allongement des jambes" secondCase="Si bras en contact avec la table à l'allongement des jambes"/>
                <Text style={styles.title}>Lumbar Lock modifé (Main sur occiput)</Text>
                <RowSuperior/>

                <RowFourCheckbox title={title} text={"Ligne GH-GH- Coude"}/>
                <RowDoubleGray title={title}text="Extension/rotation thoracique <50°" firstCase="Actif=Passif" secondCase="Passif mieux que actif"/>
                <RowDoubleGray title={title} text="Dwerk" firstCase="" secondCase="Sonnette latérale ou décollement scapulaire"/>
                <Text style={styles.title}>Membre inf</Text>
                
                <RowDoubleGray title={title} text={"Décharge mb droite ou gauche"} firstCase="Amélioration" secondCase="Pas d'amélioration"/>
                <RowDoubleGray title={title}text={"FABER"} firstCase="Ht < 20 cm et symétrique non douloureuxen premier" secondCase="Sinon"/>
                <RowDoubleGray title={title}text={"Faber Stabilisé"} firstCase="Normalise" secondCase="Si Limité"/>
                <RowDoubleGray title={title} text={"Thomas"} firstCase="Abduction ou Extension genou" secondCase="Flexum de hanche"/>
                <RowDoubleGray title={title} text="Hip adduction test" firstCase="Glut med non activé en premier" secondCase=""/>
                <RowDoubleGray title={title}text="Hip extension test" firstCase="Glut med non activé en premier" secondCase=""/>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=> navigation.navigate('Rotation Multi-Segmentaire')}>
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
    title:{
        fontWeight:"bold",
        fontSize:16,
        color:"blue",
        marginBottom:10,
        marginTop:20

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
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
});


export default ExtensionMultiSegmentaire