import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import { UserContext } from '../../../Context'
import commentaireArray from '../../ressources/commentairesArray';
import { CheckBox } from 'react-native-elements';


function FirstRowFourCheckbox({title,text,setHidden}){
    const props = React.useContext(UserContext); 
    const patientId= props.name+props.firstName+props.date
    const [isLoaded,setIsLoaded]=useState(false)
    const [comment,setComment]=useState()
    const [value, setValue] = useState(0);

    useEffect(() => {
        if(value===0 || value===1){
            setHidden(true)
        }else {
            setHidden(false)
        }
        
        if(isLoaded===false){
            if(typeof(props.data[patientId][title]) == "object"){
                if(typeof props.data[patientId][title][text] =="number"){
                    setValue(props.data[patientId][title][text])
                }
            }
            if (typeof props.data[patientId]["diagnostic"][title]== "object"){
                setComment(props.data[patientId]["diagnostic"][title][text])
            }
            setIsLoaded(true)

        }

        else if(isLoaded){
            props.setData(data=>({
                ...data,
                [patientId]:{
                    ...data[patientId],
                    [title]:{...data[patientId][title]
                    ,[text]:value}
                }}))

            if(text.toString()==="Oeuf (rachis en flexion)"){
                if(value===1){
                    setComment("SMCD muscles de la flexion rachidienne")
                    props.setData(data=>({...data,
                        [patientId]:{...data[patientId],
                            ["diagnostic"]:{...data[patientId]["diagnostic"],
                                [title]:{...data[patientId]["diagnostic"][title],
                                    [text]:"SMCD muscles de la flexion rachidienne"
                    }}}}))

                }else if(value!=0 && value !=1){
                    setComment("JMD/TED flexion du rachis")
                    props.setData(data=>({...data,
                        [patientId]:{...data[patientId],
                            ["diagnostic"]:{...data[patientId]["diagnostic"],
                                [title]:{...data[patientId]["diagnostic"][title],
                                    [text]:"JMD/TED flexion du rachis"
                    }}}}))

                }else if (value===0){
                    setComment()
                    const copy= props.data[patientId]["diagnostic"][title]
                    delete copy[text]
                    props.setData(data=>({...data,
                        [patientId]:{...data[patientId],
                            ["diagnostic"]:{...data[patientId]["diagnostic"],
                                [title]:{...data[patientId]["diagnostic"][title],
                                [title]:copy
                            }
                    }}}))

                }
            }
            else if(text.toString()==="Ligne GH-GH- Coude" ) {
                if(value!=0 && value !=1){
                    setComment("voir appley sup")
                        props.setData(data=>({...data,
                            [patientId]:{...data[patientId],
                                ["diagnostic"]:{...data[patientId]["diagnostic"],
                                    [title]:{...data[patientId]["diagnostic"][title],
                                        [text]:"voir appley sup"
                        }}}}))
                }else {
                        setComment()
                    const copy= props.data[patientId]["diagnostic"][title]
                    delete copy[text]
                    props.setData(data=>({...data,
                    [patientId]:{...data[patientId],
                        ["diagnostic"]:{...data[patientId]["diagnostic"],
                            [title]:copy
                        }
                }}))
                }
            }else if (text.toString()==="Deep squat" ){
                if(value!=0 && value !=1){
                    setComment("faire assist??")
                        props.setData(data=>({...data,
                            [patientId]:{...data[patientId],
                                ["diagnostic"]:{...data[patientId]["diagnostic"],
                                    [title]:{...data[patientId]["diagnostic"][title],
                                        [text]:"faire assist??"
                        }}}}))
                }else {
                        setComment()
                    const copy= props.data[patientId]["diagnostic"][title]
                    delete copy[text]
                    props.setData(data=>({...data,
                    [patientId]:{...data[patientId],
                        ["diagnostic"]:{...data[patientId]["diagnostic"],
                            [title]:copy
                        }
                }}))
                }

            }  
            
            commentaireArray.map((commentaire)=>{if (Object.keys(commentaire).toString()===text.toString() && value===1){
          
                setComment(Object.values(commentaire).toString())
                props.setData(data=>({...data,
                    [patientId]:{...data[patientId],
                        ["diagnostic"]:{...data[patientId]["diagnostic"],
                            [title]:{...data[patientId]["diagnostic"][title],
                                [text]:Object.values(commentaire).toString()
                }}}}))
            }})
            commentaireArray.map((commentaire)=>{if (Object.keys(commentaire).toString()===text.toString() && value !=1){
                setComment()
                const copy= props.data[patientId]["diagnostic"][title]
                delete copy[text]
                props.setData(data=>({...data,
                    [patientId]:{...data[patientId],    
                            ["diagnostic"]:{...data[patientId]["diagnostic"],
                            [title]:copy
                        }
                }}))
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
    function checkValue(x){
        if (value===x){
            return true
        } 
        return false
    }

    function removeChecked(x){
        if(value===x){
            setValue(0)
        }else {
            setValue(x)
        }
    }

    return(
        <View>
            <View style={styles.row}>
                <Text style={{flex:2,fontWeight:"bold"}}>{text}</Text>
                <View style={styles.view}>
                    <View   style={{flex:1,alignItems:'center'}}>
                        <CheckBox 
                            checked={checkValue(1) }
                            onPress={()=>removeChecked(1)}  />
                    </View>
                    <View   style={{flex:1,alignItems:'center'}}>
                        <CheckBox 
                            checked={checkValue(2) }
                            onPress={()=>removeChecked(2)}  />
                    </View>
                    <View   style={{flex:1,alignItems:'center'}}>
                        <CheckBox 
                            checked={checkValue(3) }
                            onPress={()=>removeChecked(3)}  />
                    </View>
                    <View   style={{flex:1,alignItems:'center'}}>
                        <CheckBox 
                            checked={checkValue(4) }
                            onPress={()=>removeChecked(4)}  />
                    </View>
                </View> 
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
        height:"auto",
        
    },
    view:{
        flex:4,
        alignItems:"center",
        padding: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
        height:60,
        flexDirection:"row",
        alignItems:"center",
        
    },
    text:{
        color:"#rgba(24,83,79,1)",
        fontWeight:"bold",
    }
});

export default FirstRowFourCheckbox