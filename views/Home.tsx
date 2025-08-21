import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
 
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.bloco}>
                <Text style={styles.Texto}>Bem vindo!!</Text>
 
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Investimento' as never)}
                >
                    <Text style={styles.textoBtn}>Investimento</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Financiamento ' as never)}
                >
                    <Text style={styles.textoBtn}>Financiamento</Text>
                </TouchableOpacity>
        </View>
    );
}
 
const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Texto:{
        fontSize:30
    },
    btn:{
       backgroundColor:"#5599AA",
       width:'80%',
       padding:10,
       marginBottom:20,
       marginTop: 20,
       borderRadius:20
    },
    textoBtn:{
        color:"#FFF",
        fontSize:30,
        textAlign:'center'
    }
});