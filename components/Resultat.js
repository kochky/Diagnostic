import React, {useState, useEffect } from 'react';
import { View, StyleSheet, Button, Platform, Text, Image } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { UserContext } from '../Context'
import { useIsFocused } from '@react-navigation/native';


export default function Resultat({navigation}) {
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date


    const [coude,setCoude]=useState("")
    const [cou,setCou]=useState("")
    const [epauleHaut,setEpauleHaut]=useState("")
    const [epauleBas,setEpauleBas]=useState("")
    const [ventreHaut,setVentreHaut]=useState('')
    const [ventreHaut2,setVentreHaut2]=useState('')
    const [ventreHautCote,setVentreHautCote]=useState('')
    const [ventreHautCentre,setVentreHautCentre]=useState('')
    const [ventreBasCentre,setVentreBasCentre]=useState('')
    const [ventreBasCentreCote,setVentreBasCentreCote]=useState('')
    const [jambeHaut1,setJambeHaut1]=useState('')
    const [jambeHaut2,setJambeHaut2]=useState('')
    const [jambeCentre1,setJambeCentre1]=useState('')
    const [jambeCentre2,setJambeCentre2]=useState('')
    const [jambeCentre3,setJambeCentre3]=useState('')
    const [jambeCentre4,setJambeCentre4]=useState('')
    const [jambeCentre5,setJambeCentre5]=useState('')
    const [jambeBas,setJambeBas]=useState('')
    const [pied,setPied]=useState('')
    const [dosNuqueHaut,setDosNuqueHaut]=useState('')
    const [dosNuqueHautMilieu,setDosNuqueHautMilieu]=useState('')
    const [dosNuqueHautCote,setDosNuqueHautCote]=useState('')
    const [dosNuqueBas,setDosNuqueBas]=useState('')
    const [colonneCentre,setColonneCentre]=useState('')
    const [colonneGauche,setColonneGauche]=useState('')
    const [colonneGaucheBas,setColonneGaucheBas]=useState('')
    const [colonneGaucheBas1,setColonneGaucheBas1]=useState('')
    const [colonneGaucheBas2,setColonneGaucheBas2]=useState('')
    const [colonneGaucheToutBas,setColonneGaucheToutBas]=useState('')
    const [fesse1,setFesse1]=useState("")
    const [fesse2,setFesse2]=useState("")
    const [mollet,setMollet]=useState("")
    const [dosGauche1,setDosGauche1]=useState("")
    const [dosGauche2,setDosGauche2]=useState("")
    const [dosGauche3,setDosGauche3]=useState("")
    const [dosGauche4,setDosGauche4]=useState("")
    
    const isFocused = useIsFocused();
    
    const commentArray=[]
    {Object.values(props.data[patientId]["diagnostic"]).map((diag,i)=>Object.values(diag).map(p=>p!=''&&commentArray.push(p)))}
    useEffect(() => {
        if(isFocused){

        setCoude('')
        setCou('')
        setEpauleHaut('')
        setEpauleBas('')
        setVentreHaut('')
        setVentreHaut2('')
        setVentreHautCote('')
        setVentreHautCentre('')
        setVentreBasCentre('')
        setVentreBasCentreCote('')
        setJambeHaut1('')
        setJambeHaut2('')
        setJambeCentre1('')
        setJambeCentre2('')
        setJambeCentre3('')
        setJambeCentre4('')
        setJambeCentre5('')
        setJambeBas('')
        setPied('')
        setDosNuqueHaut('')
        setDosNuqueHautMilieu('')
        setDosNuqueHautCote('')
        setDosNuqueBas('')
        setColonneCentre('')
        setColonneGauche('')
        setColonneGaucheBas('')
        setColonneGaucheBas1('')
        setColonneGaucheBas2('')
        setColonneGaucheToutBas('')
        setFesse1('')
        setFesse2('')
        setMollet('')
        setDosGauche1('')
        setDosGauche2('')
        setDosGauche3('')
        setDosGauche4('')

        commentArray.includes("SMCD Flexion cervicale et muscles posturaux du cou") && setCou("backgroundPurple")
        commentArray.includes("SMCD muscles fl??chisseurs profonds du cou") && setCou("backgroundPurple")

        commentArray.includes("JMD/TED Flexion/adbuction gl??no-hum??rale" ) && setEpauleHaut("backgroundBlue")
        commentArray.includes( "JMD/TED Extension gl??no-hum??rale") && setEpauleHaut("backgroundBlue")

        commentArray.includes("SMCD Flexion/abduction Gl??no-hum??rale") && setEpauleHaut("backgroundPurple")
        commentArray.includes("SMCD Flexion/abduction Gl??no-hum??rale") && setEpauleHaut("backgroundPurple")

        commentArray.includes("JMD/TED Extension gl??no-hum??rale") && setEpauleBas("backgroundBlue")

        commentArray.includes("SMCD muscles de la flexion rachidienne") && setVentreHaut("backgroundPurple")
        commentArray.includes("SMCD Core" ) && setVentreHaut("backgroundPurple")

        commentArray.includes(("SMCD muscles de la flexion rachidienne")) && setVentreHautCentre("backgroundPurple")
        commentArray.includes(("SMCD muscles de la flexion rachidienne")) && setVentreHaut2("backgroundPurple")

        commentArray.includes("SMCD core chaine ouverte" ) && setVentreHautCote("backgroundPurple")
        commentArray.includes('SMCD muscles de la flexion rachidienne' ) && setVentreHautCote("backgroundPurple")

        commentArray.includes(("SMCD des muscles posturaux membre inf et ceinture pelvienne" )) &&  setVentreBasCentre("backgroundPurple")
        commentArray.includes(("SMCD des muscles posturaux membre inf et ceinture pelvienne" )) && setVentreHautCentre("backgroundPurple")

        commentArray.includes("JMD ou TED flexion de hanche") &&  setVentreBasCentreCote("backgroundBlue")
        commentArray.includes('JMD ou TED rotation externe de la CF' ) &&  setVentreBasCentreCote("backgroundBlue")
        commentArray.includes('JMD ou TED rotation interne de la CF' ) &&  setVentreBasCentreCote("backgroundBlue")

        commentArray.includes("SMCD des muscles posturaux membre inf et ceinture pelvienne") &&  setVentreBasCentreCote("backgroundPurple")
        commentArray.includes('SMCD des muscles rotateurs internes de hanche' ) &&  setVentreBasCentreCote("backgroundPurple")
        commentArray.includes('SMCD des muscles rotateurs externes de hanche' ) &&  setVentreBasCentreCote("backgroundPurple")

        commentArray.includes("JMD ou TED flexion de hanche",) && setJambeHaut1("backgroundBlue")
        commentArray.includes('JMD ou TED rotation externe de la CF') && setJambeHaut1("backgroundBlue")
        commentArray.includes(('JMD ou TED rotation interne de la CF' )) && setJambeHaut1("backgroundBlue")

        commentArray.includes("SMCD core chaine ouverte") && setJambeHaut1("backgroundPurple")
        commentArray.includes( 'SMCD muscles de la flexion rachidienne') && setJambeHaut1("backgroundPurple")
        commentArray.includes( 'SMCD des muscles rotateurs internes de hanche' ) && setJambeHaut1("backgroundPurple")
        commentArray.includes('SMCD des muscles rotateurs externes de hanche' ) && setJambeHaut1("backgroundPurple")

        commentArray.includes("JMD ou TED flexion de hanche") && setJambeHaut2("backgroundBlue")
        commentArray.includes( 'JMD ou TED rotation externe de la CF') && setJambeHaut2("backgroundBlue")
        commentArray.includes('JMD ou TED rotation interne de la CF' ) && setJambeHaut2("backgroundBlue")

        commentArray.includes("SMCD muscles de la flexion rachidienne") && setJambeHaut2("backgroundPurple")
        commentArray.includes('SMCD core chaine ouverte') && setJambeHaut2("backgroundPurple")
        commentArray.includes( 'SMCD des muscles rotateurs internes de hanche' ) && setJambeHaut2("backgroundPurple")
        commentArray.includes('SMCD des muscles rotateurs externes de hanche' ) && setJambeHaut2("backgroundPurple")

        commentArray.includes("SMCD muscles de la flexion rachidienne") && setJambeHaut2("backgroundPurple")
        commentArray.includes('SMCD core chaine ouverte') && setJambeHaut2("backgroundPurple")
        commentArray.includes('SMCD des muscles rotateurs internes de hanche' ) && setJambeHaut2("backgroundPurple")
        commentArray.includes('SMCD des muscles rotateurs externes de hanche' ) && setJambeHaut2("backgroundPurple")

        commentArray.includes("JMD membre inf" ) && setJambeCentre2("backgroundBlue")
        commentArray.includes('TED psoas') && setJambeCentre2("backgroundBlue")

        commentArray.includes( 'TED psoas') && setJambeCentre1("backgroundBlue")
        commentArray.includes("JMD membre inf") && setJambeCentre1("backgroundBlue")

        commentArray.includes("SMCD membre inf" ) && setJambeCentre2("backgroundPurple")
        commentArray.includes('SMCD muscles de la flexion rachidienne') && setJambeCentre2("backgroundPurple")

        commentArray.includes(('JMD membre inf')) && setJambeCentre3("backgroundBlue")
        commentArray.includes(('JMD membre inf')) && setJambeCentre4("backgroundBlue")
        commentArray.includes(('JMD membre inf')) && setJambeCentre5("backgroundBlue")

        commentArray.includes(("SMCD membre inf")) && setJambeCentre5("backgroundPurple")
        commentArray.includes(("SMCD membre inf")) && setJambeCentre1("backgroundPurple")

        commentArray.includes('SMCD membre inf') && setJambeCentre3("backgroundPurple"),
        commentArray.includes('TED Quadriceps ou TFL') && setJambeCentre3("backgroundPurple"),

        commentArray.includes('SMCD membre inf' ) && setJambeCentre4("backgroundPurple")
        commentArray.includes('SMCD muscles de la flexion rachidienne') && setJambeCentre4("backgroundPurple")

        commentArray.includes('SMCD membre inf' ) && setJambeBas("backgroundPurple")
        commentArray.includes('TED Quadriceps ou TFL') && setJambeBas("backgroundPurple")

        commentArray.includes("JMD ou TED dorsiflexion") && setPied("backgroundBlue")

        commentArray.includes("JMD C1,C2 ou TED" )&& setDosNuqueHaut("backgroundBlue")
        commentArray.includes("JMD C0/C1 / TED Sous Occipitaux +/- JMD/TED basses et moyennes cervicales")&& setDosNuqueHaut("backgroundBlue")

        commentArray.includes("JMD basse cervicales") && setDosNuqueHautMilieu("backgroundBlue")
        commentArray.includes( "JMD/TED cervicale et haute thoracique" ) && setDosNuqueHautMilieu("backgroundBlue")
        commentArray.includes("JMD C0/C1 / TED Sous Occipitaux +/- JMD/TED basses et moyennes cervicales") && setDosNuqueHautMilieu("backgroundBlue")

        commentArray.includes(("SMCD Extension cervicale et muscles posturaux du cou")) && setDosNuqueHautMilieu("backgroundPurple")

        commentArray.includes("JMD/TED Basse et moyennes cervicales uniquement" ) && setDosNuqueHautCote("backgroundBlue")
        commentArray.includes( "JMD/TED cervicale et haute thoracique" ) && setDosNuqueHautCote("backgroundBlue")
        commentArray.includes( "JMD C0/C1 / TED Sous Occipitaux +/- JMD/TED basses et moyennes cervicales") && setDosNuqueHautCote("backgroundBlue")
        commentArray.includes("JMD basse cervicales, moyennes ou TED") && setDosNuqueHautCote("backgroundBlue")

        commentArray.includes("SMCD Extension cervicale et muscles posturaux du cou") && setDosNuqueHautCote("backgroundPurple")
        commentArray.includes( "SMCD des rotateurs du cou") && setDosNuqueHautCote("backgroundPurple")
        commentArray.includes( "SMCD des muscles extenseurs du cou" ) && setDosNuqueHautCote("backgroundPurple")
        commentArray.includes( "SMCD des muscles de la rotation du coup") && setDosNuqueHautCote("backgroundPurple")

        commentArray.includes("JMD/TED cervicale et haute thoracique") && setDosNuqueBas("backgroundBlue")
        commentArray.includes("SMCD des muscles extenseurs du cou") && setDosNuqueBas("backgroundPurple")
        commentArray.includes("JMD/TED Extension/rotation thoracique") && setColonneCentre("backgroundBlue")
        commentArray.includes("SMCD Extension/Rotation thoracique") && setColonneCentre("backgroundPurple")
        commentArray.includes("JMD/TED flexion du rachis") && setColonneGauche("backgroundBlue")
        commentArray.includes("SMCD des muscles postauraux" ) && setColonneGauche("backgroundPurple")
        commentArray.includes('SMCD des muscles extenseurs rachidiens' ) && setColonneGauche("backgroundPurple")
        commentArray.includes('SMCD des muscles interscapulaires') && setColonneGauche("backgroundPurple")

        commentArray.includes("JMD/TED flexion du rachis") && setColonneGaucheBas("backgroundBlue")
        commentArray.includes("JMD/TED flexion du rachis" ) && setColonneGaucheBas1("backgroundBlue")
        commentArray.includes("JMD ou TED rotation lombaire") && setColonneGaucheBas1("backgroundBlue")

        commentArray.includes("SMCD des muscles postauraux" ) && setColonneGaucheBas("backgroundPurple")
        commentArray.includes( 'SMCD des muscles extenseurs rachidiens') && setColonneGaucheBas("backgroundPurple")

        commentArray.includes("SMCD des muscles postauraux" ) && setColonneGaucheBas1("backgroundPurple")
        commentArray.includes('SMCD des muscles extenseurs rachidiens') && setColonneGaucheBas1("backgroundPurple")

        commentArray.includes("JMD ou TED rotation lombaire") && setColonneGaucheBas2("backgroundBlue")
        commentArray.includes("JMD ou TED rotation lombaire") &&   setColonneGaucheToutBas("backgroundBlue")
        commentArray.includes("SMCD des muscles extenseurs rachidiens") && setColonneGaucheBas2("backgroundPurple")

        commentArray.includes("JMD ou TED flexion de hanche" ) && setFesse1("backgroundBlue")
        commentArray.includes("JMD/TED abduction coxo-f??moral") && setFesse1("backgroundBlue")
        commentArray.includes("JMD/TED Extension coxo-f??moral") && setFesse1("backgroundBlue")

        commentArray.includes("SMCD glut??us med") && setFesse1("backgroundPurple")
        commentArray.includes("SMCD glut??us maximus" ) && setFesse1("backgroundPurple")
        commentArray.includes( "SMCD Extension coxo-f??moral") && setFesse1("backgroundPurple")

        commentArray.includes("JMD ou TED flexion de hanche" ) && setFesse2("backgroundBlue")
        commentArray.includes( "JMD/TED abduction coxo-f??moral" ) && setFesse2("backgroundBlue")
        commentArray.includes( "JMD/TED Extension coxo-f??moral" ) && setFesse2("backgroundBlue")
        commentArray.includes("JMD ou TED de la coxo-f??moral") && setFesse2("backgroundBlue")

        commentArray.includes("SMCD glut??us med" ) && setFesse2("backgroundPurple")
        commentArray.includes( "SMCD glut??us maximus") && setFesse2("backgroundPurple")
        commentArray.includes( "SMCD rotation externe coxo-f??moral" ) && setFesse2("backgroundPurple")
        commentArray.includes( "SMCD Extension coxo-f??moral") && setFesse2("backgroundPurple")

        commentArray.includes("TED chaine post membre inf") && setMollet("backgroundBlue")
        commentArray.includes("JMD ou TED dorsiflexion") && setMollet("backgroundBlue")

        commentArray.includes("SMCD des muscles de la flexion plantaire") && setMollet("backgroundPurple")
        commentArray.includes("JMD/TED Flexion du coude") && setCoude("backgroundBlue")
        commentArray.includes("JMD/TED Rotation interne gl??no-hum??rale") && setDosGauche1("backgroundBlue"),
        commentArray.includes("JMD/TED Rotation interne gl??no-hum??rale") &&  setDosGauche2("backgroundBlue"),
       
        commentArray.includes("SMCD Rotateur interne") && setDosGauche1("backgroundPurple")
        commentArray.includes("SMCD Rotateur interne") && setDosGauche2("backgroundPurple")

        commentArray.includes("JMD/TED Rotation externe gl??no-hum??rale" ,"JMD/TED Rotation interne gl??no-hum??rale") && setDosGauche3("backgroundBlue")
        commentArray.includes("JMD/TED Rotation interne gl??no-hum??rale") && setDosGauche3("backgroundBlue")

        commentArray.includes("SMCD rotateurs externes" ) && setDosGauche3("backgroundPurple")
        commentArray.includes('SMCD Rotateur interne' ) && setDosGauche3("backgroundPurple")
        commentArray.includes('SMCD Extenseurs Gl??no-hum??raux') && setDosGauche3("backgroundPurple")

        commentArray.includes(("JMD/TED Rotation externe gl??no-hum??rale")) && setDosGauche4("backgroundBlue")
        commentArray.includes("SMCD rotateurs externes" ) && setDosGauche4("backgroundPurple")
        commentArray.includes('SMCD Extenseurs Gl??no-hum??raux') && setDosGauche4("backgroundPurple")

        }

    }, [isFocused])
    

async function generateHTML() {

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">

      <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <style>
          *{
              margin:0;
              padding:0;
              margin-block:0;
              box-sizing: border-box;
              -webkit-print-color-adjust: exact !important;   
              color-adjust: exact !important;                
  
          }
          body {
              width:1000px;
              max-height:1500px;
              /* //height:"100%"; */
              margin:auto;
              background-color:white;
          }
        
          header{
              flex-direction:'row';
              width:"100%";
              border:2px solid black;
              margin-bottom:20;
              display:flex;
              height:220px;
              justify-content: space-between;
          }
          p{
              padding-left: 10px;
              margin:0;
              display:inline
          }
          footer{
              border:2px solid black;
              height:30;
              align-items:center;
              justify-content:center;
              text-align: center;
              bottom:0;
              position:absolute;
          }
          .violet{
              background-color:#a64d79;
              width:30px;
              height:30px;
  
          }
          .bleu{
              background-color:#1155cc;
              width:30px;
              height:30px;
          }
          .imageBackground {
              background: url("https://raw.githubusercontent.com/kochky/Image/main/t%C3%A9l%C3%A9chargement.png")no-repeat;
              background-position: center;
              width: 20%;
              border-left:2px solid black;
              height:100%;
          }
          .firstSection{
              display:flex;
              margin-top:20px;
              justify-content: space-around;
              margin-bottom:20px;
              height:500px
          }
          .titleContainer{
              border:1px solid black
          }
          .commentsContainer{
              border:1px solid black;
              height:auto;
              padding:15px
    
          }
          .firstArticle {
              width:49%
          }
          .secondArticle{
              width:49%;
              display:flex;
              flex-direction: column;
              /* justify-content: space-around; */
          }
          .firstPart {
              border:1px solid black;
          }
          .secondPart {
              border:1px solid black;
              padding:15px;
              box-sizing: border-box;
          }
          .paragraphe {
              margin-bottom:10px
          }
          .secondSection {
              display:flex;
              justify-content: space-around;
              align-items: center;
              margin-bottom: 20px;
              height:500px
          }
          .face {
              background: url("https://raw.githubusercontent.com/kochky/Image/main/face.png")no-repeat;
              background-position: center;
              background-size: contain;
              height:500px;
              width:500px;
              position:relative;
          }
          .cou {
              width:30px;
              height:30px;
              position:absolute;
              top:70px;
              left:235px;
  
          }
          .epaule1{
              width:30px;
              height:30px;
              position:absolute;
              top:100px;
              left:185px;
  
          }
          .epaule2{
              width:30px;
              height:30px;
              position:absolute;
              top:120px;
              left:195px;
  
          }
          .epaule3{
              width:30px;
              height:30px;
              position:absolute;
              top:100px;
              right:185px;
  
          }
          .epaule4{
              width:30px;
              height:30px;
              position:absolute;
              top:120px;
              right:195px;
  
          }
          .ventreHaut{
              width:30px;
              height:50px;
              position:absolute;
              top:140px;
              left:235px;
          }
          .ventreHaut2{
              width:30px;
              height:15px;
              position:absolute;
              top:190px;
              left:235px;
          }
          .ventreHautCote1{
              width:15px;
              height:45px;
              position:absolute;
              top:190px;
              left:220px;
          }
          .ventreHautCote2{
              width:15px;
              height:45px;
              position:absolute;
              top:190px;
              right:220px;
          }
          .ventreHautCentre{
              width:30px;
              height:30px;
              position:absolute;
              top:205px;
              right:235px;
          }
          .ventreBasCentre{
              width:30px;
              height:20px;
              position:absolute;
              top:235px;
              right:235px;
          }
          .ventreBasCentreGauche{
              width:15px;
              height:20px;
              position:absolute;
              top:235px;
              left:205px;
          }
          .ventreBasCentreDroite{
              width:15px;
              height:20px;
              position:absolute;
              top:235px;
              right:205px;
          }
          .jambeHaut1Gauche{
              position:absolute;
              width:15px;
              height:10px;
              top:235px;
              left:220px;
  
          }
          .jambeHaut1Droite{
              position:absolute;
              width:15px;
              height:10px;
              top:235px;
              right:220px;
  
          }
          .jambeHaut2Gauche{
              position:absolute;
              width:15px;
              height:10px;
              top:245px;
              left:220px;
  
          }
          .jambeHaut2Droite{
              position:absolute;
              width:15px;
              height:10px;
              top:245px;
              right:220px;
  
          }
          .jambeCentreDroite1{
              position:absolute;
              width:15px;
              height:10px;
              top:250px;
              right:205px;
          }
          .jambeCentreGauche1{
              position:absolute;
              width:15px;
              height:10px;
              top:250px;
              left:205px;
          }
          .jambeCentreDroite2{
              position:absolute;
              width:15px;
              height:20px;
              top:255px;
              right:220px;
          }
          .jambeCentreGauche2{
              position:absolute;
              width:15px;
              height:20px;
              top:255px;
              left:220px;
          }
          .jambeCentreDroite3{
              position:absolute;
              width:15px;
              height:30px;
              top:260px;
              left:205px;
          }
          .jambeCentreGauche3{
              position:absolute;
              width:15px;
              height:30px;
              top:260px;
              right:205px;
          }
          .jambeCentreGauche4{
              position:absolute;
              width:15px;
              height:10px;
              top:270px;
              left:220px;
          }
          .jambeCentreDroite4{
              position:absolute;
              width:15px;
              height:10px;
              top:270px;
              right:220px;
          }
          .jambeCentreDroite5{
              position:absolute;
              width:15px;
              height:10px;
              top:280px;
              right:220px;
          }
          .jambeCentreGauche5 {
              position:absolute;
              width:15px;
              height:10px;
              top:280px;
              left:220px;
          }
          .jambeBasDroite {
              position:absolute;
              width:15px;
              height:20px;
              top:290px;
              right:205px;
          }
          .jambeBasGauche {
              position:absolute;
              width:15px;
              height:20px;
              top:290px;
              left:205px;
          }
          .piedGauche{
              position:absolute;
              width:20px;
              height:20px;
              top:465px;
              left:175px;
          }
          .piedDroit{
              position:absolute;
              width:20px;
              height:20px;
              top:465px;
              right:175px;
          }
  
  
          .dos{
              background: url("https://raw.githubusercontent.com/kochky/Image/main/dos.png")no-repeat; ;
              background-position: center;
              background-size: contain;
              height:500px;
              width:500px;
              position:relative;
          }
          .dosNuqueHaut{
              width:30px;
              height:10px;
              position:absolute;
              top:60px;
              left:235px;
          }
          .dosNuqueHautMilieu{
              width:10px;
              height:10px;
              position:absolute;
              top:70px;
              left:245px;
          }
          .dosNuqueHautGauche{
              width:10px;
              height:10px;
              position:absolute;
              top:70px;
              left:235px;
          }
          .dosNuqueHautDroite{
              width:10px;
              height:10px;
              position:absolute;
              top:70px;
              right:235px;
          }
          .dosNuqueBas{
              width:10px;
              height:10px;
              position:absolute;
              top:80px;
              left:245px;
          }
          .colonneCentre{
              width:10px;
              height:80px;
              position:absolute;
              top:90px;
              left:245px;
          }
          .colonneGauche{
              width:10px;
              height:50px;
              position:absolute;
              top:100px;
              left:235px;
          }
          .colonneDroite{
              width:10px;
              height:50px;
              position:absolute;
              top:100px;
              right:235px;
          }
          .colonneGaucheBas{
              width:10px;
              height:10px;
              position:absolute;
              top:150px;
              left:235px;
          }
          .colonneDroiteBas{
              width:10px;
              height:10px;
              position:absolute;
              top:150px;
              right:235px;
          }
          .colonneGaucheBas1{
              width:10px;
              height:20px;
              position:absolute;
              top:160px;
              left:235px;
          }
          .colonneDroiteBas1{
              width:10px;
              height:20px;
              position:absolute;
              top:160px;
              right:235px;
          }
          .colonneGaucheBas2{
              width:10px;
              height:10px;
              position:absolute;
              top:180px;
              left:235px;
          }
          .colonneDroiteBas2{
              width:10px;
              height:10px;
              position:absolute;
              top:180px;
              right:235px;
          }
          .colonneGaucheToutBas{
              width:10px;
              height:30px;
              position:absolute;
              top:160px;
              left:225px;
          }
          .colonneDroiteToutBas{
              width:10px;
              height:30px;
              position:absolute;
              top:160px;
              right:225px;
          }
          .fesseGauche1{
              width:30px;
              height:15px;
              position:absolute;
              top:220px;
              left:200px;
          }
          .fesseGauche2{
              width:30px;
              height:15px;
              position:absolute;
              top:235px;
              left:200px;
          }
          .fesseDroite1{
              width:30px;
              height:15px;
              position:absolute;
              top:220px;
              right:200px;
          }
          .fesseDroite2{
              width:30px;
              height:15px;
              position:absolute;
              top:235px;
              right:200px;
          }
          .molletGauche{
              width:15px;
              height:70px;
              position:absolute;
              top:355px;
              left:195px;
          }
          .molletDroit{
              width:15px;
              height:70px;
              position:absolute;
              top:355px;
              right:195px;
          }
          .coudeGauche{
              width:30px;
              height:10px;
              position:absolute;
              top:165px;
              left:150px;
            
          }
          .coudeDroite{
              width:30px;
              height:10px;
              position:absolute;
              top:165px;
              right:150px;
          
          }
          .dosGauche1{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              left:225px;
  
          }
          .dosDroite1{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              right:225px;
  
          }
          .dosGauche2{
              width:10px;
              height:20px;
              position:absolute;
              top:100px;
              left:215px;
  
          }
          .dosDroite2{
              width:10px;
              height:20px;
              position:absolute;
              top:100px;
              right:215px;
  
          }
          .dosGauche3{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              left:215px;
  
          }
          .dosDroite3{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              right:215px;
  
          }
          .dosGauche4{
              width:20px;
              height:20px;
              position:absolute;
              top:120px;
              left:195px;
  
          }
          .dosDroite4{
              width:20px;
              height:20px;
              position:absolute;
              top:120px;
              right:195px;
  
          }
          .backgroundBlue{
            background-color:#1155cc;
          }
          .backgroundPurple{
            background-color:#a64d79;

          }
      </style> 
    </head>
    <body >
       
          <header>
              <div style=width:50%;padding:15px>
                  <div style=display:flex;align-items:center ><h3>Date : </h3><p>${props.data[patientId]["date"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Nom : </h3><p>${props.data[patientId]["name"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Pr??nom : </h3><p>${props.data[patientId]["firstName"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>T??l??phone : </h3><p>${props.data[patientId]["phone"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Mail : </h3><p>${props.data[patientId]["email"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Structure : </h3><p>${props.data[patientId]["structure"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Activit?? sportive : </h3><p>${props.data[patientId]["activity"]}</p></div>
              </div>
              <div style=width:40%;display:flex;flex-direction:column;align-items:center;justify-content:center>
                  <div style=display:flex;margin-bottom:20px><h3>Th??rapeute 1:</h3><div style=display:flex;flex-direction:column><p>Pierre Mounier</p> <p>06 48 27 36 41</p></div></div>
                  <div style=display:flex ><h3>Th??rapeute 2:</h3><div style=display:flex;flex-direction:column><p>Pierre Morey </p><p>06 66 59 42 39</p></div></div>
              </div>
              <div class="imageBackground">
              </div>
          </header>
        
          <div  class=firstSection>
              <div class=firstArticle>
                  <div class=titleContainer><p>Diagnostics:</p></div>
                  <div class=commentsContainer>
                  ${commentArray.map(item=>`<div>${item}</div>`.trim()).join('')}

                  </div>
              </div>
  
              <div class=secondArticle>
                  <div class=firstPart>
                      <div style=height:30px;display:flex;align-items:center><div class=violet></div><p>Probl??me de stabilit?? ou de contr??le moteur (SMCD)</p></div>
                      <div style=height:30px;display:flex;align-items:center><div class=bleu></div><p>Joint Mobility dysfonciton (JMD) </p></div>
                      <div style=height:30px;display:flex;align-items:center><div class=bleu></div><p>Tissue extensibilty dysfonction (TED)</p></div>
                  </div>
                  <div style=height:20px></div>
                  <div class=secondPart>
                      <div class=paragraphe><p>D??finitions :</p></div>
                      <div class=paragraphe><p>SMCD (Violet) : Probl??me de contr??le moteur ayant pour solution les exercices de renforcements/cont??le moteur</p></div>
                      <div class=paragraphe><p>JMD (Bleu) : Probl??me de mobilit?? articulaire ayant pour solution les ??tirement articulaires,les mobilisations ou les manipulations</p></div>
                      <div class=paragraphe><p>TED (Bleu) : Probl??me de tension musculaire ayant pour solution les ??tirement musculaires ou la d??tente musculaire</p></div>
                      <div class=paragraphe><p>Pour tout renseignement compl??mentaire et demande de rendez vous, nous contacter au:</p></div>
                  </div>
              </div>
          </div>
  
          <div class=secondSection>
              <div class=face>
                  <div class="cou ${cou}"></div>

                  <div class="epaule1 ${epauleHaut}"></div>
                  <div class="epaule2 ${epauleBas}"></div>
                  <div class="epaule3 ${epauleHaut}"></div>
                  <div class="epaule4 ${epauleBas}"></div>
                  <div class="ventreHaut ${ventreHaut}"></div>
                  <div class="ventreHaut2 ${ventreHaut2}"></div>
                  <div class="ventreHautCote1 ${ventreHautCote}"></div>
                  <div class="ventreHautCote2" ${ventreHautCote}></div>
                  <div class="ventreHautCentre ${ventreHautCentre}"></div>
                  <div class="ventreBasCentre ${ventreBasCentre}"></div>
                  <div class="ventreBasCentreGauche ${ventreBasCentreCote}"></div>
                  <div class="ventreBasCentreDroite ${ventreBasCentreCote}"></div>
                  <div class="jambeHaut1Gauche ${jambeHaut1}" ></div>
                  <div class="jambeHaut1Droite ${jambeHaut1}"></div>
                  <div class="jambeHaut2Gauche ${jambeHaut2}"></div>
                  <div class="jambeHaut2Droite ${jambeHaut2}"></div>
                  
                  <div class="jambeCentreDroite1 ${jambeCentre1}"></div>
                  <div class="jambeCentreDroite2 ${jambeCentre2}"></div>
                  <div class="jambeCentreDroite3 ${jambeCentre3}"></div>
                  <div class="jambeCentreDroite4 ${jambeCentre4}"></div>
                  <div class="jambeCentreDroite5 ${jambeCentre5}"></div>

                  <div class="jambeCentreGauche1 ${jambeCentre1}"></div>
                  <div class="jambeCentreGauche2 ${jambeCentre2}"></div>
                  <div class="jambeCentreGauche3 ${jambeCentre3}"></div>
                  <div class="jambeCentreGauche4 ${jambeCentre4}"></div>
                  <div class="jambeCentreGauche5 ${jambeCentre5}"></div>
  
                  <div class="jambeBasGauche ${jambeBas}"></div>
                  <div class="jambeBasDroite ${jambeBas}"></div>
                  
                  <div class="piedGauche ${pied}"></div>
                  <div class="piedDroit ${pied}"></div>
              </div>
              <div class=dos >
                  <div class="dosNuqueHaut ${dosNuqueHaut}"></div>
                  <div class="dosNuqueHautMilieu ${dosNuqueHautMilieu}"></div>
                  <div class="dosNuqueHautGauche ${dosNuqueHautCote}"></div>
                  <div class="dosNuqueHautDroite ${dosNuqueHautCote}"></div>
                  <div class="dosNuqueBas ${dosNuqueBas}"></div>
                  <div class="colonneCentre ${colonneCentre}"></div>
                  <div class="colonneGauche ${colonneGauche}"></div>
                  <div class="colonneDroite ${colonneGauche}"></div>
                  <div class="colonneGaucheBas ${colonneGaucheBas}"></div>
                  <div class="colonneGaucheBas2 ${colonneGaucheBas2}"></div>
                  <div class="colonneGaucheBas1 ${colonneGaucheBas1}"></div>
                  <div class="colonneDroiteBas1 ${colonneGaucheBas1}"></div>

                  <div class="colonneDroiteBas ${colonneGaucheBas}"></div>
                  <div class="colonneDroiteBas2 ${colonneGaucheBas2}"></div>
                  <div class="colonneGaucheToutBas ${colonneGaucheToutBas}"></div>
                  <div class="colonneDroiteToutBas ${colonneGaucheToutBas}"></div>
  
                  <div class="fesseGauche1 ${fesse1}"></div>
                  <div class="fesseGauche2 ${fesse2}"></div>
                  <div class="fesseDroite1 ${fesse1}"></div>
                  <div class="fesseDroite2 ${fesse2}"></div>
                  <div class="molletGauche ${mollet}"></div>
                  <div class="molletDroit ${mollet}"></div>
  
  
                  <div class="coudeGauche ${coude}"></div>
                  <div class="coudeDroite ${coude}"></div>
  
                  <div class="dosGauche1 ${dosGauche1}"></div>
                  <div class="dosGauche2 ${dosGauche2}"></div>
                  <div class="dosGauche3 ${dosGauche3}"></div>
                  <div class="dosGauche4 ${dosGauche4}"></div>
  
                  <div class="dosDroite1 ${dosGauche1}"></div>
                  <div class="dosDroite2 ${dosGauche2}"></div>
                  <div class="dosDroite3 ${dosGauche3}"></div>
                  <div class="dosDroite4 ${dosGauche4}"></div>
  
              </div>
  
          </div>
  
          <footer >
              <p>Fiche r??caputilative propri??t?? de l'Institut Franco Europ??en de Chiropraxie, tous droit r??serv??s, ne peut ??tre utilis?? par un autre professionnel de la sant??</p>
          </footer>
      
    </body>
  </html>

  `

}
    
    
  const [selectedPrinter, setSelectedPrinter] =useState();

  const print = async () => {
    const html=  await generateHTML();
        await Print.printAsync({
          html,
          margins: {
            left: 10,
            top: 10,
            right: 10,
            bottom: 10
          },
          printerUrl: selectedPrinter?.url, // iOS only
        });
      
  }
  const printToFile = async () => {
    const html=  await generateHTML();
    const { uri } = await Print.printToFileAsync({
      html,
      margins: {
        left: 10,
        top: 10,
        right: 10,
        bottom: 10
      },
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  
  }


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Image style={styles.image} source={require('../ressources/printer.png')}/>
        <Button title='Print' onPress={print}  />
      </View>
      <View style={styles.buttonContainer}>
          <Image  style={styles.image} source={require("../ressources/floppy-disk.png")}/>
          <Button title='Share PDF file' onPress={printToFile}/>
      </View>
     
      <View style={{flex:1,paddingTop:50}} >
        <Button  title='Retour menu'color="#18534F" onPress={()=> navigation.navigate('Menu')}/>
    </View>


    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center"

  },
  spacer:{
   flex:1
  },
  buttonContainer:{
    flex:1,
    alignItems:"center",
    padding:50,
  },
  image:{
    width:75,
    height:75,
    marginBottom:30,
  }



})
