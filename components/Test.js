import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text, Image } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { UserContext } from '../Context'




export default function Test() {
  const props = React.useContext(UserContext); 
  const patientId= props.name+props.firstName+props.date
  
  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
        Hello Expo!${props.data[patientId]["name"]}
      </h1>
      <img
        src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
        style="width: 90vw;" />
    </body>
  </html>
  `;

  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
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
