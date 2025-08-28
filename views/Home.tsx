import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../components/Api';
import Taxas from '../components/Taxas';

export default function Home() {
  const [dolar, setDolar] = useState<number>(0);
  const [euro, setEuro] = useState<number>(0);
  const [cdi, setCdi] = useState<number>(0);
  const [selic, setSelic] = useState<number>(0);

  async function buscaDados() {
    try {
      const response = await api.get('finance?key=a040d0ad');
      const resultados = response.data.results;

      setDolar(resultados.currencies.USD.buy);
      setEuro(resultados.currencies.EUR.buy);
      setCdi(resultados.taxes[0].cdi);
      setSelic(resultados.taxes[0].selic);
    } catch (error) {
      console.log('Erro ao buscar dados da API:', error);
    }
  }

  useEffect(() => {
    buscaDados();
  }, []);

   const navigation = useNavigation();

  return (
    <View style={styles.bloco}>
      <Image source={require('../assets/Logo(1).png')} style={styles.logo} />

      <Text style={styles.Texto}>Seja Bem Vindo</Text>

      <Taxas dolar={dolar} euro={euro} cdi={cdi} selic={selic} />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Financiamento' as never)}
      >
        <Text style={styles.textoBtn}>Financiamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Investimento' as never)}
      >
        <Text style={styles.textoBtn}>Investimento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f6f4f0'
  },
  Texto: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: '#cdc6b7',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  textoBtn: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
  },
  logo: {
    marginBottom: 35,
    height:'20%',
    width: '30%',

  },
  text: {
    marginBottom: 15,
    fontSize: 30,
  },
});