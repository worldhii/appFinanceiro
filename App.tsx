import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import Home from './views/Home';
import Financiamento from './views/Financiamento';
import Investimento from './views/investimento';
 
const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Financiamento:Financiamento,
    Investimento:Investimento,
  },
});
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});