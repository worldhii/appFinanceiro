import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
//import from ;
//import  from ;
//import  from;
//import  from;

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
   
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}