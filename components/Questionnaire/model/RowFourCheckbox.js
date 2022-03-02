import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import { Slider, Icon } from 'react-native-elements';
import { UserContext } from '../../../Context'
import commentaireArray from '../../ressources/commentairesArray';
import { data } from 'browserslist';


function RowFourCheckbox({title,text}){
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const [isLoaded,setIsLoaded]=useState(false)
    const [comment,setComment]=useState()
    const [value, setValue] = useState(0);

    useEffect(() => {
        if(isLoaded===false){
            if(typeof(props.data[patientId][title]) != "undefined"){
                setValue(props.data[patientId][title][text])
            }
            if (typeof props.data[patientId]["diagnostic"][title]!="undefined"){
                setComment(props.data[patientId]["diagnostic"][title][text])

            }

        }
            

        setIsLoaded(true)

        if(isLoaded){
            props.setData(data=>({
                ...data,
                [patientId]:{
                    ...data[patientId],
                    [title]:{...data[patientId][title]
                    ,[text]:value}
                }}))

            commentaireArray.map((commentaire)=>{if (Object.keys(commentaire).toString()===text.toString() && value===1){
                setComment(Object.values(commentaire).toString())
                props.setData(data=>({...data,
                    [patientId]:{...data[patientId],
                        ["diagnostic"]:{...data[patientId]["diagnostic"],
                            [title]:{...data[patientId]["diagnostic"][title],
                                [text]:Object.values(commentaire).toString()
                }}}}))
            }})
            commentaireArray.map((commentaire)=>{if (Object.keys(commentaire).toString()===text.toString() && value===0){
                setComment()
                const copy= props.data[patientId]["diagnostic"][title]
                delete copy[text]
                props.setData(data=>({...data,
                    [patientId]:{...data[patientId],
                        [title]:{...data[patientId]["diagnostic"][title],
                            ["diagnostic"]:{...data[patientId]["diagnostic"],
                            [title]:copy
                        }
                }}}))
            }})
           
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
        <View>
            <View style={styles.row}>
                <Text style={{flex:2,marginRight:20}}>{text}</Text>
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
            <View style={{height:50,marginTop:20}}>
                <Text style={styles.text}>{comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        height:60,
        
    },
    view:{
        flex:4,
        alignItems:"center",
        padding: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
        height:60
        
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
});

export default RowFourCheckbox