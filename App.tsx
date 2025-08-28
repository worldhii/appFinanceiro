import * as React from 'react';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
// lembrete: npm install @react-navigation/native @react-navigation/native-stack react-native-screens  ->
// --> react-native-safe-area-context react-native-gesture-handler react-native-reanimated
 
 
import Home from './views/Home';
import Investimento from './views/investimento';
import Financiamento from './views/Financiamento';
 
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: Home,
    Financiamento: Financiamento,
    Investimento: Investimento,
 
  },
 
  });
 
const Navigation = createStaticNavigation(RootStack);
 
export default function App() {
  return <Navigation />;
}