import { StyleSheet, Text, View } from 'react-native';

function RowSuperior(){

    return(
        <View style={styles.row}>
            <View style={{flex:2}}></View>
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
        fontWeight:"bold",
        width: '100%',

    },
    green:{
        flex:1,
        backgroundColor:"#75BB99",
        fontWeight:"bold",
        textAlign:'center',


    },
    red:{
        flex:1,
        backgroundColor:"#EC3C4C",
        fontWeight:"bold",
        textAlign:'center',


    }
});

export default RowSuperior