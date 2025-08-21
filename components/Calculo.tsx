
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

 interface propsCalculo{
       selic:number,
       cdi:number
       
    }


export default function CalculoInvest({  } : propsCalculo){
   
    return(
        <View style={styles.principal}>
  
        </View>
    );
}

const styles = StyleSheet.create({
    principal:{
        width:'80%',
        borderWidth:2,
        borderRadius:30,
        padding:20,
        margin:35,
        backgroundColor:"#164773",
        borderColor:"#164773"
        
    },
    texto:{
        fontSize:20,
        color:"#ffffffff"
    },
    imagem:{
        width:80,
        height:80,
       
    },
     
    colection:{
        flexDirection:"row",
        marginLeft:40
    }
});