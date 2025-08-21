import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Api from '../components/Api';
 
export default function BelfordRoxo(){
    const [dados, setDados] = useState<any[]>([]);
 
  async function buscaDados() {
  const response = await Api.get('finance?key=a040d0ad');
  console.log(response.data.results);
}
    useEffect(
        ()=>{buscaDados()
        },[]);

        const [VlDoBem, setVlDoBem] = useState ('');
        const [Parcelas, setParcelas] = useState ('');
        const [TaxaAno, setTaxaAno] = useState ('');
 
    return(
        <View style={styles.bloco}>
            <Text style={styles.Texto}>Financiamentos</Text>
 
        </View>
    );
}
 
const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:40,
    },
    Texto:{
        fontSize:20,
    },
    lista:{
        height:'70%',
        width:'100%'
    }
})
 