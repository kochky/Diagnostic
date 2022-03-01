import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import { Slider, Icon } from 'react-native-elements';
import { UserContext } from '../../../Context'

function RowFourCheckbox({title,text}){
    
    const [value, setValue] = useState(0);
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const [isLoaded,setIsLoaded]=useState(false)

    useEffect(() => {
        setIsLoaded(true)
        
        if(isLoaded){
            props.setData(data=>({
                ...data,
                [patientId]:{
                    ...data[patientId],
                    [title]:{...data[patientId][title]
                    ,[text]:value}
                }}))
            
                if(text==="Flexion active supine" && value===1){
                props.setData(data=>({...data,
                    [patientId]:{...data[patientId],
                        [title]:{...data[patientId][title],
                            ["diagnostic"]:{...data[patientId][title]["diagnostic"],
                        [text]:"SMCD Flexion cervicale et muscles posturaux du cou"
                }}}}))
            }else {
                const copyData= {...props.data[patientId][title]["diagnostic"]}
                delete copyData[text]
                props.setData(data=>({...data,
                    [patientId]:{...data[patientId],
                        [title]:{...data[patientId][title],
                            ["diagnostic"]:copyData
                }}}))

            }
        }else {
            props.setData(data=>({...data,
                [patientId]:{...data[patientId],
                    [title]:{...data[patientId][title],
                        ["diagnostic"]:""
            }}}))
        }
    }, [value])
     
    const color = () => {
        switch(value){
            case 0:
               return "lightgrey";
               break;
            case 1:
                return "#75BB99";
                break;
            default:
                return "#EC3C4C";
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
                    maximumValue={4}
                    minimumValue={0}
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

export default RowFourCheckbox