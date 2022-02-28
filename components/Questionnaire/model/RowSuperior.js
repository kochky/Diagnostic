import { StyleSheet, Text, View } from 'react-native';

function RowSuperior(){

    return(
        <View style={styles.row}>
            <View style={{flex:1.5}}></View>
            <Text style={{flex:0.5}}></Text>
            <Text style={styles.green}>FND</Text>
            <Text style={styles.red}>FD</Text>
            <Text style={styles.red}>NFD</Text>
            <Text style={styles.red}>NFND</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:"row",
        textAlign:'center',
        alignItems:"center",
        fontWeight:"bold"
    },
    green:{
        flex:1,
        backgroundColor:"#75BB99",
        fontWeight:"bold"

    },
    red:{
        flex:1,
        backgroundColor:"#EC3C4C",
        fontWeight:"bold",
        textAlign:'center',


    }
});

export default RowSuperior