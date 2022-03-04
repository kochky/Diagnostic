import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import { Slider, Icon } from 'react-native-elements';
import { UserContext } from '../../../Context'

function RowFMS({text}){
    
    const [value, setValue] = useState(-1);
    const [isLoaded,setIsLoaded]=useState(false)
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date

  
    useEffect(() => {
        props.setData(data=>({
            ...data,
            [patientId]:{
                ...data[patientId]
                ,["FMS"]:{...data[patientId]["FMS"]
                ,[text]:value}
            }}))
        setIsLoaded(true)
    }, [value])

    useEffect(() => {
      
        if(isLoaded){
            if (typeof(props.data[patientId]["FMS"])!= "undefined"){
                if (typeof props.data[patientId]["FMS"][text] =="number"){
                    setValue(props.data[patientId]["FMS"][text])
                }
            }
        }
    }, [isLoaded])
    
     
    const color = () => {
        switch(value){
            case -1:
                return "lightgrey";
                break;
            case 0:
               return "#EC3C4C";
               break;
            case 1:
                return "#F27438";
                break;
            default:
                return "#75BB99";
                break;
       }
    };
    
    return(
        <View style={styles.row}>
            <Text style={{flex:1.5}}>{text}</Text>
            <View   style={styles.view}>
                <Slider
                    value={value}
                    onValueChange={setValue}
                    maximumValue={3}
                    minimumValue={-1}
                    minimumTrackTintColor={color()}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 10, width: 10, backgroundColor: 'transparent' }}
                    thumbProps={{
                        children: (
                    <Icon 
                        type="font-awesome"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 15, right: 10 }}
                        color={color()}
                    />
                    ),
                }}
                />
            </View>   
            <View style={{flex:0.5}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    },
    view:{
        flex:4,
        alignItems:"center",
        padding: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
        
    }
});

export default RowFMS