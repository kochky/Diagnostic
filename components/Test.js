import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text, Image } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { UserContext } from '../Context'
import { manipulateAsync } from 'expo-image-manipulator';
import { Asset } from 'expo-asset';




export default function Test() {
  const props = React.useContext(UserContext); 
  const patientId= props.name+props.firstName+props.date
  
  async function generateHTML() {
    const asset = Asset.fromModule(require('../ressources/téléchargement.png'));
    const image = await manipulateAsync(
      asset.localUri ?? asset.uri,
      [],
      { base64: true }
    );
    const asset1 = Asset.fromModule(require('../ressources/dos.png'));
    const image1 = await manipulateAsync(
      asset1.localUri ?? asset1.uri,
      [],
      { base64: true }
    );
    const asset2 = Asset.fromModule(require('../ressources/face.png'));
    const image2 = await manipulateAsync(
      asset2.localUri ?? asset2.uri,
      [],
      { base64: true }
    );

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <html>
    <head>
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
              background: url("data:image/jpeg;base64,${image.base64}")no-repeat;
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
              height:auto
    
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
              background: url("data:image/jpeg;base64,${image2.base64}")no-repeat;
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
              background-color:#a64d79;
  
          }
          .epaule1{
              width:30px;
              height:30px;
              position:absolute;
              top:100px;
              left:185px;
              background-color:#a64d79;
  
          }
          .epaule2{
              width:30px;
              height:30px;
              position:absolute;
              top:120px;
              left:195px;
              background-color:#a64d79;
  
          }
          .epaule3{
              width:30px;
              height:30px;
              position:absolute;
              top:100px;
              right:185px;
              background-color:#a64d79;
  
          }
          .epaule4{
              width:30px;
              height:30px;
              position:absolute;
              top:120px;
              right:195px;
              background-color:#a64d79;
  
          }
          .ventreHaut{
              width:30px;
              height:50px;
              position:absolute;
              top:140px;
              left:235px;
              background-color:green;
          }
          .ventreHaut2{
              width:30px;
              height:15px;
              position:absolute;
              top:190px;
              left:235px;
              background-color:yellow;
          }
          .ventreHautCote1{
              width:15px;
              height:45px;
              position:absolute;
              top:190px;
              left:220px;
              background-color:blue;
          }
          .ventreHautCote2{
              width:15px;
              height:45px;
              position:absolute;
              top:190px;
              right:220px;
              background-color:blue;
          }
          .ventreHautCentre{
              width:30px;
              height:30px;
              position:absolute;
              top:205px;
              right:235px;
              background-color:pink;
          }
          .ventreBasCentre{
              width:30px;
              height:20px;
              position:absolute;
              top:235px;
              right:235px;
              background-color:red;
          }
          .ventreBasCentreGauche{
              width:15px;
              height:20px;
              position:absolute;
              top:235px;
              left:205px;
              background-color:pink;
          }
          .ventreBasCentreDroite{
              width:15px;
              height:20px;
              position:absolute;
              top:235px;
              right:205px;
              background-color:pink;
          }
          .jambeHaut1Gauche{
              position:absolute;
              width:15px;
              height:10px;
              top:235px;
              left:220px;
              background-color:orange;
  
          }
          .jambeHaut1Droite{
              position:absolute;
              width:15px;
              height:10px;
              top:235px;
              right:220px;
              background-color:orange;
  
          }
          .jambeHaut2Gauche{
              position:absolute;
              width:15px;
              height:10px;
              top:245px;
              left:220px;
              background-color:purple;
  
          }
          .jambeHaut2Droite{
              position:absolute;
              width:15px;
              height:10px;
              top:245px;
              right:220px;
              background-color:purple;
  
          }
          .jambeCentreDroite1{
              position:absolute;
              width:15px;
              height:10px;
              top:250px;
              right:205px;
              background-color:green;
          }
          .jambeCentreGauche1{
              position:absolute;
              width:15px;
              height:10px;
              top:250px;
              left:205px;
              background-color:green;
          }
          .jambeCentreDroite2{
              position:absolute;
              width:15px;
              height:20px;
              top:255px;
              right:220px;
              background-color:red;
          }
          .jambeCentreGauche2{
              position:absolute;
              width:15px;
              height:20px;
              top:255px;
              left:220px;
              background-color:red;
          }
          .jambeCentreDroite3{
              position:absolute;
              width:15px;
              height:30px;
              top:260px;
              left:205px;
              background-color:yellow;
          }
          .jambeCentreGauche3{
              position:absolute;
              width:15px;
              height:30px;
              top:260px;
              right:205px;
              background-color:yellow;
          }
          .jambeCentreGauche4{
              position:absolute;
              width:15px;
              height:10px;
              top:270px;
              left:220px;
              background-color:gray;
          }
          .jambeCentreDroite4{
              position:absolute;
              width:15px;
              height:10px;
              top:270px;
              right:220px;
              background-color:gray;
          }
          .jambeCentreDroite5{
              position:absolute;
              width:15px;
              height:10px;
              top:280px;
              right:220px;
              background-color:blue;
          }
          .jambeCentreGauche5 {
              position:absolute;
              width:15px;
              height:10px;
              top:280px;
              left:220px;
              background-color:blue;
          }
          .jambeBasDroite {
              position:absolute;
              width:15px;
              height:20px;
              top:290px;
              right:205px;
              background-color:yellow;
          }
          .jambeBasGauche {
              position:absolute;
              width:15px;
              height:20px;
              top:290px;
              left:205px;
              background-color:yellow;
          }
          .piedGauche{
              position:absolute;
              width:20px;
              height:20px;
              top:465px;
              left:175px;
              background-color:yellow;
          }
          .piedDroit{
              position:absolute;
              width:20px;
              height:20px;
              top:465px;
              right:175px;
              background-color:yellow;
          }
  
  
          .dos{
              background: url("data:image/jpeg;base64,${image1.base64}")no-repeat; ;
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
              background-color:#a64d79;
          }
          .dosNuqueHautMilieu{
              width:10px;
              height:10px;
              position:absolute;
              top:70px;
              left:245px;
              background-color:#a64d79;
          }
          .dosNuqueHautGauche{
              width:10px;
              height:10px;
              position:absolute;
              top:70px;
              left:235px;
              background-color:#a64d79;
          }
          .dosNuqueHautDroite{
              width:10px;
              height:10px;
              position:absolute;
              top:70px;
              right:235px;
              background-color:#a64d79;
          }
          .dosNuqueBas{
              width:10px;
              height:10px;
              position:absolute;
              top:80px;
              left:245px;
              background-color:red;
          }
          .colonneCentre{
              width:10px;
              height:80px;
              position:absolute;
              top:90px;
              left:245px;
              background-color:#a64d79;
          }
          .colonneGauche{
              width:10px;
              height:50px;
              position:absolute;
              top:100px;
              left:235px;
              background-color:blue;
          }
          .colonneDroite{
              width:10px;
              height:50px;
              position:absolute;
              top:100px;
              right:235px;
              background-color:blue;
          }
          .colonneGaucheBas{
              width:10px;
              height:10px;
              position:absolute;
              top:150px;
              left:235px;
              background-color:green;
          }
          .colonneDroiteBas{
              width:10px;
              height:10px;
              position:absolute;
              top:150px;
              right:235px;
              background-color:green;
          }
          .colonneGaucheBas1{
              width:10px;
              height:20px;
              position:absolute;
              top:160px;
              left:235px;
              background-color:red;
          }
          .colonneDroiteBas1{
              width:10px;
              height:20px;
              position:absolute;
              top:160px;
              right:235px;
              background-color:red;
          }
          .colonneGaucheBas2{
              width:10px;
              height:10px;
              position:absolute;
              top:180px;
              left:235px;
              background-color:blue;
          }
          .colonneDroiteBas2{
              width:10px;
              height:10px;
              position:absolute;
              top:180px;
              right:235px;
              background-color:blue;
          }
          .colonneGaucheToutBas{
              width:10px;
              height:30px;
              position:absolute;
              top:160px;
              left:225px;
              background-color:yellow;
          }
          .colonneDroiteToutBas{
              width:10px;
              height:30px;
              position:absolute;
              top:160px;
              right:225px;
              background-color:yellow;
          }
          .fesseGauche1{
              width:30px;
              height:15px;
              position:absolute;
              top:220px;
              left:200px;
              background-color:yellow;
          }
          .fesseGauche2{
              width:30px;
              height:15px;
              position:absolute;
              top:235px;
              left:200px;
              background-color:yellow;
          }
          .fesseDroite1{
              width:30px;
              height:15px;
              position:absolute;
              top:220px;
              right:200px;
              background-color:yellow;
          }
          .fesseDroite2{
              width:30px;
              height:15px;
              position:absolute;
              top:235px;
              right:200px;
              background-color:yellow;
          }
          .molletGauche{
              width:15px;
              height:70px;
              position:absolute;
              top:355px;
              left:195px;
              background-color:yellow;
          }
          .molletDroit{
              width:15px;
              height:70px;
              position:absolute;
              top:355px;
              right:195px;
              background-color:yellow;
          }
          .coudeGauche{
              width:30px;
              height:10px;
              position:absolute;
              top:165px;
              left:150px;
              background-color:yellow; 
          }
          .coudeDroite{
              width:30px;
              height:10px;
              position:absolute;
              top:165px;
              right:150px;
              background-color:yellow; 
          }
          .dosGauche1{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              left:225px;
              background-color:green;
  
          }
          .dosDroite1{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              right:225px;
              background-color:green;
  
          }
          .dosGauche2{
              width:10px;
              height:20px;
              position:absolute;
              top:100px;
              left:215px;
              background-color:red;
  
          }
          .dosDroite2{
              width:10px;
              height:20px;
              position:absolute;
              top:100px;
              right:215px;
              background-color:red;
  
          }
          .dosGauche3{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              left:215px;
              background-color:blue;
  
          }
          .dosDroite3{
              width:10px;
              height:20px;
              position:absolute;
              top:120px;
              right:215px;
              background-color:blue;
  
          }
          .dosGauche4{
              width:20px;
              height:20px;
              position:absolute;
              top:120px;
              left:195px;
              background-color:green;
  
          }
          .dosDroite4{
              width:20px;
              height:20px;
              position:absolute;
              top:120px;
              right:195px;
              background-color:green;
  
          }
      </style> 
    </head>
    <body >
       
          <header>
              <div style=width:50%;padding:15px>
                  <div style=display:flex;align-items:center ><h3>Date : </h3><p>${props.data[patientId]["date"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Nom : </h3><p>${props.data[patientId]["name"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Prénom : </h3><p>${props.data[patientId]["firstName"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Téléphone : </h3><p>${props.data[patientId]["phone"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Mail : </h3><p>${props.data[patientId]["email"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Structure : </h3><p>${props.data[patientId]["structure"]}</p></div>
                  <div style=display:flex;align-items:center ><h3>Activité sportive : </h3><p>${props.data[patientId]["activity"]}</p></div>
              </div>
              <div style=width:40%;display:flex;flex-direction:column;align-items:center;justify-content:center>
                  <div style=display:flex;margin-bottom:20px><h3>Thérapeute 1:</h3><div style=display:flex;flex-direction:column><p>Pierre Mounier</p> <p>06 48 27 36 41</p></div></div>
                  <div style=display:flex ><h3>Thérapeute 2:</h3><div style=display:flex;flex-direction:column><p>Pierre Morey </p><p>06 66 59 42 39</p></div></div>
              </div>
              <div class="imageBackground">
              </div>
          </header>
  
          <div  class=firstSection>
              <div class=firstArticle>
                  <div class=titleContainer><p>Diagnostics:</p></div>
                  <div class=commentsContainer>
                  {Object.values(props.data[patientId]["diagnostic"]).map((diag;i)=>Object.values(diag).map(p=><p key={i}>{p}</p>))}
  
                  </div>
              </div>
  
              <div class=secondArticle>
                  <div class=firstPart>
                      <div style=height:30px;display:flex;align-items:center><div class=violet></div><p>Problème de stabilité ou de contrôle moteur (SMCD)</p></div>
                      <div style=height:30px;display:flex;align-items:center><div class=bleu></div><p>Joint Mobility dysfonciton (JMD) </p></div>
                      <div style=height:30px;display:flex;align-items:center><div class=bleu></div><p>Tissue extensibilty dysfonction (TED)</p></div>
                  </div>
                  <div style=height:20px></div>
                  <div class=secondPart>
                      <div class=paragraphe><p>Définitions :</p></div>
                      <div class=paragraphe><p>SMCD (Violet) : Problème de contrôle moteur ayant pour solution les exercices de renforcements/contôle moteur</p></div>
                      <div class=paragraphe><p>JMD (Bleu) : Problème de mobilité articulaire ayant pour solution les étirement articulaires,les mobilisations ou les manipulations</p></div>
                      <div class=paragraphe><p>TED (Bleu) : Problème de tension musculaire ayant pour solution les étirement musculaires ou la détente musculaire</p></div>
                      <div class=paragraphe><p>Pour tout renseignement complémentaire et demande de rendez vous, nous contacter au:</p></div>
                  </div>
              </div>
          </div>
  
          <div class=secondSection>
              <div class=face>
                  <div class="cou"></div>
                  <div class="epaule1"></div>
                  <div class="epaule2"></div>
                  <div class="epaule3"></div>
                  <div class="epaule4"></div>
                  <div class="ventreHaut"></div>
                  <div class="ventreHaut2"></div>
                  <div class="ventreHautCote1"></div>
                  <div class="ventreHautCote2"></div>
                  <div class="ventreHautCentre"></div>
                  <div class="ventreBasCentre"></div>
                  <div class="ventreBasCentreGauche"></div>
                  <div class="ventreBasCentreDroite"></div>
                  <div class="jambeHaut1Gauche"></div>
                  <div class="jambeHaut1Droite"></div>
                  <div class="jambeHaut2Gauche"></div>
                  <div class="jambeHaut2Droite"></div>
  
                  <div class="jambeCentreDroite1"></div>
                  <div class="jambeCentreDroite2"></div>
                  <div class="jambeCentreDroite3"></div>
                  <div class="jambeCentreDroite4"></div>
                  <div class="jambeCentreDroite5"></div>
                  <div class="jambeCentreGauche1"></div>
                  <div class="jambeCentreGauche2"></div>
                  <div class="jambeCentreGauche3"></div>
                  <div class="jambeCentreGauche4"></div>
                  <div class="jambeCentreGauche5"></div>
  
                  <div class="jambeBasGauche"></div>
                  <div class="jambeBasDroite"></div>
                  
                  <div class="piedGauche"></div>
                  <div class="piedDroit"></div>
              </div>
              <div class=dos >
                  <div class="dosNuqueHaut"></div>
                  <div class="dosNuqueHautMilieu"></div>
                  <div class="dosNuqueHautGauche"></div>
                  <div class="dosNuqueHautDroite"></div>
                  <div class="dosNuqueBas"></div>
                  <div class="colonneCentre"></div>
                  <div class="colonneGauche"></div>
                  <div class="colonneDroite"></div>
                  <div class="colonneGaucheBas"></div>
                  <div class="colonneGaucheBas2"></div>
                  <div class="colonneGaucheBas1"></div>
                  <div class="colonneDroiteBas1"></div>
                  <div class="colonneDroiteBas"></div>
                  <div class="colonneDroiteBas2"></div>
                  <div class="colonneGaucheToutBas"></div>
                  <div class="colonneDroiteToutBas"></div>
  
                  <div class="fesseGauche1"></div>
                  <div class="fesseGauche2"></div>
                  <div class="fesseDroite1"></div>
                  <div class="fesseDroite2"></div>
                  <div class="molletGauche"></div>
                  <div class="molletDroit"></div>
  
  
                  <div class="coudeGauche"></div>
                  <div class="coudeDroite"></div>
  
                  <div class="dosGauche1"></div>
                  <div class="dosGauche2"></div>
                  <div class="dosGauche3"></div>
                  <div class="dosGauche4"></div>
  
                  <div class="dosDroite1"></div>
                  <div class="dosDroite2"></div>
                  <div class="dosDroite3"></div>
                  <div class="dosDroite4"></div>
  
  
  
  
  
  
              </div>
  
          </div>
  
          <footer >
              <p>Fiche récaputilative propriété de l'Institut Franco Européen de Chiropraxie, tous droit réservés, ne peut être utilisé par un autre professionnel de la santé</p>
          </footer>
      
    </body>
  </html>
  </body>
  </html>
  `;
}

  const [selectedPrinter, setSelectedPrinter] = React.useState();

  async function print() {
    const html = await generateHTML();
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  async function printToFile()  {
    const html= await generateHTML();
    const { uri } = await Print.printToFileAsync({
      html
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Image style={styles.image} source={require('../ressources/printer.png')}/>
        <Button title='Print' onPress={print}  />
      </View>
      <View style={styles.spacer} />
      <View style={styles.buttonContainer}>
          <Image  style={styles.image} source={require("../ressources/floppy-disk.png")}/>
          <Button title='Share PDF file' onPress={printToFile}/>
      </View>
      {Platform.OS === 'ios' &&
        <>
          <View style={styles.spacer} />
          <Button title='Select printer' onPress={selectPrinter}/>
          <View style={styles.spacer} />
          {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
        </>
      }
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    

  },
  spacer:{
    height:50
  },
  buttonContainer:{
    height:"30%",
    alignItems:"center",
    padding:50,
  },
  image:{
    width:75,
    height:75,
    marginBottom:30,
  }



})
