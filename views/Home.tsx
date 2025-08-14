import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.bloco}>
                <Text style={styles.Texto}>App Financeiro</Text>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('' as never)}
                >
                    <Text style={styles.textoBtn}>Financiamento</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('' as never)}
                >
                    <Text style={styles.textoBtn}>Investimento</Text>
                </TouchableOpacity>


        </View>
    );
} 

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#B4BEC9",
        
    },
    Texto:{
        fontSize:30,
        color:"#164773",
        fontWeight:"bold"
        
    },

    btn:{
       backgroundColor:"#164773",
       width:'80%',
       padding:10,
       marginBottom:20,
       marginTop: 20,
       borderRadius:20
    },

    textoBtn:{
        fontSize:30,
        textAlign:'center',
        color: "#B4BEC9"
    }
});