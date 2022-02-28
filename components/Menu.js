import { StyleSheet, View,Button,ImageBackground} from 'react-native';

import image from '../ressources/kira-auf-der-heide-_Zd6COnH5E8-unsplash.jpg'



function Menu ({navigation}){


    return (
        <View style={styles.container}>
            <ImageBackground  source={image} style={styles.image}>    
                <View style={{flex:2}} ></View>
                <View style={{flex:1}}>
                    <View style={styles.buttonContainer}>
                        <Button title="Nouveau diagnostique" color="#rgba(24,83,79,1)"  onPress={() => navigation.navigate('Nouveau diagnostique')} ></Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Archives" color="#rgba(24,83,79,1)" onPress={() => navigation.navigate('Historique')}></Button>
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
        flex:1,
    }
  });

export default Menu