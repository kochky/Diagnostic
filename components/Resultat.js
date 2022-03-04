import { StyleSheet, Text, View,ImageBackground,TextInput,Button,ScrollView,Image } from 'react-native';
import React,{ useEffect } from 'react';
import { UserContext } from '../Context'
import image from '../ressources/téléchargement.png'
import face from "../ressources/face.png"
import dos from "../ressources/dos.png"


function Resultat({navigation}){
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    
    
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>

            {/* <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flex:3}}>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Date : </Text><Text style={styles.info}>{props.data[patientId]["date"]}</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Nom : </Text><Text style={styles.info}>{props.data[patientId]["name"]}</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Prénom : </Text><Text style={styles.info}>{props.data[patientId]["firstName"]}</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Téléphone : </Text><Text style={styles.info}>{props.data[patientId]["phone"]}</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Mail : </Text><Text style={styles.info}>{props.data[patientId]["email"]}</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Structure : </Text><Text style={styles.info}>{props.data[patientId]["structure"]}</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Activité sportive : </Text><Text style={styles.info}>{props.data[patientId]["activity"]}</Text></View>
                    </View>
                    <View style={{flex:2,justifyContent:"center"}}>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Thérapeute 1:</Text><Text style={styles.info}>Pierre Mounier 06 48 27 36 41</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={styles.title}>Thérapeute 2:</Text><Text style={styles.info}>Pierre Morey 06 66 59 42 39</Text></View>
                    </View>
                    <View style={{flex:1}}>
                        <ImageBackground  source={image} resizeMode="contain" style={styles.image}/>
                    </View>
                </View>

                <View  style={styles.firstSection}>
                    <View style={styles.firstArticle}>
                        <View style={styles.titleContainer}><Text style={styles.title}>Diagnostics:</Text></View>
                        <View style={styles.commentsContainer}>
                        {Object.values(props.data[patientId]["diagnostic"]).map((diag,i)=>Object.values(diag).map(text=><Text key={i}>{text}</Text>))}

                        </View>
                    </View>

                    <View style={styles.secondArticle}>
                        <View style={styles.firstPart}>
                            <View style={{flexDirection:"row",height:30}}><View style={styles.violet}></View><Text style={styles.info}>Problème de stabilité ou de contrôle moteur (SMCD)</Text></View>
                            <View style={{flexDirection:"row",height:30}}><View style={styles.bleu}></View><Text style={styles.info}>Joint Mobility dysfonciton (JMD) </Text></View>
                            <View style={{flexDirection:"row",height:30}}><View style={styles.bleu}></View><Text style={styles.info}>Tissue extensibilty dysfonction (TED)</Text></View>
                        </View>
                        <View style={{height:20}}></View>
                        <View style={styles.secondPart}>
                            <View style={styles.paragraphe}><Text>Définitions :</Text></View>
                            <View style={styles.paragraphe}><Text>SMCD (Violet) : Problème de contrôle moteur ayant pour solution les exercices de renforcements/contôle moteur</Text></View>
                            <View style={styles.paragraphe}><Text>JMD (Bleu) : Problème de mobilité articulaire ayant pour solution les étirement articulaires, les mobilisations ou les manipulations</Text></View>
                            <View style={styles.paragraphe}><Text>TED (Bleu) : Problème de tension musculaire ayant pour solution les étirement musculaires ou la détente musculaire</Text></View>
                            <View style={styles.paragraphe}><Text>Pour tout renseignement complémentaire et demande de rendez vous, nous contacter au:</Text></View>
                        </View>
                    </View>
                </View>

                <View style={styles.secondSection}>
                    <View style={{flex:1}}><ImageBackground  resizeMode="contain" style={styles.corps} source={face}/></View>
                    <View style={{flex:1}}><ImageBackground resizeMode="contain" style={styles.corps} source={dos}/></View>
                </View>
                <View style={styles.footer}>
                    <Text>Fiche récaputilative propriété de l'Institut Franco Européen de Chiropraxie, tous droit réservés, ne peut être utilisé par un autre professionnel de la santé</Text>
                </View>
            </View> */}



            
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
       // width:"100%",
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
        fontSize:12,
        textAlign:"center",
        lineHeight:30
    },
    titleContainer:{
        width:"100%",
        height:30,
        borderWidth:1
    },
    firstArticle:{
        flex:1
    },
    commentsContainer:{
        borderWidth:1,
        borderColor:"black",
        flexGrow:1,
        padding:10

    },
    secondArticle:{
        flex:1
    },
    info:{
        textAlign:"center",
        lineHeight:30,
        marginLeft:10,
    },
    image:{
        flex: 1,
        justifyContent: "center"
    },
    header:{
        flexDirection:'row',
        width:"100%",
        padding:15,
        borderWidth:2,
        borderColor:"black",
        //flex:1,
        marginBottom:20,
    },
    firstSection:{
        flexDirection:"row",
        flex:2,
    },
    firstArticle:{
        marginRight:20,
        flex:1,
        flexGrow:1,

    },
    secondArticle:{
        flex:1,        
        flexGrow:1,
    },
    secondSection:{
        flexDirection:"row",
        flex:2,
        //flexGrow:1,
        height:600,
    },
    firstPart:{
        borderWidth:1,
        borderColor:"black",
    },
    secondPart:{
        borderWidth:1,
        borderColor:"black",
        flexGrow:1,
        padding:10
    },
    footer:{
        borderWidth:2,
        borderColor:"black",
        height:30,
        alignItems:"center",
        justifyContent:"center"
    },
    violet:{
        backgroundColor:"#a64d79",
        width:30,
        borderWidth:1,
        borderColor:"black"    },
    bleu:{
        backgroundColor:"#1155cc",
        width:30,
        borderWidth:0.5,
        borderColor:"black"
    },
    paragraphe:{
        marginBottom:30
    },
    corps:{
        justifyContent: "center",
        flex:1
    }
})

export default Resultat